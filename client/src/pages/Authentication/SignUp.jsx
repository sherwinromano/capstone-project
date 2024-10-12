import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ctu-logo.png";

const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setShowModal(false);
  };

  const validatePassword = (password) => {
    const requirements = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    setPasswordRequirements(requirements);

    // Set error message if any requirement is not met
    const errors = Object.keys(requirements).filter((key) => !requirements[key]);
    setPasswordError(errors.length ? `Password must include: ${errors.join(", ")}` : "");
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    checkConfirmPassword(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    checkConfirmPassword(password, newConfirmPassword);
  };

  const checkConfirmPassword = (password, confirmPassword) => {
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

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
        {/* ID Number Field */}
        <div className="flex gap-2 w-full">
          <div className="w-full">
            <label htmlFor="idNumber">ID Number</label>
            <input className="input-style w-full" type="text" />
          </div>
        </div>
        {/* Course Selection Field */}
        <div className="flex gap-2 w-full">
          <div className="w-full">
            <label htmlFor="course">Course</label>
            <input
              className="input-style w-full"
              type="text"
              value={selectedCourse}
              readOnly
              onClick={() => setShowModal(true)}
              placeholder="Select Course"
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input className="input-style" type="email" />
        <label htmlFor="password">Password</label>
        <input
          className="input-style"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
        {/* Confirm Password Field */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="input-style"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {confirmPasswordError && (
          <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
        )}
        
        {/* Password Requirements Checkboxes */}
        <div className="flex flex-col mt-2">
          <label>
            <input
              type="checkbox"
              checked={passwordRequirements.length}
              readOnly
            />
            At least 8 characters
          </label>
          <label>
            <input
              type="checkbox"
              checked={passwordRequirements.lowercase}
              readOnly
            />
            At least one lowercase letter
          </label>
          <label>
            <input
              type="checkbox"
              checked={passwordRequirements.uppercase}
              readOnly
            />
            At least one uppercase letter
          </label>
          <label>
            <input
              type="checkbox"
              checked={passwordRequirements.number}
              readOnly
            />
            At least one number
          </label>
          <label>
            <input
              type="checkbox"
              checked={passwordRequirements.specialChar}
              readOnly
            />
            At least one special character (!@#$%^&*)
          </label>
        </div>
        
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

      {/* Modal for Course Selection */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[20rem]">
            <h3 className="font-bold mb-4">Select Your Course</h3>
            <div className="flex flex-col gap-2">
              <label>
                <input
                  type="radio"
                  name="course"
                  value="BSIT"
                  onClick={() => handleCourseSelect("BSIT")}
                />
                BSIT
              </label>
              <label>
                <input
                  type="radio"
                  name="course"
                  value="BEED"
                  onClick={() => handleCourseSelect("BEED")}
                />
                BEED
              </label>
              <label>
                <input
                  type="radio"
                  name="course"
                  value="BTLed"
                  onClick={() => handleCourseSelect("BTLed")}
                />
                BTLed
              </label>
              <label>
                <input
                  type="radio"
                  name="course"
                  value="IE"
                  onClick={() => handleCourseSelect("IE")}
                />
                IE
              </label>
            </div>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
