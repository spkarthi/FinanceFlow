// src/hooks/useTransactions.js
import { useAsyncData } from "./useAsyncData";
import { fetchTransactions } from "./mockFetchers";

export function useTransactions() {
  return useAsyncData(fetchTransactions, []);
}