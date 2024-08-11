function Navbar() {
  return (
    <header className="h-fit fixed top-0 left-0 right-0 z-50 shadow-lg inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-80">
      <div className="relative flex max-w-screen-2xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <a
          href="#home"
          className="flex items-center whitespace-nowrap text-6xl font-black"
        >
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-xl h-8 animate-spin-slow"
          />
          <span className="text-2xl font-bold text-green-700 hover:text-teal-200 transition duration-500">
            Abel
          </span>
          {/* </div> */}
        </a>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 text-gray-500">
            <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a href="#home">Home</a>
            </li>
            <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a href="#about">About</a>
            </li>
            <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a href="#projects">Projects</a>
            </li>
            <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a
                href="https://drive.google.com/file/d/1RufGvgHN4N1ZVbrSH9QETcDr2oYLQdKh/view?usp=drive_link"
                target="_blan"
              >My CV/Resume</a>
            </li>
            <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a href="#certificates">Certificates</a>
            </li>
            <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a href="#contact">Contact</a>
            </li>
            {/* <li className=" md:mr-12 hover:text-teal-600 hover:animate-bounce hover:font-semibold transition duration-500">
              <a href="#">Hobbies</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
