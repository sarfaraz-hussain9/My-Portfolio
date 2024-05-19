import mypic from "../assets/my pic.jpeg";

const Hero = () => {
  return (
    <>
        <div id='hero' className='mt-12 w-full h-full text-white flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:h-[90vh] lg:gap-80'>
            {/* image */}
            <div className='flex items-center lg:w-1/2'>
           <img className=' py-3 rounded-full lg:animate-pulse
            lg:transition-all lg:ease-in-out w-full' src={mypic} alt="" />
            </div>

            {/* name */}
            <div className='flex flex-col pb-14 gap-3 lg:w-1/2 items-center lg:items-start'>
                <h1 className='text-3xl font-bold lg:text-5xl'><span className=''>SARFARAZ HUSSAIN</span></h1>

                <h1 className='bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text  text-2xl lg:text-4xl tracking-tight text-transparent'>Full Stack Developer</h1>
                
                <p className="text-xl font-light text-slate-300">I am a passinate full stack Developer with a knack for crafting robust and scalable web applications. I have honed my skill in front-end technologies like React and tailwind Css, as well as back-end technologies like Node js, mongoDB, express.</p>
               
                <a href="#contact"> <button className='bg-blue-600 px-8 py-2 rounded-md font-bold w-48 lg:hidden'>CONTACT</button></a>
            </div>

        </div>
    </>
  )
}

export default Hero