//first one 
let developer = {
    name: "Ahmed",
    birthYear: 1992,
    skills: ["PhotoShop", "HTML", "CSS", "JS"],
};
const {
    name,
    birthYear,
    skills: [PhotoShop, HTML, CSS, JS],
} = developer;

let date = new Date();
let currentYear = date.getFullYear();

function getAge(age) {
    age = currentYear - birthYear;
    return age;
}

console.log(getAge());

const {
    designSkills = [PhotoShop],
        devSkills = [HTML, CSS, JS],
} = developer.skills;

console.log(`design skills: ${designSkills}, development skills: ${devSkills}`);
const newSkills = ["ES6", "ES7", "ES😎"];
let allArrays = [...newSkills, ...devSkills];
console.log(allArrays);
//.................................................................................
// third one 
function styled(strings, ...keys) {
    const theme = {
        color: {
            primary: "red",
            secondary: "blue",
        },
        fontSize: {
            small: "10px",
            large: "20px",
        },
    };
    return strings.map((x, y) => keys[y] ? x += keys[y](theme) : x).join("")
}
console.log(
    styled `
  .h1 {
      color: ${ theme => theme.color.primary},
      font-size: ${ theme => theme.fontSize.large}
  }`
)