//console.log('Prueba Daniel NodeJS');

let subscriptores= 22000;

//console.log(module);

// function saludar(){
//     console.log('Hello word, suscribete');
// }

// module.exports.subscriptores= subscriptores;
// module.exports.saludar= saludar();

// module.exports.saludar2= function(){
//     console.log('Hello word, suscribete este es el otro saludar');
// }


module.exports = {
    subs : subscriptores,
    saludar: function() {
        console.log('Hello word, suscribete');
    },
    sumar: (a,b) => (a+b),
    mostrar: a => a+10
}