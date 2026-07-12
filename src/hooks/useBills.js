import useAsyncData from "./useAsyncData";
import {fetchBills} from "./mockFetchers";

export function useBills() {
  return useAsyncData(fetchBills, []);
}