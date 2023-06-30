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
  showMenu?: { left: boolean; right: boolean };
  url?: string;
  index?: number;
  fetching?: boolean;
  opacity?: string;
}
