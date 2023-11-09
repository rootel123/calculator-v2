const Calentbt = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onClickEnt = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "×":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "÷":
        setResult(String(parseInt(Number(temp) / Number(result), 10)));
        break;
    }

    setTemp("");
    setOperator("");
  };
  return (
    <button
      className="btn-style  bg-lime-500 active:bg-lime-700 ml-20"
      onClick={onClickEnt}
    >
      =
    </button>
  );
};

export default Calentbt;
