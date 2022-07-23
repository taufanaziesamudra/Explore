//! 1
// console.log('Selamat Datang!')
// setTimeout(() => {
//     console.log('Terima Kasih sudah mampir')
// }, 3000)
// console.log('Ada yang bisa dibantu')

//! 2 Callback Function
const orderCoffee = () => {
    let coffee = null
    console.log('Sedang membuat coffe, silahkan menunggu')
    setTimeout(() => {
        coffee = "Kopi sudah jadi"
    }, 3000)
    return coffee
}

const coffee = orderCoffee()
console.log(coffee)