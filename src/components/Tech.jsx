import mern from "../assets/MERN-logo.png";
import css from "../assets/CSS-Logo.png";
import expr from "../assets/express.png";
import htl from "../assets/html.png";
import js from "../assets/javascript.png";
import mongoDB from "../assets/mongoDB.png";
import node from "../assets/node.png";
import rect from "../assets/reactLogo.png";
import tailwindcss from "../assets/tailwind.png";

const Tech = () => {
  return (
    <section className="bg-gray-900 py-12 px-4 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Technologies
        </h1>
      </div>

      <div className="flex justify-center mb-6">
        <img
          src={mern}
          alt="MERN Stack"
          className="w-32 lg:w-48 filter grayscale hover:grayscale-0 transition duration-300"
        />
      </div>

      <div className="w-full h-px bg-gray-700 mb-8"></div>

      <div className="flex flex-wrap gap-6 justify-center">
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={htl}
          alt="HTML"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={css}
          alt="CSS"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={js}
          alt="JavaScript"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={rect}
          alt="React"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={tailwindcss}
          alt="Tailwind CSS"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={node}
          alt="Node.js"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={expr}
          alt="Express.js"
        />
        <img
          className="w-16 lg:w-24 transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0"
          src={mongoDB}
          alt="MongoDB"
        />
      </div>
    </section>
  );
};

export default Tech;
