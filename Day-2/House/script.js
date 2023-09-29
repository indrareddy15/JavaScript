const door = document.querySelector(".door");
door.addEventListener("click", () => {
    door.classList.toggle("change");
})

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 1000);
// }

//map vs filter in javascript

let dataArr = [
    { name: "test-1", marks: '20' },
    { name: "test-2", marks: '30' },
    { name: "test-3", marks: '40' },
    { name: "test-4", marks: '50' },
    { name: "test-5", marks: '60' },
]

// let result = dataArr.filter((data) => { return data.marks >= 35 });
// console.log(result);

// let result1 = dataArr.map((user) => { return user })
// console.log("desi", result1);


// const array = [2, 4, 6, 8];

// const map1 = array.map((x) => x * 2);
// console.log(map1);

// const array2 = [1, 2, 3, 4];

// array2.forEach((x) => {
//     return console.log(x * 2);
// })

// console.log(array2);

// const vehicle = ['car', 'bus', 'train', 'bike'];

// console.log(vehicle.slice(2, 3));

// const transform = new Promise((resolve, reject) => {
//     let a = 2 + 2;

//     if (a == 4) {
//         resolve("success");
//     } else {
//         reject("failed");
//     }
// });

// transform.then((message) => {
//     console.log("Message: " + message);
// }).catch((message) => {
//     console.log("Message: " + message);
// })

// const array = [4, 5, 6, 7];

// const res = array.reduce((a, b) => {
//     console.log(a, b);
//     return a * b;
// }
// );

// console.log("Finals: " + res);


