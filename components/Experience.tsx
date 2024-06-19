import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const experience = {
  title: "Experiences",
  description: "Some of the experiences I have had.",
  experiences: [
    {
      title: "Front-end Developer",
      company: "Outsourcing and Offshoring",
      duration: "2023 - 2024",
      bullets: [
        "Worked with an Australian global cloud-based HSEQ Management SaaS vendor to elevate functionalities while overseeing maintenance tasks across multiple enterprise modules.",
        "Refactored a legacy React-based module within three months leading to its MVP launch.",
        "Offered technical advice as a lead developer to enhance old applications, ensuring optimal performance, reducing technical debts, and meeting client needs.",
      ],
    },
    {
      title: "Front-end Developer / Unit Team Lead",
      company: "Digital Design Agency",
      duration: "2018 - 2023",
      bullets: [
        "Worked on multiple US-based projects such as a retail e-commerce store, financial web app, non-profit sites, and marketing portfolios, among others under various technology stacks such as WordPress, Drupal, Salesforce, Contentful, React.",
        "Sustained code standards and ensured the maintainability of projects through code reviews and knowledge sharing within the front-end team.",
        "Provided technical and practical career support to junior developers while taking a leadership role in overseeing their work.",
      ],
    },
    {
      title: "Front-end Developer",
      company: "IT Consulting",
      duration: "2016 - 2018",
      bullets: [
        "Worked on web and desktop applications with Angular, React, and Electron.",
        "Managed the front-end specifications to ensure accessibility across various browsers and functionality of applications while integrating Java and PHP backends.",
      ],
    },
    {
      title: "Front-end Developer / Team Lead",
      company: "Digital Advertising Agency",
      duration: "2011 - 2015",
      bullets: [
        "Worked on multiple Danish projects such as a retail e-commerce store, an educational institution, a non-profit organization, and various HTML Emailers and Facebook campaigns.",
        "Handled front-end using proficient tools and standards with integrations to PHP and .Net.",
        "Established development guidelines to improve production workflow.",
        "Participated in the technical planning, task scheduling, and recruitment process",
        "Ensured compatibility across various browsers, addressing the diverse user base and enhancing the UX on multiple platforms.",
      ],
    },
    {
      title: "Web Master / Graphic Artist / Marketing Head",
      company: "Security Systems Provider",
      duration: "2007 - 2010",
      bullets: [
        "Oversaw the upkeep of the company website, and its content creation.",
        "Led the Marketing Department in the development and execution of the company’s marketing and advertising campaigns and strategies. ",
        "Managed trade exhibitions and events, ensuring successful execution.",
        "Generated emailers, online newsletters, and print collaterals to support the company's promotional efforts.",
      ],
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold">{experience.title}</h2>
      <p className="text-white/60">{experience.description}</p>
      <ul className="grid grid-cols-1 gap-2 pr-1 mt-6 border-l-4 border-white/10">
        {experience.experiences.map((experience) => {
          return (
            <li
              key={experience.company}
              className="relative flex flex-col p-6 before:w-4 before:h-4 before:bg-white/60 before:absolute before:top-7 before:left-[-10px] before:z-10 before:rounded-full before:transition-all before:duration-500 hover:before:bg-accent">
              <h4 className="text-xl text-accent font-bold">
                {experience.title}
              </h4>
              <p>
                {experience.company}, {experience.duration}
              </p>
              <Collapsible>
                <CollapsibleTrigger>See details</CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="list-disc list-inside text-white/60">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="mt-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Experience;
