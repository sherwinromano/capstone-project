import { Link } from "react-router-dom";
import logo from "../../assets/ctu-logo.png";

const SignIn = () => {
  return (
    <div className="flex flex-col w-3/5 h-auto gap-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-[8rem]">
          <img className="h-full w-full" src={logo} alt="CTU Logo" />
        </div>
        <div className="flex flex-col items-center h-full w-full">
          <h1 className="font-bold text-[1.5rem]">HealthHub Connect</h1>
          <p className="text-base text-center w-[60%] leading-tight">
            An Integrated Kahimsug Clinic Management System in CTU Argao
          </p>
        </div>
      </div>
      <form className="flex flex-col gap-1 w-full">
        <label htmlFor="userIdentifier">Email or ID Number</label>
        <input
          className="input-style"
          type="text"
          id="userIdentifier"
          placeholder="Enter your email or ID number"
        />

        <label htmlFor="password">Password</label>
        <input
          className="input-style"
          type="password"
          id="password"
          placeholder="Enter your password" // Placeholder added here
        />
        
        <div className="mt-2 flex justify-between items-center">
          <input className="input-submit-style" type="submit" value="Sign In" />
          <Link className="text-[14px]" to="/auth/account-recovery">
            Forgot Password
          </Link>
        </div>
      </form>
      <p className="text-[14px]">
        Don't have an account?{" "}
        <Link className="underline" to="/auth/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
