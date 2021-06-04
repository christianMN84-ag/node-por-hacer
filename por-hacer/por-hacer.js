const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);

    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        // si el archivo JSON esta vacio, lo trato como un arreglo vacio
        listadoPorHacer = [];
    }

    // console.log(listadoPorHacer);
}

const crear = (descripcion) => {

    // primero cargo lo que contiene el JSON en una variable
    cargarDB();


    let porHacer = {
        descripcion,
        completado: false
    };

    // a la variable le agrego la nueva tarea
    listadoPorHacer.push(porHacer);

    // persisto la variable en el JSON
    guardarDB();

    // return porHacer;
}


const getListado = (c) => {
    // console.log(c);
    cargarDB();
    if (c) {
        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === c);
        listadoPorHacer = nuevoListado;
        return listadoPorHacer;
    } else {
        return listadoPorHacer;
    }

}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();

        // retorno true para indicar que la tarea se realizo correctamente
        return true;
    } else {
        return false;
    }

}


const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        //si tienen el mismo tamaño es porque no se borro nada, entonces devuelvo false
        return false;
    } else {
        //como tienen distinto tamaño, ahora el listadoPorHacer debe apuntar al nuevo array filtrado
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}