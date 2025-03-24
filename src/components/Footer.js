import mid_background from '../assets/mid-page-bg.png'

const Footer = () =>{
    return (
      <>
        <div
          className="flex items-center justify-center min-h-[30rem]"
          style={{
            backgroundImage: `url(${mid_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col space-y-8 text-center">
            <p className="text-3xl font-bold text-secondary">Made By</p>
            <p className="text-[150px] font-extrabold">Devoice</p>
          </div>
        </div>
      </>
    );
}

export default Footer;