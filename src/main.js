import outfits from "../data/data.js";

const outfitDiv = document.querySelector("#outfits");

const wrapper = document.createElement("ul");
outfits.forEach((outfit) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = outfit.imgSrc;
  const details = document.createElement("div");
  details.innerHTML = `${outfit.gender} ${outfit.size}`;
  li.appendChild(img);
  li.appendChild(details);
  wrapper.appendChild(li);
});

outfitDiv.appendChild(wrapper);
