import { resolveConfig } from "vite";

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
//     setTimeout(() => {
//         // Change value of isSuccess variable to simulate request status
//         const isSuccess = true;
    
//         if (isSuccess) {
//           onSuccess("success value");
//         } else {
//           onError("error");
//         }
//       }, 2000);
// }; 
  

// fetchUserFromServer("Mongo", (user) => { console.log(user) }, (error) => { console.log(error) });




// const fetchUserFromServer2 = (username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // Change value of isSuccess variable to simulate request status
//             const isSuccess = true;
        
//             if (isSuccess) {
//                 resolve("success value");
//             } else {
//                 reject("error");
//             }
//         }, 2000);
//     });
// };

// fetchUserFromServer2("Mongo")
//     .then(user => console.log(user))
//     .catch(error => console.log(error));



// const makeGreeting  = (guestName) => {
//     return new Promise((resolve, reject) => {
//         if (!guestName) {
//             reject("Guest name must not be empty");
//         } else {
//             resolve(`Welcome ${guestName}`);
//         }
//     })
// };


// const makeGreeting2  = (guestName) => {
//     if (!guestName) {
//         return Promise.reject("Guest name must not be empty");
//     } else {
//         return Promise.resolve(`Welcome ${guestName}`);
//     }
// };
// makeGreeting2("Alpha")
//     .then(greeting => console.log(greeting))
//     .catch(error => console.log(error));




// _______________________________________
const makePromise = ({value, delay, shouldResolve = true}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(value);
            } else {
                reject(value);
            }
        }, delay);
    });
};


// makePromise({ delay: 1000 })
//     .then((value) => { console.log(value) }) // "A"
//     .catch((error) => { console.log(error) });


// makePromise({ value: "B", delay: 3000 })
//     .then((value) => { console.log(value) }) // "B"
//     .catch((error) => { console.log(error) });

// makePromise({ value: "C", delay: 1000, shouldResolve:false })
// 	.then(value => console.log(value)) 
//     .catch(error => console.log(error)); // "C"


// ________________________________________________________
// Обробка множинних промісів

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected Promise 2");
// const p3 = Promise.resolve(3);

// // Promise.all()
// Promise.all([p1, p2, p3])
//     .then((values) => { console.log(values) }) // [1,2,3]
//     .catch((error) => { console.log(error) });


// // Promise.allSettled()
// Promise.allSettled([p1, p2, p3])
//     .then((values) => { console.log(values) });


// Promise.race()
// Метод Promise.race повертає результат першого вирішеного (навіть якщо це відхилення) промісу з переданих йому промісів.

// Перший проміс перейде в стан fulfilled через 1 секунду (буде найшвидшим), і буде виконано колбек методу then 
// зі значенням першого промісу, а решту буде відкинуто.
// Коли хоча б один проміс з масиву виконається, проміс, що повертається, перейде у стан resolved, а всі інші будуть відкинуті.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 4000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 2000);
  });

Promise.race([promise1, promise2])
    .then((values) => { console.log(values) })
    .catch((error) => { console.log(error) });

