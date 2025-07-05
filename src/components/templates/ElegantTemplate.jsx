import { useTemplate } from '../../context/TemplateContext';

const ElegantTemplate = () => {
  const { userData } = useTemplate();
  const {
    name = "Your Name",
    title = "Professional Title",
    email = "email@example.com",
    phone = "+91-0000000000",
    summary = "A short professional summary goes here...",
    skills = [],
    experience = [],
  } = userData || {};

  return (
    <div className="w-[595px] h-[842px] bg-white text-[#222] p-10 font-serif border-[6px] border-[#111] rounded-xl shadow-[0_0_0_2px_#000] overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-widest uppercase">{name}</h1>
        <p className="text-md font-medium text-gray-800 mt-1">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{email} | {phone}</p>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-black inline-block pb-1 mb-2">Profile</h2>
        <p className="text-sm leading-relaxed">{summary}</p>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b border-black inline-block pb-1 mb-2">Skills</h2>
          <ul className="list-disc list-inside text-sm text-gray-900">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold border-b border-black inline-block pb-1 mb-2">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4 text-sm">
              <p className="font-bold">{exp.title || "Job Title"}</p>
              <p className="italic text-gray-600">
                {exp.company || "Company"} | {exp.duration || "Duration"}
              </p>
              <p className="mt-1">{exp.description || "Description of responsibilities and achievements."}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ElegantTemplate;
