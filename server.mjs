import express from 'express';
import {
  obtenerSuperheroePorIdController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresde30Controller,
  obtenerSuperheroesController,
  obtenerSuperheroesMenoresde30Controller,
} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

app.get('/superhero/id/:id', obtenerSuperheroePorIdController);
app.get(
  '/superheroes/atributo/:atributo/:valor',
  buscarSuperheroesPorAtributoController
);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresde30Controller);

app.get('/superheroes', obtenerSuperheroesController);

app.get('/superheroes/edad/menorA30', obtenerSuperheroesMenoresde30Controller);

app.listen(PORT, () => {
  console.log(`Servidor corriento en el puerto ${PORT}`);
});
