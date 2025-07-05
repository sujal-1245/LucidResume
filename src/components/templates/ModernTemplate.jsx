import { useTemplate } from '../../context/TemplateContext';

const ModernTemplate = () => {
  const { userData } = useTemplate();
  const {
    name = "Your Name",
    title = "Professional Title",
    email = "email@example.com",
    phone = "+91-0000000000",
    summary = "A brief summary about your professional background.",
    skills = [],
    experience = [],
  } = userData || {};

  return (
    <div className="w-[595px] h-[842px] bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 p-8 font-sans rounded-xl shadow-2xl overflow-y-auto">
      {/* Header */}
      <div className="border-l-4 border-cyan-500 pl-4 mb-6">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-md text-gray-700 mt-1 font-medium">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{email} | {phone}</p>
      </div>

      {/* Summary */}
      <p className="text-md mb-6">{summary}</p>

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {skills.map((skill, i) => (
              <span key={i} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold border-b border-gray-400 pb-1 mb-2">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <p className="font-bold">{exp.title || "Job Title"}</p>
              <p className="text-sm text-gray-600">
                {exp.company || "Company"} | {exp.duration || "Duration"}
              </p>
              <p className="text-sm mt-1">
                {exp.description || "Description of responsibilities and contributions."}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
