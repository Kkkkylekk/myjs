// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Start coding here...
const enabledSettings = Object.entries(settings)
  .filter(([key, value]) => value === true)
  .map(([key, value]) => `${key}: ${value}`);

enabledSettings.forEach(setting => {
  const p = document.createElement("p");
  p.textContent = setting;
  document.body.appendChild(p);
});

const trueCount = Object.values(settings).filter(value => value === true).length;
const countHeader = document.createElement("h2");
countHeader.textContent = `Number of settings set to true: ${trueCount}`;
document.body.appendChild(countHeader);

const filteredSettings = Object.entries(settings)
  .filter(([key, value]) => value === true);

const filteredSettingsObject = Object.fromEntries(filteredSettings);
const filteredSettingsHeader = document.createElement("h2");
filteredSettingsHeader.textContent = "Filtered Settings (Only True Values)";
document.body.appendChild(filteredSettingsHeader);

Object.entries(filteredSettingsObject).forEach(([key, value]) => {
  const p = document.createElement("p");
  p.textContent = `${key}: ${value}`;
  document.body.appendChild(p);
});