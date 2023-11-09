const CalOperbt = ({
  result,
  setResult,
  setTemp,
  setOperator,
  inputOperator,
}) => {
  const onClickOperator = () => {
    if (isNaN(result)) {
      alert("숫자를 입력하세요.");
    } else {
      setTemp(result);
      setResult("0");
      setOperator(inputOperator);
    }
  };

  return (
    <button
      className="btn-style  bg-emerald-500 active:bg-emerald-700"
      onClick={onClickOperator}
    >
      {inputOperator}
    </button>
  );
};

export default CalOperbt;
