import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import Navbar1 from './component/Navbar1';
import Footer1 from './component/Footer1';
import Home1 from "./pages/Home1";
import Flowers from "./pages/Flowers";
import Home2 from "./pages/Home2";
import Ourstory from "./pages/Ourstory";
import Blog from "./pages/Blog";
import Myaccount from "./pages/Myaccount";
import Faq from "./pages/Faq";
import Cheackorder from "./pages/Cheackorder";
import Storlocator from "./pages/Storlocator";
import Contactus from "./pages/Contactus";
import Lastpassword from "./component/Lastpassword";
import Privcay from "./component/Privcay";
import { CartProvider } from './stores/Cart';
import { useState, useEffect } from 'react';
import BarLoader from './component/BarLoader';
import Regestration from './component/Regestration';

const Layout = () => {
  return (
    <>
      <Navbar1 />
      <Outlet />
      <Footer1 />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const registrationTimer = setTimeout(() => {
        setShowRegistration(true);
      }, 2000);
      return () => clearTimeout(registrationTimer);
    }
  }, [loading]);

  const handleRegistrationClose = (event) => {
    event?.preventDefault && event.preventDefault();
    setShowRegistration(false);
  };

  if (loading) {
    return <BarLoader />;
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home1 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cheackorder" element={<Cheackorder />} />
        <Route path="/storlocator" element={<Storlocator />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/lastpassword" element={<Lastpassword />} />
        <Route path="/privcay" element={<Privcay />} />
      </Route>
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/ourstory" element={<Ourstory />} />
      <Route path="/home2" element={<Home2 />} />
    </Route>
  ));

  return (
    <div>
      <CartProvider>
        <RouterProvider router={router} />
        {showRegistration && <Regestration onClose={handleRegistrationClose} />}
      </CartProvider>
    </div>
  );
};

export default App;