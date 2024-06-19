const education = {
  title: "Education",
  degree: "Bachelor of Science in Psychology",
  school: "Far Eastern University",
  location: "Manila, Philippines",
};

const Education = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <div className="mt-6">{education.degree}</div>
      <div className="text-white/60">{education.school}</div>
      <div className="text-white/60">{education.location}</div>
    </div>
  );
};
export default Education;
