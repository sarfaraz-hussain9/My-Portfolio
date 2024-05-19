import about from "../assets/about.png";
const About = () => {
  return (
    <>
      <div id="about" className="py-8">
      <h1 className="text-center text-2xl lg:text-4xl font-bold  text-white"> About Me </h1>

      <div className="text-white w-full h-full flex flex-col lg:flex-row items-center py-12">
     
        <div className=" lg:w-1/2 lg:animate-pulse">
            <img src={about} alt="about png" />
        </div>


        <div className="lg:w-1/2 py-8 lg:py-0 text-slate-300">
              <p>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including  React, Tailwind Css, Express Js, MongoDB, Node.js. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default About