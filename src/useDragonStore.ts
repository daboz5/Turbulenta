import { create } from 'zustand';
import { Char } from './types';

type State = {
    currentYear: number,
    pageWidth: number,
    mapState: "list" | "map",
    preselectChar: Char | undefined,
}

type Action = {
    setPageWidth(newSize: number): void,
    setMapState(newState: "list" | "map"): void,
    setPreselectChar(newCharState: Char | undefined): void,
}

const useDragonStore = create<State & Action>(set => ({
    currentYear: new Date().getFullYear(),

    pageWidth: 0,
    setPageWidth: (newSize) => set(() => ({
        pageWidth: newSize
    })),

    mapState: "list",
    setMapState: (newState) => set(() => ({
        mapState: newState
    })),

    preselectChar: undefined,
    setPreselectChar: (newCharState) => set(() => ({
        preselectChar: newCharState
    })),
}))

export default useDragonStore;