import { create } from 'zustand';

type State = {
    currentYear: number,
    pageWidth: number,
    mapState: "list" | "map",
}

type Action = {
    setPageWidth(newSize: number): void,
    setMapState(newState: "list" | "map"): void,
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
}))

export default useDragonStore;