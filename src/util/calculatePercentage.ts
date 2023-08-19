type CalculatePercentageProps = {
  goalPrice: number;
  price: number;
  student: number;
};

export const calculatePercentage = ({
  goalPrice,
  price,
  student,
}: CalculatePercentageProps): number => {
  const totalCollected = price * student;
  const percentage = (totalCollected / goalPrice) * 100;
  return Math.floor(percentage);
};
