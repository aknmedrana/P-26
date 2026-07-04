const base = import.meta.env.BASE_URL;

const loadJson = async (file) => {
  const response = await fetch(`${base}data/${file}`);

  if (!response.ok) {
    throw new Error(`Unable to load ${file}`);
  }

  return response.json();
};

export const getProfile = () => loadJson("profile.json");
export const getProjects = () => loadJson("projects.json");
export const getSocials = () => loadJson("socials.json");
export const getSettings = () => loadJson("settings.json");

export const getSkills = async () => {
  const response = await fetch(`${base}data/skills.json`);
  if (!response.ok) throw new Error("Unable to load skills.json");
  return response.json();
};

export const getExperience = async () => {
  const response = await fetch(`${base}data/experience.json`);
  if (!response.ok) throw new Error("Unable to load experience.json");
  return response.json();
};

export const getEducation = async () => {
  const response = await fetch(`${base}data/education.json`);
  if (!response.ok) throw new Error("Unable to load education.json");
  return response.json();
};

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = `${base}resume.pdf`;
  link.download = "Anne_Kathlyn_Medrana_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};