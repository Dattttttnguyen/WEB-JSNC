// Bài 1:
const name = "Nguyễn Văn An";
const age = 20;
const major = "Lập trình Web";

console.log(`Xin chào ${name}.
Bạn ${age} tuổi.
Ngành học: ${major}.`);




//Bài 2:
const student = {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    major: "Lập trình Web"
};

console.log(`Mã sinh viên: ${student.id}
Họ tên: ${student.name}
Tuổi: ${student.age}
Ngành: ${student.major}`);




//Bài 3:
const add = (a, b) => {
    return a + b;
};




//Bài 4:
a.Tính bình phương
const square = (n) => n * n;

console.log(square(5));

b.Tính tổng

const sum = (a, b) => a + b;

console.log(sum(10, 20));

c.Chào người dùng

const sayHello = (name) => `Xin chào ${name}`;

console.log(sayHello("An"));




//Bài 5: 
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => number * 2);

console.log(result);




//Bài 6: 
const students = [
    { id: 1, name: "An" },
    { id: 2, name: "Bình" },
    { id: 3, name: "Cường" }
];

const names = students.map((student) => student.name);

console.log(names);




//Bài 8:
const products = [
    { id: 1, name: "iPhone 15", price: 20000000 },
    { id: 2, name: "MacBook Air", price: 25000000 },
    { id: 3, name: "AirPods", price: 5000000 }
];

products.map((product) => {
    console.log(`${product.id} | ${product.name} | ${product.price}`);
});




//Bài tổng hợp:
<!DOCTYPE html>
<html>
<head>
    <title>Bài tập</title>
</head>
<body>

<div id="content"></div>

<script>
const products = [
    { id: 1, name: "Áo thun", price: 150000, category: "Thời trang" },
    { id: 2, name: "Quần jean", price: 350000, category: "Thời trang" },
    { id: 3, name: "Giày sneaker", price: 800000, category: "Giày" }
];

const html = products.map((product) => `
    <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.category}</td>
    </tr>
`).join("");

document.getElementById("content").innerHTML = `
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
        </tr>
        ${html}
    </table>
`;
</script>

</body>
</html>
