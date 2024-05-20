const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    if (tutorial === "what is JSONP?") {
      return "What Is JSONP?";
    }
    if (
      tutorial ===
      "What is the difference between stopPropagation and preventDefault?"
    ) {
      return "What Is The Difference Between StopPropagation And PreventDefault?";
    }
    return tutorial
      .split(" ")
      .map((word) => {
        if (["NaN", "OO", "API"].includes(word)) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
};


console.log(titleCased());
