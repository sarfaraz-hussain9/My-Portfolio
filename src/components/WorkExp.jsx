const WorkExp = () => {
  return (
    <section className="bg-gray-900 py-12 px-6 lg:px-12 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Work Experience
        </h1>
      </div>

      <div className="text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full lg:w-3/4 bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-white mb-2">
              Previous Role
            </h4>
            <p className="text-slate-400">
              While I am focusing on my studies, I am actively learning and
              working on personal projects to gain practical experience.
            </p>
          </div>

          <div className="w-full lg:w-3/4 bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-white mb-2">
              Future Goals
            </h4>
            <p className="text-slate-400">
              I am eager to apply my skills in real-world scenarios and
              contribute to innovative projects in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
