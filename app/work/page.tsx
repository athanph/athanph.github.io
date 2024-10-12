"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsStarFill } from "react-icons/bs";

import Scope from "@/components/Scope";

const work = {
  title: "Featured Works",
  description: "Some of the projects I have worked on.",
  projects: [
    {
      title: "GEVFinds.com",
      description: "Community Business Directory",
      stack: [
        "React",
        "Remix.run",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Shadcn UI",
        "Zod",
      ],
      url: "gevfinds.com",
      link: "https://gevfinds.com",
      image: "/assets/work/project-gevfinds.jpg",
      role: "Owner / Developer",
      scope: [
        "A web application developed using the full-stack SSR React-framework Remix.run. TypeScript, Tailwind CSS, and Shadcn UI and MongoDB as the database.",
      ],
      showMore: false,
    },
    {
      title: "myosh",
      description: "Environmental, Health and Safety Management (EHS) SaaS",
      stack: [
        "React",
        "TypeScript",
        "Redux",
        "Redux Toolkit",
        "Zustand",
        "SWR",
        "React Hook Form",
        "Recharts",
        "Tailwind CSS",
      ],
      url: "myosh.com",
      link: "https://myosh.com",
      image: "/assets/work/project-myosh.jpg",
      role: "Lead Front-end Developer",
      scope: [
        "Refactored a legacy React-based enterprise module within three months leading to its MVP launch.",
        "Presided over multiple enterprise modules to implement new features, debug, and fix client-reported bugs and issues, helping reduce overall technical debts.",
        "Upgraded application's outdated dependencies to the latest versions, ensuring compatibility.",
        "Offered technical advice, resulting in observable improved loading time and UX performance of legacy codebases.",
        "Performed timely peer code reviews, streamlining the development process.",
        "Handled iterative version releases and deployments into different testing environments up to production via Github and Amazon CodePipeline.",
        "Led online demonstrations of new features for the executive stakeholders.",
        "Participated in weekly task grooming and sprint planning.",
        "Collaborated with a team in Australasia and European time zones, ensuring effective integration of managed modules with other applications within the software ecosystem.",
        "Produced wiki documentation of managed module's FE structure and architecture.",
      ],
    },
    {
      title: "FOX Ad Solution",
      description: "Sales and Marketing Portfolio",
      stack: ["Wordpress", "React", "Zustand", "WCAG Level AA"],
      url: "foxadsolutions.com",
      link: "https://foxadsolutions.com",
      image: "/assets/work/project-foxad.jpg",
      role: "Senior Front-end Developer",
      scope: [
        "Led team in setting up FE architecture approach, resulting in an organized, scalable, and maintainable component-based front-end system within WordPress.",
        "Created an internal React-based plugin package within the WP application.",
        "Coordinated regularly with the technical director in approaching technical UI requirements.",
        "Collaborated with designers and strategists to fully understand expectations and to ensure effective translations of user interface designs into intuitive user experiences.",
        "Developed reusable stylesheets with BEM and Atomic Design CSS methodologies, and used Sass mixins and functions.",
        "Configured Webpack for code linting, splitting, and file minifications.",
        "Implemented lazy-loading of assets (scripts, styles, and image files), prompting fast page response time.",
        "Utilized Lighthouse (Google's Core Web Vitals) to monitor and optimize web performance and user experience.",
        "Ensured design responsiveness on multi-device web and mobile platforms.",
        "Addressed Accessibility (a11y) compliance, ensuring ease of usage among users with disabilities.",
        "Performed code reviews and guided junior FEs within the team to uphold code standards.",
        "Contributed to FE task estimations and distribution, resulting in optimal capacity utilization across the team.",
        "Participated regularly in various Agile ceremonies with US-based counterparts.",
      ],
    },
    {
      title: "Party City",
      description: "Retail Chain Corporation",
      stack: [
        "Salesforce",
        "Demandware",
        "Amplience",
        "Storybook",
        "Handlebars",
        "Web Components",
        "WCAG Level AA",
      ],
      url: "partycity.com",
      link: "https://partycity.com",
      image: "/assets/work/project-partycity.jpg",
      role: "Lead Senior Front-end Developer",
      scope: [
        "Led front-end team in re-platforming of retail e-commerce store running under Salesforce, Demandware, and Amplience.",
        "Used native Web Components to build a reusable, modular, and interactive component system without the use of frameworks.",
        "Applied BEM and Atomic Design CSS methodologies, and used Sass mixins and functions to create clean, reusable stylesheets.",
        "Helped create a Storybook library for UI component development, testing, and documentation.",
        "Worked closely with designers and strategists to fully understand expectations and to ensure effective translations of user interface designs into intuitive e-commerce experiences.",
        "Utilized Lighthouse (Google's Core Web Vitals) to monitor and optimize web performance and user experience.",
        "Ensured design responsiveness on multi-device web and mobile platforms.",
        "Addressed Accessibility (a11y) compliance, ensuring ease of usage among users with disabilities.",
        "Performed code reviews to ensure code consistency.",
        "Contributed to FE task estimations and distribution, resulting in optimal capacity utilization across the team.",
        "Participated regularly in various Agile ceremonies with US-based counterparts.",
      ],
    },
    {
      title: "Griffin Catalyst",
      description: "Philanthropy site",
      stack: ["Wordpress", "Typescript", "WCAG Level AA"],
      url: "griffincatalyst.org",
      link: "https://griffincatalyst.org",
      image: "/assets/work/project-griffin.jpg",
      role: "Lead Senior Front-end Developer",
      scope: [
        "Led team in setting up FE architecture approach, resulting in an organized, scalable, and maintainable component-based front-end system within WordPress.",
        "Developed in Typescript, utilized BEM and Atomic Design CSS methodologies, and used Sass mixins and functions to create reusable front-end scripting and styles.",
        "Implemented lazy-loading of assets (scripts, styles, and image files), prompting fast page response time.",
        "Configured Webpack/Babel for effective code linting, splitting, and file minifications.",
        "Collaborated with designers and strategists to fully understand expectations and to ensure effective translations of user interface designs into intuitive user experiences.",
        "Utilized Lighthouse (Google's Core Web Vitals) to monitor and optimize web performance and user experience.",
        "Ensured design responsiveness on multi-device web and mobile platforms.",
        "Addressed Accessibility (a11y) compliance to ensure ease of usage among users with disabilities. Performed code reviews to ensure code consistency.",
        "Contributed to FE task estimations and distribution, resulting in optimal capacity utilization across the team.",
        "Participated regularly in various Agile ceremonies with US-based counterparts.",
        "Handled creation of FE architecture wiki document.",
      ],
    },
    {
      title: "New York City EDC",
      description: "Non-profit organization",
      stack: ["Drupal", "Twig", "Pattern Lab", "WCAG Level AA"],
      url: "edc.nyc",
      link: "https://edc.nyc",
      image: "/assets/work/project-nycedc.jpg",
      role: "Senior Front-end Developer",
      award:
        "The Webby Awards (2020) - Honoree - Websites and Mobile Sites Government & Civil Innovation",
      award_link:
        "https://winners.webbyawards.com/2020/websites/general-websites/government-civil-innovation/122713/nycedc#:~:text=Code%20and%20Theory-,Jonathan%20Manas,-Code%20and%20Theory",
      scope: [
        "Helped build a frontend system running under Drupal and Twig templating engine.",
        "Utilized BEM CSS methodology and created an atomic-based design system using PatternLab.",
        "Configured Webpack for code linting, splitting, and file minifications.",
        "Worked closely with designers and strategists to fully understand expectations and to ensure effective translations of user interface designs into intuitive user experiences.",
        "Ensured design responsiveness on multi-device web and mobile platforms.",
        "Addressed Accessibility (a11y) compliance, ensuring ease of usage among users with disabilities.",
        "Contributed to FE task estimations and distribution, resulting in optimal capacity utilization across the team.",
        "Participated regularly in various Agile ceremonies with US-based counterparts.",
      ],
    },
    {
      title: "National Council on Aging",
      description: "Charitable organization",
      stack: ["Kentico CMS", "Angular", "WCAG Level AA"],
      url: "ncoa.org",
      link: "https://ncoa.org",
      image: "/assets/work/project-ncoa.jpg",
      role: "Senior Front-end Developer",
      award: "W3 Awards (2021) - Best in Show - General Websites-Associations",
      award_link:
        "https://www.w3award.com/winners/gallery/?ce_b4=bmljb2xlLnNhbnRvc0Bjb2RlYW5kdGhlb3J5LmNvbQ&cas_b4=YnJlbnQuYnVudGluQGNvZGVhbmR0aGVvcnkuY29t&coid=Y29kZS1hbmQtdGhlb3J5fDE2MzM0NDkxNjh8MzE0OTc",
    },
    {
      title: "Giffords",
      description: "Social activism organization",
      stack: ["WordPress", "Gutenberg", "React", "Contentful", "WCAG Level AA"],
      url: "giffords.org",
      link: "https://giffords.org",
      image: "/assets/work/project-giffords.jpg",
      role: "Senior Front-end Developer",
      award:
        "The Webby Awards (2022) - Honoree - Websites and Mobile Sites Activism",
      award_link:
        "https://winners.webbyawards.com/2022/websites-and-mobile-sites/general-websites-and-mobile-sites/activism/222562/giffords--launching-a-powerful-resource-to-spark-action-on-gun-violence#:~:text=Code%20and%20Theory-,Jonathan%20Manas,-Senior%20Developer%2C%20Front",
    },
    {
      title: "Remi by Allspring Global Investments",
      description: "Financial Management Tool for Personalized Portfolios",
      stack: [
        "React",
        "Zustand",
        "React Hook Form",
        "SWR",
        "Storybook",
        "WCAG Level AA",
      ],
      url: "allspringglobal.com",
      link: "https://allspringglobal.com",
      image: "/assets/work/project-remi.jpg",
      role: "Senior Front-end Developer",
    },
  ],
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-14">
      <div className="container">
        <h2 className="text-4xl font-bold">{work.title}</h2>
        <p className="text-white/60">{work.description}</p>

        <div className="flex flex-col gap-6 mt-10">
          {work.projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl p-px bg-gradient-to-b xl:bg-gradient-to-r from-gray-600 via-transparent to-transparent">
              <div className="rounded-3xl bg-primary flex flex-col xl:flex-row gap-[30px] p-6 text-sm">
                <div className="w-full xl:w-[50%] flex flex-col xl-justify-between gap-4 order-2 xl:order-none text-white/60 ">
                  <h3 className="text-2xl text-white group-hover:text-accent transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="leading-snug max-w-[90%]">
                    {project.description}
                  </p>
                  <p>Role: {project.role}</p>
                  <ul className="flex flex-wrap gap-2 text-xs">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="bg-[#2f2f32] px-2 py-1 rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    className="flex max-w-max items-center gap-4 hover:underline"
                    target="_blank">
                    <BsArrowUpRight className="text-[20px]" /> {project.url}
                  </a>
                  {project.award && (
                    <div className="flex items-center gap-4 ">
                      <BsStarFill className="text-[20px] text-yellow-400" />
                      <a
                        href={project.award_link}
                        target="_blank"
                        className="hover:underline text-xs">
                        <span className="max-w-[80%]">{project.award}</span>
                      </a>
                    </div>
                  )}

                  {project.scope && (
                    <Scope
                      scope={project.scope}
                      showMore={project.showMore ?? true}
                    />
                  )}
                </div>
                {project.image && (
                  <div className="w-full xl:w-[50%]">
                    <div className="w-full aspect-video relative rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        fill
                        loading="lazy"
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
