export interface ErrorResult {
  message: string;
  errors?: {
    [key: string]: string[];
  };
}
