import { create } from 'zustand';

type StoreState = {
  cidade: string;
  dataChegada: string;
  dataSaida: string;
 
  setCidade: (novaCidade: string) => void;
  setDataChegada: (novaDataChegada: string) => void;
  setDataSaida: (novaDataSaida: string) => void;

}

const useStore = create<StoreState>((set) => ({
  cidade: '',
  dataChegada: '',
  dataSaida: '',

  setCidade: (novaCidade: string) => set({ cidade: novaCidade }),
  setDataChegada: (novaDataChegada: string) => set({ dataChegada: novaDataChegada }),
  setDataSaida: (novaDataSaida: string) => set({ dataSaida: novaDataSaida }),
  
}));

export default useStore;
