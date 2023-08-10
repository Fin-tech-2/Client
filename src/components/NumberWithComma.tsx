interface NumberWithCommasProps {
  number: number;
}
const NumberWithComma = ({ number }: NumberWithCommasProps) => {
  const numberWithCommas = number.toLocaleString(); // 숫자를 세 자리수마다 콤마로 구분

  return <span>{numberWithCommas} 원 달성</span>;
};

export default NumberWithComma;
