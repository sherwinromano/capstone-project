import { Link } from "react-router-dom";
import logo from "../../assets/ctu-logo.png";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 w-3/5">
      <div className="flex items-center gap-4">
        <div className="flex w-[8rem]">
          <img className="h-full w-full" src={logo} alt="CTU Logo" />
        </div>
        <div className="flex flex-col items-end h-full w-full">
          <h1 className="font-bold text-[1.5rem]">HealthHub Connect</h1>
          <p className="text-base text-end w-[60%] leading-tight">
            An Integrated Kahimsug Clinic Management System in CTU Argao
          </p>
        </div>
      </div>
      <h2 className="font-bold text-[1.3rem]">Sign Up</h2>
      <form className="flex flex-col gap-1">
        <div className="flex gap-2 w-full">
          <div className="w-1/2">
            <label htmlFor="firstName">First Name</label>
            <input className="input-style w-full" type="text" />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName">Last Name</label>
            <input className="input-style w-full" type="text" />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input className="input-style" type="email" />
        <label htmlFor="password">Password</label>
        <input className="input-style" type="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className="input-style" type="password" />
        <input
          className="input-submit-style mt-4"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p className="text-[14px]">
        Already have an account?{" "}
        <Link className="underline" to="/auth/sign-in">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
