import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Dashboard from './pages/Dashboard';
import MyVehicle from './pages/MyVehicle/MyVehicle';
import MyProfile from './pages/MyProfile';
import CreateClaim from './pages/CreateClaim';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import ResetPassword from './pages/Authentication/ResetPassword';
import CreateVehicle from './pages/MyVehicle/CreateVehicle';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/newclaim" element={<CreateClaim />} />
        <Route path="/myvehicle" element={<MyVehicle />} />
        <Route path="/myvehicle/create" element={<CreateVehicle />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
        <Route path="/auth/resetpassword" element={<ResetPassword />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
