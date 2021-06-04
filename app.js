// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        // console.log("Crear por hacer")
        porHacer.crear(argv.descripcion);
        console.log("Se agrego tarea")
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        for (let tarea of listado) {
            console.log('=================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=================='.green);
        }
        console.log('Mostrar todas las tareas por hacer')
        break;

    case 'actualizar':
        // console.log('Actualiza una tarea por hacer')
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log("La tarea fue eliminada")
        } else { console.log("La tarea no existe") }
        break;
    default:
        console.log('Comando no reconocido')
}