function myFnc() {
    let car = "BMW"
    console.log(car)
}
myFnc();
console.log(car) //undefined
// let is a local variable so it will be accessible just inside the scope. If we use var instead of let the result will be the same as var wil be inside the scope