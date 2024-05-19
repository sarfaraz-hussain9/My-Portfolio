
const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full h-full bg-white bg-opacity-30 rounded-lg p-4 mb-3">
      <h1 className="text-center text-2xl lg:text-4xl font-bold  text-white"> Contact Me </h1>

      <div className="w-full h-full py-3"> 
      <form className="w-full h-full flex flex-col gap-2 items-center " action="">
      <input className="w-full lg:w-1/2 rounded border-none focus:outline-none px-3 py-1" type="text" placeholder="Name" />
      <input className="w-full lg:w-1/2 rounded border-none focus:outline-none px-3 py-1" type="text" placeholder="Email"/>
      <textarea className="w-full lg:w-1/2 h-60 rounded border-none focus:outline-none px-3 py-1" name="Msg" id="Msg" placeholder="Message"></textarea>
      <button className='bg-blue-600 px-8 py-2 rounded-md w-48 text-white font-semibold'>Send</button>
      </form>
      </div>

      </div>
    </>
  )
}

export default Contact