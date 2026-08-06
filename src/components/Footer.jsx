import { TelegramIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from "./icons";

const socialLinks = [
  { name: "Telegram", icon: TelegramIcon, href: "https://t.me/dividedmeepo" },
  { name: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/in/ellworts/" },
  { name: "GitHub", icon: GitHubIcon, href: "https://github.com/Ellworts" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/dividedmeepo/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2a30] text-white py-12 mt-14">
      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Mykhailo Kuptsov</h3>
            <p className="text-gray-400">Fullstack Web Developer</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="flex flex-col gap-2">
              <a
                href="mailto:kuptsov5162@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                kuptsov5162@gmail.com
              </a>
              <a
                href="tel:+447767853122"
                className="text-gray-400 hover:text-white transition-colors"
              >
                +44 7767 853122
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Mykhailo Kuptsov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
