const p = document.getElementById("manifested");
const t = document.getElementById("by");
fetch("https://type.fit/api/quotes")
  .then((data) => data.json())
  .then((affirmations) => {
    const ind = Math.floor(Math.random() * affirmations.length);
    p.innerHTML = affirmations[ind].text;
    const author = affirmations[ind].author;
    const cleanAuthor = author.replace(/, type.fit/, "");

    t.innerHTML = "-" + " " + cleanAuthor;
  });
