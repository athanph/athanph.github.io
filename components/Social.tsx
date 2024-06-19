import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/athanph" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/athanph" },
];

const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map((social, index) => (
        <a
          href={social.href}
          key={index}
          className="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          target="_blank">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
