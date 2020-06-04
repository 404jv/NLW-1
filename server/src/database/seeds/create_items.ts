import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e bateria', image: 'baterias.svg' },
    { title: 'Papéis e papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Óleos de Cozinha', image: 'oleo.svg' },
  ]);
}