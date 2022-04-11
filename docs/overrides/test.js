const markdown = `
# News

* Hello World
* Lorem
* foo
`;

const regexp = /(?<=#{1,6} (.*)\n(?:(?!#).*\n)*)(?=[+*-] (.*(?:\n(?![#+*-]).+)?))/g;
const matches = [...markdown.matchAll(regexp)];
const result = matches.reduce((acc, cur) => {
    const [title, item] = cur.slice(1);
    const target = acc.find(e => e[0] === title);
    if(target) {
        target.push(item);
    } else {
        acc.push([title, item]);
    }
    return acc;
}, []);
console.log(result);