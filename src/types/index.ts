export interface FetchObjType {
  url: string;
  debounceTime?: number;
}

export interface UseFetchReturnType {
  loading: boolean;
  data: any;
  error: boolean;
}
