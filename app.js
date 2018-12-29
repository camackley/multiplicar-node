
//llamo el archivo de donde viene la funcion
const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;
const colors = require ('colors');

let comando =argv._[0];

switch(comando){
  case 'listar':
    console.log('Listar');
    listarTabla( argv.base, argv.limite )
      .then(listado => console.log(listado))
      .catch(err => console.log(err));
  break;

  case 'crear':
    console.log('Crear');
    crearArchivo( argv.base, argv.limite )
        .then(Archivo => console.log(`Archivo creado`,colors.magenta(`${ Archivo }`)))
        .catch(err => console.log(err));
  break;

  default:
    console.log('Comando no reconocido');

}

//asi se pide argumentos desde la terminal
let argv2 =process.argv;
//forma dos con el yargs


//Forma uno
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log( base );
