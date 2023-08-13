export interface PreviewData {
  id: number;
  percentage: string;
  price: string;
  dday: string;
  title: string;
  thumbnail: string;
  category: string;
}

export interface FundingData {
  title: string;
  content: string;
  goalPrice: string;
  price: string;
  startdate: string;
  enddate: string;
  thumbnail: File | null;
  introductionImg: File | null;
  category: string;
}
