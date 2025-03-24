import background_image from '../../assets/landing-background-cross.png'
import { useNavigate } from 'react-router-dom';

const Hero = () =>{
  const navigate = useNavigate();
    return (
      <>
        <div
          className="flex items-center justify-center min-h-screen "
          style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col max-w-4xl text-center p-[16px] space-y-6">
            <h1 className=" md:text-[48px] sm:text-[32px] text-[24px] font-extrabold sm:font-normal">
              COMPARE YOUR COMPETITIVE PROGRAMMING SKILLS
            </h1>
            <button
              onClick={() => navigate("/dashboard")}
              className="p-[16px] rounded-xl bg-primary"
              data-cursor="pointer"
            >
              COMPARE
            </button>
          </div>
        </div>
      </>
    );
}

export default  Hero;