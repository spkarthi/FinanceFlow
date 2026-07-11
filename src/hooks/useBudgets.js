import {useAsyncData} from "./useAsyncData";
import {fetchBudgets} from "./mockFetchers";

export function useBudgets() {
  return useAsyncData(fetchBudgets, []);
}