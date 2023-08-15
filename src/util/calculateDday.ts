export const calculateDday = (startdate?: string, enddate?: string): string => {
  if (!startdate || !enddate) return ""; // 값을 받지 못했을 때 빈 문자열 반환

  const startDate = new Date(startdate);
  const endDate = new Date(enddate);

  const diffInMs = endDate.getTime() - startDate.getTime();

  return String(diffInMs / (1000 * 60 * 60 * 24));
};
