import { useState } from "react";
import logo from "../../assets/ctu-logo.png";

const Recovery = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

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
      <form className="flex flex-col w-full gap-1" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input className="input-style" type="email" />
        <input
          className="input-submit-style mt-4"
          type="submit"
          value="Submit"
        />
      </form>

      {/* Modal for additional instructions */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[20rem]">
            <h3 className="font-bold mb-4">Instructions</h3>
            <p>
              Instructions have been sent to your email. Please follow the steps in the email to change your password.
            </p>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={() => {
                handleCloseModal();
                window.location.href = "/auth/sign-in"; // Redirect to sign-in page
              }}
            >
              Back to Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recovery;
