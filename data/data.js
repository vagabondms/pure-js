class Outfit {
  constructor(imgSrc) {
    this.imgSrc = `img/${imgSrc}`;
    this.gender = Outfit.genderGenerator;
    this.size = `${Outfit.sizeGenerator} size`;
  }

  static randomNumberGenerator = () => Math.random;
  static genderGenerator =
    this.randomNumberGenerator() > 0.5 ? "male" : "female";
  static sizeGenerator = this.randomNumberGenerator() > 0.5 ? "big" : "small";
}

const colors = ["blue", "pink", "yellow"];
const types = ["p", "s", "t"];

const outfits = colors.reduce((acc, cur) => {
  const colorTypePair = types.map((type) => {
    return new Outfit(`${cur}_${type}.png`);
  });
  return [...acc, ...colorTypePair];
}, []);

export default [...outfits, ...outfits];
