const CalDelBt = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button
      className="btn-style bg-teal-500 active:bg-teal-700"
      onClick={onClickDel}
    >
      Del
    </button>
  );
};

export default CalDelBt;
