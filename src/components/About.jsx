import about from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl lg:text-5xl font-extrabold mb-10">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={about}
              alt="About Me"
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <p className="text-lg lg:text-xl leading-relaxed">
              I am a dedicated and versatile full-stack developer with a passion
              for creating efficient and user-friendly web applications. I have
              worked with a variety of technologies, including React, Tailwind
              CSS, Express.js, MongoDB, and Node.js. I thrive in collaborative
              environments and enjoy solving complex problems to deliver
              high-quality solutions. Outside of coding, I enjoy staying active
              and exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
