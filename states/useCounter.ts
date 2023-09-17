import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  counter: number;
};

type Actions = {
  add: () => void;
  reset: () => void;
};

const useCounter = create<State & Actions>()(
  persist(
    (set) => ({
      counter: 0,
      add: () => {
        set((state) => ({
          counter: state.counter + 1,
        }));
      },
      reset: () => {
        set(() => ({
          counter: 0,
        }));
      },
    }),
    {
      name: "state-useCounter",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useCounter;