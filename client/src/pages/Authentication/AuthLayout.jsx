import { Outlet } from "react-router-dom";
import authImage from "../../assets/auth-image.webp";

const AuthLayout = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 h-full flex">
        <img src={authImage} alt="Consultation image" />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
