import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./pages/Authentication/AuthLayout";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Recovery from "./pages/Authentication/Recovery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from root ("/") to "/auth/sign-in" */}
        <Route path="/" element={<Navigate to="/auth/sign-in" />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="account-recovery" element={<Recovery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
