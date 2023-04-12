// const home = document.getElementById('home')
// const about = document.getElementById('about')
// const service = document.getElementById('service')
// const contact = document.getElementById('contact')

const address = document.getElementById('address')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const done = document.getElementById('approval');

// const login = (address, password) => {
//     address.value
//     // password.value
//     // alert(address, password)
// }
// btn.addEventListener("click", login)

// // function hasNumbersAndLetters (str) {
// //     return /^[A-za-z0-9]*$/.test(str)
// // }

btn.addEventListener("click", () => {
    if(password.value  === "" || address.value === "" ){
        console.log("didnt enter address")
        console.log("please enter password")
        done.innerHTML = "Did'nt enter a password or an address"
    } else if(password.value.length < 8) {
        console.log("password too short")
        done.innerHTML = "Password too short"
    } else {
        address.placeholder = address.value,
        console.log(address.value)
        password.placeholder = password.value
        console.log(password.value)
        done.innerHTML = `Thanks for logging in ${address.value}`
    }
})




