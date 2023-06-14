//Basic ex 1
//Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:
let multiNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of multiNumbers) {
    for (let j = 1; j < 11; j++) {
        console.table(`${i} x ${j} = ${i * j}`);
    }
}

// Basic ex 2
// 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName). 
// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.

// let myFullName: { fName: string, lName: string }[] =

//     [{ fName: "Olga", lName: "Terleeva" }];

// const myFName = document.getElementById("my-full-name") as HTMLElement;

// myFullName.forEach(myFullName => {
//     for (let i = 0; i < 10; i++)
//         myFName.innerHTML += `<p>${myFullName.fName} ${myFullName.lName}</p>`
// })
// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         myFName.innerHTML += `<p>${myFullName[0].fName} ${myFullName[0].lName}</p>`
//     }
// }, 5000);

// Basic ex 3
// Create an array of names, this array should only accept strings.
// let namesArr: string[] = ["Olga", "Alena", "Marina", "Valeria"];
// for (let x in namesArr) {
//     console.log(x);
// }
// for (let x of namesArr) {
//     console.log(x);
// }

// namesArr.indexOf;
// console.log(namesArr);

// let coffeeSelection: { name: string; price: number; description: string; img: any }[] = [
//     { name: "Filtered Coffee", price: 4, description: "Involves pouring hot water over coffee grounds", img: "photos/coffee1.jpg" },
//     { name: "Turkish Coffee", price: 3, description: "An espresso-based coffee", img: "photos/coffee2.jpg" },
//     { name: "Breakfast Set", price: 20, description: "Two coffee and two Cakes of the day", img: "photos/coffee3.jpg" },
//     { name: "Coffee Beans", price: 3, description: "Coffee Beans from Brazil", img: "photos/coffee4.jpg" },
//     { name: "Americano", price: 3, description: "An espresso-based coffee", img: "photos/coffee5.jpg" },
//     { name: "Coffee To Go", price: 3, description: "Any type of coffee ready for you", img: "photos/coffee6.jpg" },
//     { name: "Iced Coffee", price: 3, description: "An espresso-based coffee with ice", img: "photos/coffee7.jpg" },
//     { name: "Flat White", price: 4, description: "An espresso-based with a layer of steamed milk on the top", img: "photos/coffee8.jpg" },
//     { name: "Cappuccino", price: 4, description: "An espresso-based coffee with milk foam", img: "photos/coffee9.jpg" }

// ]

// const layout = document.getElementById("container") as HTMLElement;

// coffeeSelection.forEach(coffeeSelection => {
//     layout.innerHTML += `
//     <div class="card" style="width: 18rem;">
//   <img src="${coffeeSelection.img}" class="card-img-top" alt="...">
//   <div class="card-body">
//   <p class="card-text">${coffeeSelection.name}</p>
//     <p class="card-text more-info">${coffeeSelection.description}</p>
//      <p class="card-text">${coffeeSelection.price} € </p>
//   </div>
// </div>`

// })
