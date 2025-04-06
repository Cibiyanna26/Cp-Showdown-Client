import background_image from '../../assets/landing-background-cross.png'
import { useNavigate } from 'react-router-dom';
import useUserDetails from '../../hooks/useUserDetails';

const  Hero = () =>{
  const navigate = useNavigate();
  const {isVerified} = useUserDetails();
  const handleClick = async() => {
    if (!isVerified) {
      navigate('/login')
    }
    else{
      navigate("/dashboard")
    }
  }
    return (
      <>
      
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
      >
        
        <div className="flex flex-col max-w-4xl text-center p-4 space-y-6">
          <div>NUMBER OF COMPARISONS</div>
        <div className='flex items-center justify-center space-x-4'>
          <div className='w-20 h-20 flex items-center justify-center text-3xl font-extrabold  rounded-lg text-white bg-black bg-opacity-20 font-mono'>
            0
          </div>
          <div className='w-20 h-20 flex items-center justify-center text-3xl font-extrabold  rounded-lg text-white bg-black bg-opacity-20 font-mono'>
            0
          </div>
          <div className='w-20 h-20 flex items-center justify-center text-3xl font-extrabold  rounded-lg text-white bg-black bg-opacity-20 font-mono'>
            0
          </div>
          <div className='w-20 h-20 flex items-center justify-center text-3xl font-extrabold  rounded-lg text-white bg-black bg-opacity-20 font-mono'>
            10
          </div>
        </div>
        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] font-extrabold sm:font-normal">
          COMPARE YOUR COMPETITIVE PROGRAMMING SKILLS
        </h1>
        <button
          onClick={() => handleClick()}
          className="primary-button"
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