import SuperheroesRepository from '../repository/superheroesRepository.mjs';

const repository = new SuperheroesRepository();

export function obtenerSuperheroePorId(id) {
  const superhetores = repository.obtenerTodos();
  return superhetores.find((hero) => hero.id === id);
}

export function obtenerSuperheroesPorId(id) {
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
