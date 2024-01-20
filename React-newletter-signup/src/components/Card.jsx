import React, { useState } from "react";
import home_desktop from "../assets/illustration-sign-up-desktop.svg";
import home_mobile from "../assets/illustration-sign-up-mobile.svg";
import list_icon from "../assets/icon-list.svg";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailText, setEmailText] = useState("");

  const navigate = useNavigate();

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailText(email);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      return alert("Invalid email!!");
    } else {
      navigate("/thanks", { state: { email: emailText } });
    }
  };

  return (
    <div className="card bg-clr-white max-w-[750px] gap-8 flex flex-col-reverse p-0 sm:p-6 rounded-[2rem] sm:flex-row">
      <div className="card-left flex flex-col justify-center p-3 gap-4">
        <h1 className="text-6xl font-bold text-clr-dark-slate-grey tracking-tight">
          Stay updated!
        </h1>
        <p className="font-semibold mt-2">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="font-semibold">
          <li className="flex gap-4 my-2">
            <img src={list_icon} alt="List icon" width={18} />
            Product discovery and building what matters
          </li>
          <li className="flex gap-4 my-2">
            <img src={list_icon} alt="List icon" width={18} />
            Measuring to ensure updates are a success
          </li>
          <li className="flex gap-4 my-2">
            <img src={list_icon} alt="List icon" width={18} />
            And much more!
          </li>
        </ul>
        <form action="" className="flex flex-col" onSubmit={handleFormSubmit}>
          <label htmlFor="email" className="font-bold flex justify-between">
            <span>Email address</span>
            {emailError ? (
              <span className="text-clr-red">Valid email required</span>
            ) : null}
          </label>
          <input
            type="text"
            placeholder="email@company.com"
            name="email"
            className={
              "w-full border-2 p-4 rounded-xl my-2 " +
              (emailError
                ? "bg-red-100 border-red-300  outline-red-300 placeholder:text-clr-red"
                : "")
            }
            onChange={validateEmail}
          />
          <button
            type="submit"
            className="bg-clr-dark-slate-grey text-clr-white w-full border-2 p-4 rounded-xl my-2 hover:bg-gradient-to-r hover:from-clr-red hover:to-red-400"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <div className="card-right">
        <img src={home_desktop} alt="" className="hidden sm:block" />
        <img src={home_mobile} alt="" className="sm:hidden" />
      </div>
    </div>
  );
};

export default Card;
