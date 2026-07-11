import {useAsyncData} from "./useAsyncData";
import {fetchAlerts} from "./mockFetchers";

export function useAlerts() {
  return useAsyncData(fetchAlerts, []);
}