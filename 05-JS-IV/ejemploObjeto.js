
var usuarios = [
    {
    nombre: "Andres",
    apellido: 'Alvarez',
    usuario: 'AndAlv',
    contraseña: "hola123",
    edad: 26,
    direccion: {
        calle: 'Colon 100',
        ciudad: 'Cordoba'
    },
    online: true,
    hobbies: ['correr', 'bailar', 'fotografia'],
    saludar: function(){
    console.log('hola, Andres');
    }
   },
   {
    nombre: "Claudia",
    apellido: 'Zini',
    usuario: 'ClaZin',
    contraseña: "chu987",
    edad: 42,
    direccion: {
        calle: 'San Martin 200',
        ciudad: 'Buenos Aires'
    },
    online: true,
    hobbies: ['entrenar', 'pintar', 'viajar'],
    saludar: function(){
    console.log('hola, Claudia');
    }
   },
   {
    nombre: "Marcelo",
    apellido: 'Ramirez',
    usuario: 'MarRam',
    contraseña: "mus654",
    edad: 35,
    direccion: {
        calle: 'Belgrano 800',
        ciudad: 'Mendoza'
    },
    online: false,
    hobbies: ['boxeo', 'entrenar', 'Djs'],
    saludar: function(){
    console.log('hola, Marcelo');
    }
   }  
]
//-------------------------------------------------

function corte(num) {
    var lista = []
    for (let i = 0; i < num.length; i++) {
        if(num[i] === 5) break 
        lista.push(num[i])   
    }
    return lista
}
console.log(corte([1, 2, 3, 4, 5, 6, 7, 8, 9]))


const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]);
  

// username
// 'juan.perez'
// password
// 'loremipsumpwd123'
// lovesJavascript
// true
// favoriteNumber
// 42