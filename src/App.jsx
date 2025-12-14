
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './containers/Books/Books';
import NotFound from './containers/NotFound/NotFound';
import Login from './containers/Login/Login';
import ContactUs from './containers/ContactUs/ContactUs';
// import Testimonials from './containers/Testimonials/Testimonials';
import SignUp from './containers/SignUp/SignUp';
import ForgetPassword from './containers/ForgetPassword/ForgetPassword';
import ViewDetail from './containers/ViewDetail/ViewDetail';
// import Aos from 'aos';
import { Toaster } from 'react-hot-toast';
import BookSummery from './containers/BookSummery/BookSummery';
import AllCourses from './containers/AllCourses/AllCourses';
import CoursesOrder from './containers/CoursesOrder/CoursesOrder';
import ScrollToTop from 'react-scroll-to-top';
import BookDetails from './containers/BookDetails/BookDetails';
import Profile from './containers/Profile/Profile';
import Library from './containers/Library/Library';
import PurchaseHistory from './containers/PurchaseHistory/PurchaseHistory';
import { useEffect } from 'react';
import SideModal from './components/SideModal/SideModal';
import AddressModal from './containers/AddressModal/AddressModal';
import TestSection from './containers/TestSection/TestSection';
import About_iits from './containers/IitPage/about/About_iits';

import TestTable from './containers/TestTable/TestTable';
import TestLoading from './containers/TestLoading/TestLoading';
import TestStart from './containers/TestStart/TestStart';
import TestSubmit from './containers/TestSubmit/TestSubmit';
import TestWantSubmit from './containers/TestWantSubmit/TestWantSubmit';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';
import TermCondition from './containers/TermCondition/TermCondition';
import TestPerformance from './containers/TestPerformance/TestPerformance';
import IitSideBar from './containers/IitPage/IitSideBar/IitSideBar';
import CartDetails from './containers/CartDetail/CartDetails';
import EventCarousel from './containers/EventCarousel/EventCarousel';
import AboutUs from './containers/AboutUs/AboutUs';
import RefundPolicy from './containers/RefundPolicy/RefundPolicy';
import EventDetails from './containers/EventDetails/EventDetails';
import EventList from './containers/EventList/EventList';
import EventManagment from './containers/EventManagment/EventManagment';
import PurchasedEvents from './containers/PurchasedEvents/PurchasedEvents';
import OurCourses from './containers/OurCourses/OurCourses';
import AdverdDetails from './containers/AdverdDetails/AdverdDetails';
import ChangePassword from './containers/ChangePassword/ChangePassword';
import Form from './containers/Form/Form';
import LandingPage from './containers/LandingPage/LandingPage';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import NotificationTab from './containers/NotificationTab/NotificationTab';
import LiveTest from './containers/LiveTest/LiveTest';
import LiveClasses from './containers/LiveClasses/LiveClasses';
import CCDetails from './containers/ViewDetail/CCDetails';
import ThankYou from './containers/ThanksPage/Thankyou';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY > 0) {
        // window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
  }, [pathname])

  function PrivateRoute({ children, redirectTo }) {
    let isLogin = localStorage?.getItem("jwt");
    if (isLogin) {
      return children
    }
    else {
      const fullUrl = window.location.href;
      localStorage.setItem('redirect', fullUrl);
      return <Navigate to={redirectTo} />
    }

  }

  function PublicRoute({ children, redirectTo }) {
    let isLogin = localStorage?.getItem("jwt");
    return !isLogin ? children : <Navigate to={redirectTo} />;
  }


  return (
    <>
      <ScrollToTop />
      <Toaster containerStyle={{
        top: 90,
        left: 10,
        bottom: 20,
        right: 20,
      }} position="top-right" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mentorship-for-jee-neet-2025' element={<LandingPage />} />
        {/* <Route path='/books' element={<Books/>} /> */}
        <Route path='/login' element={<PublicRoute redirectTo={'/'} ><Login /></PublicRoute>} />
        <Route path='/forget_password' element={<PublicRoute redirectTo={'/'} ><ForgetPassword /></PublicRoute>} />
        <Route path='/change_password' element={<PrivateRoute redirectTo={'/login'} ><ChangePassword /></PrivateRoute>} />
        <Route path='/signup' element={<PublicRoute redirectTo={'/'} ><SignUp /></PublicRoute>} />
        {/* <Route path='/contact' element={<ContactUs/>} />
      <Route path='/testimonials' element={<Testimonials/>} /> */}
        <Route path='/view_details' element={<ViewDetail />} />
        <Route path='/cc_details' element={<CCDetails />} />
        {/* <PrivateRoute path='//coursesorder/:id' element={<CoursesOrder/>} /> */}
        <Route path='/coursesorder' element={<PrivateRoute redirectTo={"/login"}><CoursesOrder /></PrivateRoute>} />
        <Route path='/allcourses' element={<AllCourses />} />
        <Route path='/ourcourses' element={<OurCourses />} />
        <Route path='/bookdetails/:id' element={<BookDetails />} />
        <Route path='/booksummery' element={<BookSummery />} />
        {/* <Route path='//success_message' element={<PrivateRoute redirectTo={"/login"}><SuccessMessage/></PrivateRoute>} /> */}
        <Route path='/user-profile' element={<PrivateRoute redirectTo={"/login"}><Profile /></PrivateRoute>} />
        <Route path='/library' element={<PrivateRoute redirectTo={"/login"}><Library /></PrivateRoute>} />
        <Route path='/purchasehistory' element={<PrivateRoute redirectTo={"/login"}><PurchaseHistory /></PrivateRoute>} />
        {/* <Route path='/purchased-events' element={<PrivateRoute redirectTo={"/login"}><PurchasedEvents/></PrivateRoute>} /> */}
        <Route path='*' element={<NotFound />} />
        <Route path='/about-iits' element={<About_iits />} />


        {/* IITs Routes */}
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/iits' element={<IitSideBar />} />
        {/* <Route path='//iit-kharagpur' element={<IIT_kharagpur/>}/> */}

        {/* IITs Routes */}
        <Route path='/about-iits' element={<About_iits />} />
        {/* <Route path='/iits' element={<IitSideBar />} /> */}
        {/* <Route path='//iit-kharagpur' element={<IIT_kharagpur/>}/> */}

        {/* <Route path='/addressmodal' element={<AddressModal/>} /> */}
        <Route path='/form' element={<Form />} />


        <Route path='/my-cart' element={<PrivateRoute redirectTo={"/login"}><CartDetails /></PrivateRoute>} />
        {/* // <Route path='/testsection' element={<TestSection/>} />
      // <Route path='/testtable' element={<TestTable/>} />
      // <Route path='/testloading' element={<TestLoading/>} />
      // <Route path='/teststart' element={<TestStart/>} />
      // <Route path='/testsubmit' element={<TestSubmit/>} />
      // <Route path='/testwantsubmit' element={<TestWantSubmit/>} />
      // <Route path='/testperformance' element={<TestPerformance/>} />  */}


        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/termcondition' element={<TermCondition />} />
        <Route path='/refund-policies' element={<RefundPolicy />} />
        <Route path='/notifications' element={<PrivateRoute redirectTo={"/login"}><NotificationTab /></PrivateRoute>} />
        <Route path='/livetest' element={<PrivateRoute redirectTo={"/login"}><LiveTest /></PrivateRoute>} />
        <Route path='/liveclasses' element={<PrivateRoute redirectTo={"/login"}><LiveClasses /></PrivateRoute>} />

        <Route path='/events' element={<EventList />} />
        {/*<Route path='/eventcarousel' element={<EventCarousel/>} />
      <Route path='/eventdetails' element={<EventDetails/>} />
      <Route path='/advard' element={<AdverdDetails/>}/>
      <Route path='/physicsgalaxy/eventmanagment' element={<EventManagment/>} />
      <Route path='/physicsgalaxy/nodatafound' element={<NoDataFound/>} /> */}





      </Routes>
    </>
  )
}

export default App
