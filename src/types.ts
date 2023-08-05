export interface PreviewData {
  id: number;
  percentage: string;
  price: string;
  dday: string;
  title: string;
}

export interface FundingData {
  title: string;
  cost: string;
  start: string;
  end: string;
  thumbnail: File | null;
  category: string;
}
