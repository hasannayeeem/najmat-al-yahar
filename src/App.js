import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import { createContext, useEffect, useState } from "react";
import AddReview from "./Pages/Homepage/AddReview/AddReview";
import NotFound from "./components/NotFound/NotFound";
import UserData from "./Pages/UserData/UserData";
import BookReview from "./Pages/Homepage/BookReview/BookReview";
import Dashboard from "./Pages/Dashboardpage/Dashboard/Dashboard";
import Users from "./Pages/Dashboardpage/Users/Users";
import Constructors from "./Pages/Dashboardpage/Constructors/Constructors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ManageBooks from "./Pages/Dashboardpage/ManageBooks/ManageBooks";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import ManageEngineers from "./Pages/Dashboardpage/ManageEngineers/ManageEngineers";
import { Toaster } from "react-hot-toast";
import UserDetails from "./Pages/UserDetails/UserDetails";
import EngineersTable from "./Pages/ServiceDetails/EngineersTable";
import { BarLoader } from "react-spinners";
import Dashboard1 from "./Pages/Dashboardpage/Dashboard1/Dashboard1";
import Profile from "./Pages/Profile/Profile";
import MyProfile from "./Pages/Profile/MyProfile/CompanyProfile";
import Address from "./Pages/Profile/Address/Address";
import Education from "./Pages/Profile/Education/Education";
import logov1 from './Assest/images/sahedaFooter.png'
import RequireAuth from './Auth/RequireAuth'
import RequireAdmin from './Auth/RequireAdmin';
import Blog from "./Pages/Blog/Blog";
import Header from "./components/Navbar/Header";
import CompanyDetails from "./Pages/Homepage/Companies/CompanyDetails";
import Contact from "./Pages/Homepage/Contact/Contact";
import AboutUs from "./Pages/Homepage/AboutUs/AboutUs";
import Projects from "./Pages/Homepage/projects/Projects";
import Cards from "./Pages/Homepage/Cards/Cards";
import Companies from "./Pages/Homepage/Companies/Companies";
import CompanyProfile from "./Pages/Profile/MyProfile/CompanyProfile";

export const DarkModeContext = createContext("");
const queryClient = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [2000]);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[100vh] bg-black flex-col mb-4">
          <p>
            <img className="mb-2" src={logov1} alt="" /></p>
          <BarLoader
            color={"yellow"}
            loading={loading}
            size={450}
            width={160}
            speedMultiplier={0.6}
            height={4}
          />
        </div>
      ) : (
        <QueryClientProvider client={queryClient}>
          <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            <section className={`${darkMode && "dark-theme"} duration-300`}>
              <Header></Header>
              {/* <Navbar /> */}
              <Toaster></Toaster>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                {/* <Route path="/companies" element={<CompanyDetails />} /> */}
                {/* <Route path="/companies/:id" element={<CompanyDetails />} /> */}
                <Route path="/blogs" element={<Blog />} />
                <Route path="/services" element={<Cards />} />
                <Route path="/media" element={<Projects />} />
                <Route path="/contact-us" element={<Contact/>} />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<Dashboard1 />}></Route>
                  <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
                  <Route path="addReview" element={<RequireAuth><AddReview /></RequireAuth>}></Route>
                  <Route
                    path="manageEngineers"
                    element={<ManageEngineers />}
                  ></Route>
                  <Route path="constructors" element={<Constructors />}></Route>
                  <Route path="manageBooks" element={<RequireAdmin><ManageBooks /></RequireAdmin>}></Route>
                  {/* <Route path="orders" element={<RequireAdmin><Orders /></RequireAdmin>}></Route> */}
                  <Route
                    path="manageEngineers"
                    element={<RequireAdmin><ManageEngineers /></RequireAdmin>}
                  ></Route>
                </Route>
                <Route path="/user/:id" element={<RequireAdmin><UserDetails /></RequireAdmin>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/company/:id" element={<CompanyDetails />} />
                <Route
                  path="/details/:category"
                  element={<ServiceDetails />}
                />
                <Route
                  path="/engineers"
                  element={<EngineersTable></EngineersTable>}
                ></Route>
                <Route path="/user_data" element={<UserData />} />
                <Route path="/addReview" element={<AddReview />} />
                <Route path="/bookDetail/:_id" element={<BookReview />} />
                {/* Profile Routes */}
                <Route path="/companies" element={<Profile />}>
                  <Route index element={<CompanyProfile />}></Route>
                  <Route path="najmat" element={<Address />}></Route>
                  <Route path="sadikur" element={<Address />}></Route>
                  <Route path="hasaim" element={<Address />}></Route>
                  <Route path="parvez" element={<Address />}></Route>
                  <Route path="upcoming..." element={<Address />}></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </section>
          </DarkModeContext.Provider>
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
