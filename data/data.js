class Outfit {
  constructor(imgSrc, sex, size) {
    this.imgSrc = `src/${imgSrc}`;
    this.sex = sex;
    this.size = `${size} size`;
  }
}

const randomNumberGenerator = () => Math.random;
const sexGenerator = randomNumberGenerator() > 0.5 ? "male" : "female";
const sizeGenerator = randomNumberGenerator() > 0.5 ? "big" : "small";

const outfits = [new Outfit()];

export default outfits;
