// const opts = {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: '10'
//     }
// }

const descripcion = {
    alias: 'd',
    demand: true
}

const argv = require('yargs')
    .command('listar', 'Muestra las tareas por hacer', {
        descripcion: {
            alias: 'd',
            demand: false
        },
        completado: {
            alias: 'c',
            demand: false,
        }
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion,
    })
    .help()
    .argv;


module.exports = {
    argv
}