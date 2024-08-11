import BackgroundImage from "../assets/images/BackgroundImage.jpg";
import Photo from "../assets/images/my_image.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div
      id="home"
      className="bg-cover h-screen flex items-center justify-center text-4xl font-bold"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="absolute inset-0 z-5 shadow-lg bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>

      <div className=" mt-15 h-15 ml-15 flex justify-between">
        <section className="flex flex-col items-start justify-center text-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-6xl font-bold uppercase animate-pulse text-slate-300">
              <span className="text-green-500">Wel</span>
              <span className="text-green-200">come...</span>
            </h1>
            <p className="mt-4 text-xl text-slate-200 max-w-xl">
              I’m Abel, a Software Engineer dedicated to
            </p>
            <span>
              <TypeAnimation
                className="text-green-500 text-xl capitalize drop-shadow-xl"
                sequence={[
                  "bulding websites!",
                  1000,
                  "designing web pages!",
                  2000,
                  "managing projects!",
                  2000,
                  "problem solving!",
                  2000,
                  "building mobile application development!",
                  2000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </div>
        </section>
        <img
          className="object-cover object-center"
          src={Photo}
          alt="My Picture"
        />
      </div>
    </div>
  );
}

export default Home;
