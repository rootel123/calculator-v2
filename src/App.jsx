import { useState } from "react";
import CalDelBt from "./components/CalDelBt";
import Calenbt from "./components/Calentbt";
import Calinput from "./components/Calinput";
import Calnumbt from "./components/Calnumbt";
import CalOperbt from "./components/CalOperbt";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState();
  const [operator, setOperator] = useState();

  return (
    <main className="bg-blue-200 min-h-screen flex justify-center items-center">
      <div className="bg-zinc-500 w-[368px] px-8 py-12 rounded-lg shadow-md">
        <Calinput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <CalDelBt result={result} setResult={setResult} />
          <button className="btn-style  bg-teal-500 active:bg-teal-700">
            ( )
          </button>
          <button className="btn-style  bg-teal-500 active:bg-teal-700">
            %
          </button>
          <CalOperbt
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="÷"
          />
          <Calnumbt result={result} setResult={setResult} number="7" />
          <Calnumbt result={result} setResult={setResult} number="8" />
          <Calnumbt result={result} setResult={setResult} number="9" />
          <CalOperbt
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="×"
          />
          <Calnumbt result={result} setResult={setResult} number="4" />
          <Calnumbt result={result} setResult={setResult} number="5" />
          <Calnumbt result={result} setResult={setResult} number="6" />
          <CalOperbt
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="+"
          />
          <Calnumbt result={result} setResult={setResult} number="1" />
          <Calnumbt result={result} setResult={setResult} number="2" />
          <Calnumbt result={result} setResult={setResult} number="3" />
          <CalOperbt
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="-"
          />
          <Calnumbt
            result={result}
            setResult={setResult}
            wide="w-[144px]"
            number="0"
          />
          <button className="btn-style ml-20">.</button>
          <Calenbt
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
            setOperator={setOperator}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
