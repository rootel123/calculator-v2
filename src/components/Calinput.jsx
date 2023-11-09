const CalInput = ({ result, setResult }) => {
  const onChangeResult = (e) => {
    setResult(e.target.value);
  };

  return (
    <input
      className="px-4 py-2 bg-black text-white text-xl text-right w-full rounded-xl focus:outline-none"
      type="text"
      value={result}
      onChange={onChangeResult}
    />
  );
};

export default CalInput;
