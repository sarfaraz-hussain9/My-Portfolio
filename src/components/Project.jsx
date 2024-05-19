
import pro1 from "../assets/pro1.jpg"

const Project = () => {
  
  return (
    <>
    <div id="project" className="w-full h-full my-7 text-white">
      <h1 className="text-center text-2xl lg:text-4xl font-bold "> Project </h1>
      <div className="w-full h-full my-4 flex items-center justify-center">

      <div className=" overflow-hidden lg:w-1/2 flex justify-center">
        <a target="_blank" href="https://mern-app-9um5.onrender.com/"><img className="w-[300px] h-[300px] rounded-lg" src={pro1} alt="" /></a>
      </div>

      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:gap-3">
        <div className="text-2xl">Mern Authentication</div>
        <div className="text-slate-300">It is simply a SignIn and SignUp with Authentication functionality Mern project.
        Also have other features like update Profile,delete account. </div>

        <div className="flex flex-wrap gap-2">
        <div className="bg-white bg-opacity-30 w-fit px-2 rounded text-red-400">React</div>
        <div className="bg-white bg-opacity-30 w-fit px-2 rounded text-red-400">Tailwind CSS</div>
        <div className="bg-white bg-opacity-30 w-fit px-2 rounded text-red-400">Node.js</div>
        <div className="bg-white bg-opacity-30 w-fit px-2 rounded text-red-400">Express js</div>
        <div className="bg-white bg-opacity-30 w-fit px-2 rounded text-red-400">MongoDB</div>
        <div className="bg-white bg-opacity-30 w-fit px-2 rounded text-red-400">JavaScript</div>
      </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Project