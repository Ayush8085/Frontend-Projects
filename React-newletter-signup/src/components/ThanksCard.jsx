import React from "react";
import icon_success from "../assets/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ThanksCard = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state.email;

  const handleDismiss = () => {
    navigate("/");
  };

  return (
    <div className=" bg-clr-white max-w-[375px] gap-8 flex flex-col p-14 rounded-3xl">
      <img src={icon_success} alt="" width={50} />
      <h1 className="text-6xl font-bold text-clr-dark-slate-grey tracking-tight">
        Thanks for subscribing!!
      </h1>
      <p className="font-semibold mt-2">
        A confirmation email has been sent to{" "}
        <b>{email ? email : "ash@loremcompany.com"}</b>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button
        onClick={handleDismiss}
        className="bg-clr-dark-slate-grey text-clr-white w-full border-2 p-4 rounded-xl my-2 hover:bg-gradient-to-r hover:from-clr-red hover:to-red-400"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default ThanksCard;
