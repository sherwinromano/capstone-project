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
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [validFirstName, setValidFirstName] = useState(false);
  const [validMiddleInitial, setValidMiddleInitial] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const courses = {
    "COLLEGE OF EDUCATION, ARTS AND SCIENCES (COEd, AS)": [
      "Bachelor of Elementary Education (BEED)",
      "Bachelor of Secondary Education major in Math (BSED-Math)",
      "Bachelor of Technology and Livelihood Education major in Home Economics (BTLEd)",
      "Bachelor of Arts in English Language Studies (AB ELS)",
      "Bachelor of Arts in Literature (AB Lit)",
    ],
    "COLLEGE OF TECHNOLOGY AND ENGINEERING (CoTE)": [
      "Bachelor of Science in Industrial Engineering (BSIE)",
      "Bachelor of Science in Information Technology (BSIT)",
      "Bachelor in Industrial Technology (BIT) majors in:",
      "Drafting Technology",
      "Electronics Technology",
      "Computer Technology",
      "Garments Technology",
      "Automotive Technology",
    ],
    "COLLEGE OF FORESTRY": [
      "Bachelor of Science in Forestry (BSF)",
    ],
    "COLLEGE OF AGRICULTURE": [
      "Bachelor of Science in Agriculture (BSA) majors in:",
      "Animal Science",
      "Horticulture",
      "Agronomy",
      "Crop Protection",
      "Agricultural Economics",
    ],
    "COLLEGE OF HOSPITALITY MANAGEMENT AND TOURISM": [
      "Bachelor of Science in Hospitality Management (BSHM)",
    ],
  };

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

  const validateInput = (inputValue, setValid) => {
    const isValid = /^[A-Za-z\s]*$/.test(inputValue);
    setValid(isValid);
    return isValid;
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    validateInput(value, setValidFirstName);
  };

  const handleMiddleInitialChange = (e) => {
    const value = e.target.value;
    setMiddleInitial(value);
    validateInput(value, setValidMiddleInitial);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    validateInput(value, setValidLastName);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setValidEmail(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)); // Regex for email validation
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
          <div className="w-1/3">
            <label htmlFor="firstName">First Name</label>
            <input
              className={`input-style w-full ${firstName === '' ? '' : validFirstName ? 'border-green-500' : 'border-red-500'}`}
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="w-1/3">
            <label htmlFor="middleInitial">Middle Initial</label>
            <input
              className={`input-style w-full ${middleInitial === '' ? '' : validMiddleInitial ? 'border-green-500' : 'border-red-500'}`}
              type="text"
              value={middleInitial}
              onChange={handleMiddleInitialChange}
            />
          </div>
          <div className="w-1/3">
            <label htmlFor="lastName">Last Name</label>
            <input
              className={`input-style w-full ${lastName === '' ? '' : validLastName ? 'border-green-500' : 'border-red-500'}`}
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        </div>
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
        <input
          className={`input-style ${email === '' ? '' : validEmail ? 'border-green-500' : 'border-red-500'}`}
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
        <label htmlFor="password">Password</label>
        <input
          className={`input-style ${password === '' ? '' : passwordError ? 'border-red-500' : 'border-green-500'}`}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {confirmPasswordError && (
          <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
        )}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className={`input-style ${confirmPassword === '' ? '' : confirmPasswordError ? 'border-red-500' : 'border-green-500'}`}
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        
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
            At least one special character
          </label>
        </div>

        <button className="mt-4 p-2 bg-blue-500 text-white rounded">
          Sign Up
        </button>
      </form>

      {/* Course Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[30rem]">
            <h3 className="font-bold mb-4">Select Your Course</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(courses).map(([college, courseList]) => (
                <div key={college} className="mb-2">
                  <h4 className="font-semibold">{college}</h4>
                  {courseList.map((course, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="course"
                        value={course}
                        onClick={() => handleCourseSelect(course)}
                      />
                      {course}
                    </label>
                  ))}
                </div>
              ))}
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
      <p className="text-[14px]">
        Don't have an account?{" "}
        <Link className="underline" to="/auth/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
