import { useTemplate } from '../../context/TemplateContext';

const ClassicTemplate = () => {
  const { userData } = useTemplate();
  const {
    name = "Your Name",
    title = "Professional Title",  // ✅ New
    email = "email@example.com",
    phone = "+91-0000000000",
    summary = "A short professional summary goes here...",
    skills = [],
    experience = [],
  } = userData || {};

  return (
    <div className="bg-white text-black p-6 w-[595px] h-[842px] mx-auto shadow-lg rounded-md font-sans overflow-y-auto">
      {/* Name & Title */}
      <h1 className="text-3xl font-bold border-b pb-1">{name}</h1>
      <p className="text-md text-gray-800 font-medium">{title}</p> {/* ✅ Title Display */}
      <p className="text-sm mt-1 text-gray-700">{email} | {phone}</p>

      {/* Summary */}
      <section className="mt-4">
        <h2 className="text-xl font-semibold mb-1">Summary</h2>
        <p className="italic text-sm text-gray-800">{summary}</p>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-1">Skills</h2>
          <ul className="list-disc ml-5 text-sm text-gray-900">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-1">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="text-sm mb-4">
              <p className="font-bold">{exp.title || "Job Title"} - {exp.company || "Company"}</p>
              <p className="text-xs italic text-gray-600">{exp.duration || "Duration"}</p>
              <p className="text-gray-800">{exp.description || "Description of your role or responsibilities."}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
