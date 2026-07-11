// src/hooks/useSummary.js
import { useAsyncData } from "./useAsyncData";
import { fetchSummary } from "./mockFetchers";

export function useSummary() {
  return useAsyncData(fetchSummary, []);
}