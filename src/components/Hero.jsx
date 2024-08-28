import pf from "../assets/pf.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-full bg-gray-900 text-white flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:h-[90vh] lg:gap-24 px-6 lg:px-16 py-8"
    >
      {/* Image */}
      <div className="flex items-center justify-center lg:w-1/2">
        <img
          className="w-3/4 lg:w-full rounded-full border-4 border-blue-500 shadow-xl transition-transform transform hover:scale-105"
          src={pf}
          alt="Profile"
        />
      </div>

      {/* Name and Description */}
      <div className="flex flex-col gap-6 lg:w-1/2 items-center lg:items-start">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
          SARFARAZ HUSSAIN
        </h1>

        <h2 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500">
          Full Stack Developer
        </h2>

        <p className="text-lg lg:text-xl font-light text-gray-300 text-center lg:text-left max-w-lg">
          Passionate about building robust and scalable web applications with
          expertise in front-end technologies like React and Tailwind CSS, as
          well as back-end technologies like Node.js, MongoDB, and Express.
        </p>

        <a href="#contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 mt-4">
            CONTACT
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
