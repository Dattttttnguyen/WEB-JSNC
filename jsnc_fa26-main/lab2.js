//Bài 1:
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
console.log(names);
console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names.length);
names.push("Minh");
names.pop();
console.log(names);


//Bài 2:
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
