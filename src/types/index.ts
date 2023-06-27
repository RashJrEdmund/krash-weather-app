export interface FetchObjType {
  url: string;
  debounceTime?: number;
}

export interface UseFetchReturnType {
  loading: boolean;
  data: any;
  error: boolean;
}

export interface StyledProps {
  showMenu?: boolean;
  url?: string;
}
