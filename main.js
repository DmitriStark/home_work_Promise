


let userName = "dima"

localStorage.setItem("username",userName);
console.log(localStorage.getItem('username'));

sessionStorage.setItem('username',userName);
console.log(sessionStorage.getItem('username'));


function logMessage(count){
    count
   console.log(count)
  
}

let count =1
setTimeout(() => {
    logMessage(count)
  }, 3000);

  let time=setInterval(function() {
	console.log(count++);
    if(count==4){
      window.clearInterval(time)
    }
}, 3000);



function calculateSquare(prom){
  let newP = new Promise((resolve, reject) => {
    let n1 = parseInt(prom)
    console.log(typeof n1)
    if (typeof n1 === 'number') {
      resolve(
        `Yes
        it's
        number`,
        console.log(n1*2)
      );
    } else  {
      reject('incorect input! you put here string make way put in a number mahahahah');
    }
    // reject if false
  });
  return newP
}
function calculateSquare2(number) {
//   return new Promise((resolve, reject) => {
//     if (number < 0) {
//       reject(new Error('there is no way to square root a negative number'));
//     } else {
//       resolve(Math.sqrt(number));
//     }
//   });
// }
calculateSquare(prompt("enter num"))
calculateSquare2(prompt("enter num"))
