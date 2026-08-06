"use client";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-2">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#hero"
                className="text-gray-300 hover:text-white transition"
              >
                {"// home"}
              </a>
            </li>
            <li>
              <a
                href="#expertise"
                className="text-gray-300 hover:text-white transition"
              >
                {"// expertise"}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition"
              >
                {"// work"}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-gray-300 hover:text-white transition"
              >
                {"// experience"}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition"
              >
                {"// contact"}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
