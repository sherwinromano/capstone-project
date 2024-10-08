import logo from "../../assets/ctu-logo.png";

const Recovery = () => {
  return (
    <div className="flex flex-col gap-4 w-3/5">
      <div className="flex items-center gap-4 w-full">
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
      <div className="flex flex-col w-auto">
        <h2 className="font-bold text-[1.3rem]">Account Recovery</h2>
        <p>Please enter your email to change your password</p>
      </div>
      <form className="flex flex-col w-full gap-1">
        <label htmlFor="email">Email</label>
        <input className="input-style" type="email" />
        <input
          className="input-submit-style mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Recovery;
