const loadJson = async (file) => {
  const response = await fetch(`/data/${file}`);

  if (!response.ok) {
    throw new Error(`Unable to load ${file}`);
  }

  return response.json();
};

export const getProfile = () => loadJson("profile.json");
export const getProjects = () => loadJson("projects.json");
export const getSocials = () => loadJson("socials.json");
export const getSettings = () => loadJson("settings.json");

export async function getSkills() {
  const response = await fetch("/data/skills.json");
  return response.json();
}

export async function getExperience() {
  const response = await fetch("/data/experience.json");
  return response.json();
}

export async function getEducation() {
  const response = await fetch("/data/education.json");
  return response.json();
}
export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Anne_Kathlyn_Medrana_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
