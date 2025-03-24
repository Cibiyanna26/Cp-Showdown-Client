import background_image from "../assets/landing-background-cross.png";
import Logo from "../assets/Devoice-White-Logo.png";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import useUserDetails from "../hooks/useUserDetails"; 
import drop_down from "../assets/icon _chevron bottom_.svg";
import leetcode_icon from "../assets/leetcode.svg";

const Landing = () => {
  const { userDetails, isVerified } = useUserDetails();
  return (
    <>
      <section className="landing page text-white">
        <nav id="navbar" className="bg-transparent fixed top-0 w-full">
          <div className="flex items-center justify-between py-[8px] px-[20px]">
            <div id="left-logo " className="flex flex-row items-center">
              <img className="w-[60px] h-[60px]" src={Logo}></img>
              <Link to={"/"} className="text-xl font-bold">
                CP SHOWDOWN
              </Link>
            </div>
            <div className="flex flex-row items-center space-x-4 p-[8px] rounded-xl text-white opacity-70 border-2">
              {userDetails ? (
                <>
                  <p>{userDetails.name}</p>
                  <img
                    className="w-[30px] h-[30px] rounded-full"
                    src={leetcode_icon}
                  ></img>
        
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-blue-500 rounded-md text-white"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </nav>
        <Hero />
        <About />
        <Footer />
      </section>
    </>
  );
};

export default Landing;
