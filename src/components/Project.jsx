import pro1 from "../assets/mern.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";

const Project = () => {
  return (
    <section
      id="project"
      className="w-full py-12 bg-gray-800 text-white px-4 flex flex-col gap-12"
    >
      <h1 className="text-center text-3xl lg:text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="flex flex-col gap-12">
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Project Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <a target="_blank" href="https://estore-mern.netlify.app">
              <img
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src={pro3}
                alt="E-store"
              />
            </a>
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">E-Store</h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-6">
              Experience the E-Store, a feature-rich online store built with the
              MERN stack. This project showcases a user-friendly e-commerce
              platform where customers can browse products, manage their cart,
              and proceed to checkout seamlessly. With a focus on performance
              and design, this application integrates React, Tailwind CSS, and a
              robust backend to deliver a smooth shopping experience.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white bg-opacity-20 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Project Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <a>
              <img
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src={pro2}
                alt="Portfolio"
              />
            </a>
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              Portfolio
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-6">
              Explore my Portfolio Showcase—an interactive platform highlighting
              my diverse web development skills. This project brings together a
              variety of technologies and functionalities to create a visually
              appealing and highly functional showcase of my work. From dynamic
              UI components to advanced backend integrations, this portfolio
              demonstrates my ability to build engaging and responsive
              applications tailored to meet different needs.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "JavaScript"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white bg-opacity-20 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Project Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <a target="_blank" href="https://mern-app-9um5.onrender.com">
              <img
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                src={pro1}
                alt="MERN Authentication"
              />
            </a>
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              MERN Authentication
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-6">
              Dive into the MERN Authentication project—a robust solution
              designed for seamless user management. It offers essential
              features like SignIn, SignUp, and account management, ensuring a
              secure and intuitive experience. Leveraging the power of the MERN
              stack, this application not only handles user authentication but
              also provides profile updates, account deletion, and more, all
              while maintaining a sleek and responsive interface.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white bg-opacity-20 text-blue-400 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
