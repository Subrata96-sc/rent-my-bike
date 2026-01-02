import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import MainLayout from "../layouts/MainLayout";
import SignIn from "../pages/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pages WITH header & footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>

      {/* Pages WITHOUT header & footer */}
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;
