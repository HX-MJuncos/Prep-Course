// var Car = function (marca, modelo, color) {
//     this.marca= marca || 'marca',
//     this.modelo= modelo || 'modelo',
//     this.color= color || 'color'
// }

// Car.prototype.detalle = function () {
//     console.log(`El ${this.marca} ${this.modelo} es de color ${this.color}`)
// }

// var auto1 = new Car( 'Ford', 'Ka', 'negro')
// var auto2 = new Car('WV', 'Gol', 'Gris')
// var auto3 = new Car('Fiat', 1500, 'blanco')

// console.log(auto1)
// console.log(auto2.modelo)
// console.log(auto3.detalle())


// var arr = [2, 6, 8, 4, 3]
// function multiplica() {
//     var res = []
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] * 2)
//         res.push(arr[i])
//     }
//     return res
// }
// multiplica()

// var arr = [2, 6, 8, 4, 3]
// var res = arr.forEach((elem) => console.log(elem * 2))
// function multiplica() {
//     return res
// }
// multiplica()

// var arr = [2, 6, 8, 4, 3]
// var res = arr.map((elem) => elem * 2)
// console.log(res)
// console.log(arr)

var arr = [2, 6, 8, 4, 3]
var res = arr.reduce((acc, curr)=> acc * curr)
console.log(arr)
console.log(res)