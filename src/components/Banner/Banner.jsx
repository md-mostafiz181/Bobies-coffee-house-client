// import bannerImg from "../../assets/banner.png"
import "../Banner/Banner.css";

const Banner = () => {
  return (
    <div id="banner-container">
      <div className="banner-img">
        <div className="banner-text mt-4">
          <h1 className="font-bold text-2xl text-white text-center">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className=" font-serif text-white text-center mt-4">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion <br /> of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <div className="flex items-center justify-center mt-3">
            <button className="px-4 py-2 bg-orange-300  text-white rounded hover:bg-orange-600">
             Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
