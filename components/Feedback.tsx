const feedback = [
  {
    role: "Developer",
    message:
      "Jonathan has shown the leadership we expect him to be. He took on the most complicated tasks and turned them into exceptional features of the project. His meticulousness was vital in developing with little to no UI issues. He was vocal on bringing up issues, and expressing possible solutions to the team's problems.",
    from: "Sr. Director of Engineering",
  },
  {
    role: "Team Player",
    message:
      "Jonathan takes the time to really understand what's being asked. Whether working with designers, UX, client, or backend teams, he doesn't just take the easy road out of a discussion.",
    from: "Sr. Technical Director",
  },
  {
    role: "Leader",
    message:
      "Having worked with Athan on two projects, I could say, in my opinion, that he is one of the top developers in the company. He was highlighted as an effective team leader, supportive of everyone, and always offering advice that he believes will improve the team's efficiency - all while continuing to demonstrate competence in completing tasks as accurately and promptly as he can.",
    from: "Project Manager",
  },
];

const Feedback = () => {
  return (
    <>
      <h2 className="text-4xl font-bold">Feedback</h2>
      <div className="flex flex-col xl:flex-row gap-10">
        {feedback.map((item) => (
          <div
            key={item.role}
            className="flex-1 rounded-3xl p-px bg-gradient-to-b from-gray-600 via-transparent to-transparent">
            <div
              key={item.role}
              className="rounded-3xl flex flex-col gap-2 p-4 bg-primary group">
              <h3 className="text-l">As a {item.role}</h3>
              <p className="text-white/60 leading-snug text-sm group-hover:text-white transition-colors duration-300">
                {item.message}
              </p>
              <span className="text-xs text-white/60 ">- {item.from}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feedback;
