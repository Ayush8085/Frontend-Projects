import { useEffect, useState } from "react";
import pattern_divider_desktop from "./assets/pattern-divider-desktop.svg";
import pattern_divider_mobile from "./assets/pattern-divider-mobile.svg";
import icon_dice from "./assets/icon-dice.svg";

const BACKEND_URI = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState("Old is Gold");
  const [adviceId, setAdviceId] = useState(1);

  const handleReceiveAdvice = () => {
    fetch(BACKEND_URI)
      .then((res) => res.json())
      .then((data) => {
        setAdviceId(data.slip.id);
        setAdvice(data.slip.advice);
      });
  };
  useEffect(() => {
    handleReceiveAdvice();
  }, [advice]);

  return (
    <div className="wrapper min-h-screen grid place-content-center mx-5">
      <div className="card max-w-[375px] h-auto bg-clr-dark-grayish-blue text-center p-7 rounded-3xl relative">
        <h1 className="text-clr-primary-green text-sm tracking-[.2rem] uppercase">
          Advice # {adviceId}
        </h1>
        <p className="text-clr-primary-cyan text-3xl my-6 font-semibold">
          &#8220; {advice} &#8221;
        </p>
        <img src={pattern_divider_mobile} alt="" className="sm:hidden mb-8" />
        <img src={pattern_divider_desktop} alt="" className="hidden sm:block mb-8" />
        <div
          className="card-dice bg-clr-primary-green hover:cursor-pointer left-0 right-0 m-auto w-20 h-auto p-6 absolute rounded-full grid place-content-center"
          onClick={handleReceiveAdvice}
        >
          <img src={icon_dice} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
