import { create } from 'zustand';

type State = {
    currentYear: number,
    pageWidth: number,
}

type Action = {
    setPageWidth(newSize: number): void,
}

const useDragonStore = create<State & Action>(set => ({
    currentYear: new Date().getFullYear(),

    pageWidth: 0,
    setPageWidth: (newSize) => set(() => ({
        pageWidth: newSize
    })),
}))

export default useDragonStore;