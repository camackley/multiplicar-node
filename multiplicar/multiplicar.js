//requiereds
const fs = require('fs');
const colors = require ('colors');

let listarTabla = (base, limite) =>{

  return new Promise ((resolve, reject) => {

    if( !Number(base) || !Number(limite)){
      reject(`El valor ingresado en la base o el limite no es un número`.red);
      return;
    }
    console.log(' ========================='.green);
    console.log(`========tabla del ${ base }========`.green);
    console.log(' ========================='.green);

        let data = '';
    for(var i=0; i<=limite; i++ ){
        data += `${base}*${i}= ${base * i}\n`;
    };
      resolve(data);
  });
};
/////////////////////////////////////////////////////////////
let crearArchivo = (base, limite) =>{

  return new Promise ((resolve, reject)=>{

    if( !Number(base) || !Number(limite)){
      reject (`El valor ingresado en la base o el limite no es un número`.red);
      return;
    }

    let data = '';

    for(var i=0; i<=limite; i++){
      data += `${base}*${i}= ${base * i}\n`;
    };

    //fs.writeFile(carpeta/file, data[, options], callback[con error]);
    fs.writeFile(`Archivos/tabla-${base}.txt`, data, (err) => {
      if (err)
        reject (err)
      else
        resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}
