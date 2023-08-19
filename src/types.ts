export interface FundingData {
  id: number;
  title: string;
  content: string;
  goalPrice: string;
  price: string;
  startdate: string;
  enddate: string;
  thumbnail: File | null;
  introductionImg: File | null;
  category: string;
  student: number;
}
