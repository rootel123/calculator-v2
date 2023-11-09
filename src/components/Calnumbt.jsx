const CalNumberBtn = ({ result, setResult, number, wide }) => {
  const onClickNumber = () => {
    result === "0" ? setResult(number) : setResult(result + number);
  };

  return (
    <button className={`btn-style ${wide}`} onClick={onClickNumber}>
      {number}
    </button>
  );
};

export default CalNumberBtn;
