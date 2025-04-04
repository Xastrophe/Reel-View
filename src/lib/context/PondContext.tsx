import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PondParameters {
    waterLevel: {
        value: number;
        unit: string;
        status: string;
        threshold: number;
    };
    temperature: {
        value: number;
        unit: string;
        status: string;
        range: string;
    };
    pH: {
        value: number;
        status: string;
        range: string;
    };
    dissolvedOxygen: {
        value: number;
        unit: string;
        status: string;
        range: string;
    };
    lastUpdated: string;
}

export interface Pond {
    id: string;
    name: string;
    createdDate: string;
    totalDays: number;
    filled: number;
    capacity: number;
    fishCount: number;
    parameters: PondParameters;
}

interface NewPond {
    name: string;
    capacity: number;
    filled: number;
    fishCount: number;
}

interface PondContextType {
    ponds: Pond[];
    addPond: (pond: NewPond) => void;
    updateParameters: (pondId: string, parameters: Partial<Pond['parameters']>) => void;
    getPond: (id: string) => Pond | undefined;
}

// Storage key
const STORAGE_KEY = '@ponds_data';

// Context
const PondContext = createContext<PondContextType | undefined>(undefined);

// Provider
export const PondProvider = ({ children }: { children: React.ReactNode }) => {
    const [ponds, setPonds] = useState<Pond[]>([]);

    // Load ponds from storage when the app starts
    useEffect(() => {
        loadPonds();
    }, []);

    // Load ponds from AsyncStorage
    const loadPonds = async () => {
        try {
            const storedPonds = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedPonds) {
                setPonds(JSON.parse(storedPonds));
            }
        } catch (error) {
            console.error('Error loading ponds:', error);
        }
    };

    // Save ponds to AsyncStorage
    const savePonds = async (newPonds: Pond[]) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newPonds));
        } catch (error) {
            console.error('Error saving ponds:', error);
        }
    };

    const addPond = (newPond: NewPond) => {
        const pond: Pond = {
            id: Math.random().toString(36).substr(2, 9),
            ...newPond,
            createdDate: new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
            totalDays: 0,
            parameters: {
                waterLevel: {
                    value: 0,
                    unit: 'm',
                    status: 'low',
                    threshold: 0.5
                },
                temperature: {
                    value: 0,
                    unit: '°C',
                    status: 'normal',
                    range: '26-30'
                },
                pH: {
                    value: 0,
                    status: 'normal',
                    range: '6.5-8.5'
                },
                dissolvedOxygen: {
                    value: 0,
                    unit: 'mg/L',
                    status: 'normal',
                    range: '5-8'
                },
                lastUpdated: new Date().toLocaleString()
            }
        };

        const updatedPonds = [...ponds, pond];
        setPonds(updatedPonds);
        savePonds(updatedPonds);
    };

    const updateParameters = (pondId: string, parameters: Partial<Pond['parameters']>) => {
        const updatedPonds = ponds.map(pond => {
            if (pond.id === pondId) {
                return {
                    ...pond,
                    parameters: {
                        ...pond.parameters,
                        ...parameters,
                        lastUpdated: new Date().toLocaleString()
                    }
                };
            }
            return pond;
        });

        setPonds(updatedPonds);
        savePonds(updatedPonds);
    };

    const getPond = (id: string) => {
        return ponds.find(pond => pond.id === id);
    };

    const value = {
        ponds,
        addPond,
        updateParameters,
        getPond
    };

    return (
        <PondContext.Provider value={value}>
            {children}
        </PondContext.Provider>
    );
};

// Hook
export const usePonds = () => {
    const context = useContext(PondContext);
    if (context === undefined) {
        throw new Error('usePonds must be used within a PondProvider');
    }
    return context;
}; 