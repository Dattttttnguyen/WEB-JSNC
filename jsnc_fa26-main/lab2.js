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

//Bài 3:
const student = {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    email: "an@gmail.com",
    major: "CNTT"
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.email);

student.age = 21;
student.phone = "0123456789";

console.log(student);



//Bài 4:
const students = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 20
    },
    {
        id: 2,
        name: "Trần Văn Bình",
        age: 21
    },
    {
        id: 3,
        name: "Lê Văn Nam",
        age: 20
    }
];

console.log(students);
console.log(students[0].name);
console.log(students[1].age);

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}


for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
