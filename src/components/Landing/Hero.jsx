import background_image from '../../assets/landing-background-cross.png'
import { useNavigate } from 'react-router-dom';
import useUserDetails from '../../hooks/useUserDetails';
import { useEffect, useState } from 'react';
const  Hero = () =>{
  const navigate = useNavigate();
  const {isVerified} = useUserDetails();
  const [count, setCount] = useState(0);
  const handleClick = async() => {
    if (!isVerified) {
      navigate('/login')
    }
    else{
      navigate("/dashboard")
    }
  }

  useEffect(() => {
    setCount(0);
    let current = 0;
    const interval = setInterval(() => {
      if (current <= 1000) {
        setCount(current);
        current++;
      }
    }, 5);
    return () => clearInterval(interval);
  }, []);
  const formattedCount = count.toString().padStart(4, '0');
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
        
        <div className="flex flex-col items-center max-w-4xl text-center p-4 space-y-6">
          <div className='hover:cursor-default text-[12px] sm:text-[32px] md:text-[48px] hover:text-[#E2C8EB]'>NUMBER OF COMPARISONS</div>
          <div className='flex items-center justify-center space-x-4 font-extrabold sm:font-normal'>
            {formattedCount.split('').map((digit, index) => (
              <div
                key={index}
                className='transition hover:cursor-default transform hover:-translate-y-1 hover:shadow-md w-20 h-20 flex items-center justify-center text-3xl font-extrabold rounded-lg text-white bg-black bg-opacity-20 font-mono'
              >
                {digit}
              </div>
            ))}
          </div>
        <h1 className="hover:cursor-default text-xl font-extrabold sm:font-normal">
        Skill Match :
        </h1>
        <button
        onClick={handleClick}
        className="bg-[#4D065B] transition hover:text-[#E2C8EB] hover:scale-105 active:scale-95 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg shadow-lg text-[20px] sm:text-[24px] md:text-[32px] w-64"
        >
       COMPARE ⚔️
        </button>

        </div>
      </div>
      </>
    );
}

export default  Hero;