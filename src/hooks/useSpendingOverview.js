import useAsyncData from "./useAsyncData";
import {fetchSpendingOverview} from "./mockFetchers";

export function useSpendingOverview() {
  return useAsyncData(fetchSpendingOverview, []);
}