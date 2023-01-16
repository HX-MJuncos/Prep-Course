var Car = function (marca, modelo, color) {
    this.marca= marca || 'marca',
    this.modelo= modelo || 'modelo',
    this.color= color || 'color'
}

var auto1 = new Car( 'Ka', 'negro')
var auto2 = new Car('WV', 'Gol', 'Gris')
var auto3 = new Car('Fiat', 1500, 'blando')

console.log(auto1)
console.log(auto2)
console.log(auto3)