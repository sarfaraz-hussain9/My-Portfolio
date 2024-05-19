import mern from "../assets/MERN-logo.png"
import css from "../assets/CSS-Logo.png"
import expr from "../assets/express.png"
import htl from "../assets/html.png"
import js from "../assets/javascript.png"
import mongoDB from "../assets/mongoDB.png"
import node from "../assets/node.png"
import rect from "../assets/reactLogo.png"
import tailwindcss from "../assets/tailwind.png"

const Tech = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white bg-opacity-30 py-4 rounded-lg mb-4 p-2 gap-4">

        <h1 className="text-center text-2xl lg:text-4xl font-bold  text-white">Technologies</h1>

        <div className="w-60 ">
        <img src={mern} alt="mern" />
        </div>
        <div className="w-full h-[1px] bg-slate-400">

        </div>
        <div className=" flex gap-4  items-center flex-wrap w-full justify-center">
          <img className="lg:w-24 w-14" src={htl} alt="html" />
          <img className="lg:w-24 w-14" src={css} alt="CSS" />
          <img className="lg:w-24 w-14" src={js} alt="javaScript" />
          <img className="lg:w-24 w-14" src={rect} alt="React js" />
          <img className="lg:w-24 w-14" src={tailwindcss} alt="Tailwind css" />
          <img className="lg:w-24 w-14" src={node} alt="Nodejs" />
          <img className="lg:w-24 w-14" src={expr} alt="Express" />
          <img className="lg:w-24 w-14"src={mongoDB} alt="MongoDB" />
        </div>
      </div>
    </>
  )
}

export default Tech