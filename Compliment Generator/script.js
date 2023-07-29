const compliments = [
    "You're amazing!",
    "You're a true inspiration.",
    "You make a difference in the world.",
    "You're a ray of sunshine.",
    "Your smile is contagious.",
    "You have a heart of gold.",
    "You're incredibly talented.",
    "You're a fantastic friend.",
    "You're one in a million!",
    "You're doing great things.",
    "You're a superstar!",
    "You're loved and appreciated.",
    "You have a beautiful soul.",
    "You're so creative and innovative.",
    "You're an exceptional problem solver.",
    "Your kindness knows no bounds.",
    "You bring joy wherever you go.",
    "You're a beacon of hope.",
    "You have a brilliant mind.",
    "You're resilient and strong.",
    "You have a heart full of compassion.",
    "You're a true leader.",
    "You're a breath of fresh air.",
    "You're a wonderful listener.",
    "Your positivity is infectious.",
    "You're a source of inspiration to others.",
    "You have an incredible sense of humor.",
    "You're a constant source of support.",
    "You have a heartwarming presence.",
    "You radiate confidence and grace.",
    "You're always so thoughtful and caring.",
    "You're a force to be reckoned with.",
    "Your courage is admirable.",
    "You have an amazing taste in everything.",
    "You're wise beyond your years.",
    "You have a unique and special aura.",
    "You're simply fantastic!"
  ];
  
  function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    document.getElementById("compliment").textContent = compliment;
  }
  
  document.getElementById("generateButton").addEventListener("click", generateCompliment);
  