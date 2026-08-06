const navLinks = [
  { href: "#hero", label: "// home" },
  { href: "#expertise", label: "// expertise" },
  { href: "#projects", label: "// work" },
  { href: "#experience", label: "// experience" },
  { href: "#contact", label: "// contact" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent py-2">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
