const os = require('os');
const fs = require('fs');

const mi = require('./prueba');

 let cpu = os.cpus();
 let sistema = os.platform();
 let usuario = os.hostname();
 //console.log(cpu);
 //console.log(sistema);
 //console.log(usuario);

//  console.log(mi.subscriptores)
//console.log(mi.saludar);
console.log(mi.subs);
mi.saludar();

 
