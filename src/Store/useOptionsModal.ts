import { create } from 'zustand'

type Store = {
    isOptionsModal : boolean,
    setIsOptionsModal : (incmoingOption : boolean)=>void
}

export const useOptionsModal = create<Store>((set)=>({
    isOptionsModal : false,
    setIsOptionsModal : (incmoingOption : boolean)=>{
        set({
            isOptionsModal : incmoingOption
        })
    }
}))