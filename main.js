const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

let id = "";
let titulo = "";
let precio = "";

//pasar parametros entre funciones
const function1 = (nombre, edad) =>{
    const nombre1 = nombre;
    const edad1 = edad;
    console.log(nombre1 +" "+ edad1);
}
const function2 = (respuesta) =>{
    const respueta1 = respuesta;
    console.log(respueta1);
}
//console.log(function1("Daniel Arango Villegas", 32) +" "+ function2("Devs"));

const verData = (id, titulo, precio) => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
        console.log('Status Code:', res.status);
        console.log('Date in Response header:', headerDate);
        const datos = res.data.products;
            datos.map(items =>{
                //console.log(items);
                id = items.id;
                titulo = items.title;
                precio = items.price;

                // console.log('id:',id);
                // console.log('titulo:',titulo);
                // console.log('precio:',precio);
            });
        })
        .catch(err => {
            console.log('Error: ', err.message);
        });
}
app.get('/', (req, res) => {
    res.send('mi pagina de inicio');
    
})

console.log();

app.listen(port, () =>{
    console.log(`se conecto al puerto http://localhost:${port}/`);
})