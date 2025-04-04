import React, { createContext, useContext, useState } from 'react';

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

interface PondContextType {
    ponds: Pond[];
    addPond: (pond: Omit<Pond, 'id' | 'createdDate' | 'totalDays' | 'parameters'>) => void;
    updateParameters: (pondId: string, parameters: PondParameters) => void;
}

const PondContext = createContext<PondContextType | undefined>(undefined);

export function PondProvider({ children }: { children: React.ReactNode }) {
    const [ponds, setPonds] = useState<Pond[]>([]);

    const addPond = (newPond: Omit<Pond, 'id' | 'createdDate' | 'totalDays' | 'parameters'>) => {
        const pond: Pond = {
            ...newPond,
            id: Date.now().toString(),
            createdDate: new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }),
            totalDays: 0,
            parameters: {
                waterLevel: {
                    value: 5,
                    unit: 'm',
                    status: 'TOO LOW',
                    threshold: 7
                },
                temperature: {
                    value: 31.5,
                    unit: '°C',
                    status: 'GOOD',
                    range: '32°C±0.5'
                },
                pH: {
                    value: 7.70,
                    status: 'SLIGHTLY BASIC',
                    range: '7±5%'
                },
                dissolvedOxygen: {
                    value: 4.78,
                    unit: 'mg/L',
                    status: 'GOOD',
                    range: '5 mg/L±5%'
                },
                lastUpdated: new Date().toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                })
            }
        };

        setPonds(currentPonds => [...currentPonds, pond]);
    };

    const updateParameters = (pondId: string, parameters: PondParameters) => {
        setPonds(currentPonds => 
            currentPonds.map(pond => 
                pond.id === pondId 
                    ? { ...pond, parameters }
                    : pond
            )
        );
    };

    return (
        <PondContext.Provider value={{ ponds, addPond, updateParameters }}>
            {children}
        </PondContext.Provider>
    );
}

export function usePonds() {
    const context = useContext(PondContext);
    if (context === undefined) {
        throw new Error('usePonds must be used within a PondProvider');
    }
    return context;
} 