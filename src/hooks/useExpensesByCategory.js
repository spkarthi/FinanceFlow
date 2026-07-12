import useAsyncData from "./useAsyncData";
import {fetchExpensesByCategory} from "./mockFetchers";

export function useExpensesByCategory() {
  return useAsyncData(fetchExpensesByCategory, []);
}