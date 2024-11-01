import SuperheroesRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesRepository();

export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find((hero) => hero.id === id);
}

export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter((hero) =>
    String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
  );
}

export function obtenerSuperheroesMayoresde30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(
    (hero) =>
      hero.edad > 30 &&
      hero.planetaOrigen === 'Tierra' &&
      hero.poder.length >= 2
  );
}

export function obtenerSuperheroes() {
  //puedo usar el metodo de la clase llamado obtenerTodos(), para obtener el contendio del archivo .txt en fomrato de array de objetos JS
  const superheroes = repository.obtenerTodos();
  //retorno todos los superheroes
  return superheroes;
}

export function obtenerSuperheroesMenoresde30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(
    (hero) =>
      hero.edad < 30 &&
      hero.planetaOrigen === 'Tierra' &&
      hero.poder.length >= 2
  );
}
