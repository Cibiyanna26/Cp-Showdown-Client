import mid_background from '../assets/mid-page-bg.png'

const Footer = () => {
  return (
    <>
    <div
      className="flex items-center justify-center min-h-[30rem] sm:min-h-[20rem] xs:min-h-[15rem]"
      style={{
      backgroundImage: `url(${mid_background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col space-y-4 sm:space-y-6 text-center px-4">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Made By</p>
      <p className="text-[50px] sm:text-[75px] md:text-[100px] lg:text-[150px] font-extrabold">Devoice</p>
      </div>
    </div>
    </>
  );
}

export default Footer;