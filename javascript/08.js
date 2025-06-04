const student = {
    name: '김선영',
    age: 32,
    address: '부산 북구',
    phone: '010-1234-5678',
}

// 비구조 할당
const { name, address } = student;
console.log(name, address);

// REST 문법
const { age, phone, ...a } = student;
console.log(age, phone, a);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// spread
const newStudent = {
    ...student,
    gender: '여',
};

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);


const newNumbers2 = numbers;

let names = [];

function addName(name) {
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj);