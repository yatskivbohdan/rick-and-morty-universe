const statusEmojis = {
  Alive: "😎",
  Dead: "☠️️",
  unknown: "🤔",
};
const genderEmojis = {
  Male: "👨",
  Female: "👩",
  unknown: "👀",
  Genderless: "👤",
};
const statusOptions = [
  { value: "", label: "All" },
  { value: "Alive", label: "Alive" },
  { value: "Dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

const genderOptions = [
  { value: "", label: "All" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "unknown", label: "Unknown" },
  { value: "Genderless", label: "Genderless" },
];

export const SERVER_URL = "https://rickandmortyapi.com/api";
export { statusEmojis, genderEmojis, statusOptions, genderOptions };
