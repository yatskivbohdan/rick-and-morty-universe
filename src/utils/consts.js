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

const quotes = [
  "What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time",
  "Listen Morty, I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed.",
  "What about the reality where Hitler cured cancer, Morty? The answer is: don’t think about it.",
  "I turned myself into a pickle, Morty! I’m Pickle Ri-i-i-ick!",
  "Sometimes science is more art than science.",
  "Oh, boy, so you actually learned something today? What is this, Full House?",
  "Have fun with empowerment. It seems to make everyone that gets it really happy.",
  "I’ve got a quick solo adventure to go on, and this one will not be directed by Ron Howard!",
  "Do you wanna develop an app?",
  "My appearance is designed to be familiar and to put you at ease.",
  "What up, my glip-glops?",
  "Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.",
  "You gotta do it for Grandpa, Morty. You gotta put these seeds inside your butt.",
  "Don’t move. Gonorrhea can’t see us if we don’t move...Wait! I was wrong! I was thinking of a T-rex.",
  "You ever hear about Wall Street, Morty? You know what those guys do in their fancy boardrooms? They take their balls and they dip them in cocaine and wipe them all over each other.",
  "So what if he’s the Devil, Rick? At least the Devil has a job. At least he’s active in the community.",
  "Traditionally, science fairs are a father-son thing.” “Well, scientifically, traditions are an idiot thing.",
  "If I sounded a little defensive, it’s because Pirates of the Pancreas was my baby. I got a lot of push-back when I pitched it, Morty. I guess I’m still a little defensive.",
];

export { quotes, statusEmojis, genderEmojis, statusOptions, genderOptions };
