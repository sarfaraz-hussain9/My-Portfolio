const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 flex justify-center items-center bg-gray-900"
    >
      <div className="max-w-lg w-full bg-gray-800 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h1 className="text-center text-3xl lg:text-4xl font-bold text-gray-100 mb-8">
          Get in Touch
        </h1>

        <form className="flex flex-col gap-6">
          <input
            className="w-full p-4 border border-gray-700 bg-gray-900 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full p-4 border border-gray-700 bg-gray-900 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-full h-40 p-4 border border-gray-700 bg-gray-900 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            name="Msg"
            id="Msg"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
