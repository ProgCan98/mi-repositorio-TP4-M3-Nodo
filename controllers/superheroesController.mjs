import {
  obtenerSuperheroePorId,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresde30,
  obtenerSuperheroesPorId,
} from '../services/superheroesService.mjs';
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from '../views/responseView.mjs';

export function obtenerSuperheroesPorIdController(req, res) {
  const { id } = req.params;
  const superheroe = obtenerSuperheroesPorId(parseInt(id));

  if (superheroe) {
    res.send(renderizarSuperheroe(superheroe));
  } else {
    res.status(404).send({ mensaje: 'Superheroe no encontrado' });
  }
}

export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res
      .status(404)
      .send({ mensaje: 'No se encontraron superheroes con ese atributo' });
  }
}

export function obtenerSuperheroesMayoresde30Controller(req, res) {
  const superheroes = obtenerSuperheroesMayoresde30();
  res.send(renderizarListaSuperheroes(superheroes));
}