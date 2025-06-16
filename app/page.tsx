export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <section className="flex justify-center items-center mt-10 p-10">
        <div className="space-y-4">
          <h1 className="text-3xl">
            Hi, I'm <span className="text-blue-500">Subash Chandra Bose R</span>{' '}
            👋
          </h1>
          <h4 className="text-sm text-gray-600">
            Second-Year Cyber Security Engineering Student | Web Developer | Bug
            Bounty Hunter
          </h4>

          <p className="text-xs">
            I'm a passionate Web Developer and Bug Bounty Hunter, currently
            pursuing my studies at St. Joseph's College of Engineering. With a
            strong foundation in web technologies and a keen interest in
            cybersecurity, I specialize in building dynamic, secure, and
            user-friendly web applications.
          </p>
          <button className="text-sm bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">
            View My Projects
          </button>
          <button className="text-sm border border-blue-500 px-4 py-2 text-blue-500 ml-4">
            Download Resume
          </button>
        </div>
        <img
          src="https://github.com/s16e/my-portfolio/blob/main/public/profile_img.jpg?raw=true"
          alt="profile image"
          className="w-64 h-64 rounded-full"
        />
      </section>
    </div>
  );
}
