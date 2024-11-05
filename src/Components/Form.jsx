import { useState } from "react";

export const Form = () => {
  const [loginWithOTP, setLoginWithOTP] = useState(true);

  return (
    <div className="w-full py-10 px-5 space-y-4">
      <h1 className="text-3xl font-semibold">Go GST Bill</h1>
      <h3 className="text-2xl font-semibold">Login to your Account</h3>
      <form className="py-5 space-y-4">
        {loginWithOTP ? <OTPForm /> : <UserIDForm />}
        <label className="flex gap-3 items-center my-5">
          <input type="checkbox" className="size-4 accent-green-500" />{" "}
          <span className="text-gray-800">Remember me on this device</span>
        </label>
        {!loginWithOTP && (
          <div className="flex justify-end items-center my-4">
            <span className="underline text-sm font-light hover:text-blue-500">
              forget password?
            </span>
          </div>
        )}
        <Buttons />
      </form>
      <Seperator />
      <div className="flex flex-col justify-center items-center space-y-10 my-4">
        <button
          className="rounded-full bg-gray-300/40 py-2 px-8 text-gray-900 font-medium"
          onClick={() => setLoginWithOTP(!loginWithOTP)}
        >
          {loginWithOTP ? "Login using User ID" : "Login using OTP"}
        </button>
        <span className="underline text-sm font-medium">
          <i class="fa-solid fa-arrow-left"></i>{" "}
          <span>Back to GoGSTBill.Com</span>
        </span>
      </div>
    </div>
  );
};

const UserIDForm = () => {
  return (
    <div className="w-full space-y-5">
      <InputFeild label={"Please enter your User ID"} placeholder={"User ID"} />
      <InputFeild
        label={"Please enter your Password"}
        placeholder={"Password"}
        type={"password"}
      />
    </div>
  );
};

const OTPForm = () => {
  return (
    <div className="w-full">
      <InputFeild
        label={"Please enter your User ID"}
        placeholder={"User ID"}
        icon={"envelope"}
      />
    </div>
  );
};

const InputFeild = ({ label, placeholder, type = "text", icon = null }) => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <label className="text-sm text-gray-800">
        {label}
        <span className="text-red-500">*</span>
      </label>
      {icon ? (
        <div className="flex justify-start items-center text-lg">
          <span className="h-10 px-3 flex justify-center items-center bg-gray-300/70 border-[0.5px] border-gray-400/70">
            <i className={`fa-solid fa-${icon}`}></i>
          </span>
          <input
            type={type}
            className="w-full border-[0.5px] h-10 border-gray-400/70 p-2 focus:border-green-400/70 outline-none"
            placeholder={placeholder}
          />
        </div>
      ) : (
        <input
          type={type}
          className="w-full border-[0.5px] border-gray-400/70 p-2 focus:border-green-400/70 outline-none"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex justify-between items-center gap-5 py-5">
      <button className="bg-green-500 rounded-sm py-1 px-4 text-lg text-white">
        Login
      </button>
      <button className="bg-blue-500 rounded-sm py-1 px-4 text-lg text-white">
        Create New Account
      </button>
    </div>
  );
};

const Seperator = () => {
  return (
    <div className="flex items-center gap-x-2">
      <hr className="w-full border-gray-300/30 border-[1.5px]" />
      <span className="text-xl">OR</span>
      <hr className="w-full border-gray-300/30 border-[1.5px]" />
    </div>
  );
};
