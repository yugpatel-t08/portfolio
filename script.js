const tagline = document.getElementById("tagline");
tagline.innerHTML = tagline.textContent
  .trim()
  .split(" ")
  .map((w, i) => `<span style="animation-delay:${i * 70}ms">${w}&nbsp;</span>`)
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();
