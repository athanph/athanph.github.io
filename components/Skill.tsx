import {
  FaCss3,
  FaDrupal,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiWebpack,
  SiRemix,
  SiTailwindcss,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const skill = {
  title: "Skills",
  description: "Some of the technologies I have worked with.",
  skills: [
    {
      name: "HTML5",
      icon: <FaHtml5 className="inline" title="HTML5" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 className="inline" title="CSS3" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="inline" title="JavaScript" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="inline" title="TypeScript" />,
    },
    {
      name: "React",
      icon: <FaReact className="inline" title="React" />,
    },
    {
      name: "Remix.run",
      icon: <SiRemix className="inline" title="Remix.run" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="inline" title="Next.js" />,
    },
    {
      name: "Sass",
      icon: <FaSass className="inline" title="Sass" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="inline" title="Tailwind CSS" />,
    },
    {
      name: "WordPress",
      icon: <FaWordpress className="inline" title="WordPress" />,
    },
    {
      name: "Drupal",
      icon: <FaDrupal className="inline" title="Drupal" />,
    },
    {
      name: "Git",
      icon: <FaGit className="inline" title="Git" />,
    },
    {
      name: "Webpack",
      icon: <SiWebpack className="inline" title="Webpack" />,
    },
    {
      name: "Node",
      icon: <FaNodeJs className="inline" title="Node" />,
    },
  ],
  others: [
    "Redux / RTK",
    "Zustand",
    "RTK Query",
    "React Query",
    "SWR",
    "React Hook Form",
    "Zod",
    "Storybook",
    "Recharts",
    "ChartJs",
    "Styled Components",
    "Handlebars",
    "Material UI",
    "Shadcn UI",
    "Framer Motion",
    "Salesforce",
    "Amplience",
    "Jest",
    "a11y",
    "Figma",
    "Docker",
    "Web Components",
    "SQL",
    "MongoDB",
    "Mongoose",
  ],
};

const Skill = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-4xl font-bold">{skill.title}</h3>
      <p className="max-w-[600px] text-white/60 text-sm leading-loose">
        {skill.description}
      </p>

      <ul className="flex flex-wrap gap-2 xl:gap-3 mt-6 lg:justify-end">
        {skill.skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 group">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  className="bg-[#2f2f32] rounded-full h-[60px] w-[60px] flex items-center justify-center"
                  title={skill.name}>
                  <div className="text-3xl group-hover:text-accent transition-all duration-500 leading-none">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <p className="lg:hidden text-sm">{skill.name}</p>
          </li>
        ))}
        <li className="basis-full h-0">&nbsp;</li>
        {skill.others.map((skill, index) => (
          <li key={index} className="flex items-center">
            <p className="bg-[#2f2f32] rounded-full text-xs xl:text-sm py-2 px-4">
              {skill}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Skill;
