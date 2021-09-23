const adventure = require('../src/setupTeardown');

describe('4 - Quem sobreviveu?', () => {
  test('depois da primeira aventura', () => {
    adventure.randomAttack();
    console.log(`Grupo restante ${adventure.specialists.map((specialist) => specialist.nome)}`);
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    adventure.randomAttack();
    console.log(`Grupo restante ${adventure.specialists.map((specialist) => specialist.nome)}`);
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    adventure.randomAttack();
    console.log(`Grupo restante ${adventure.specialists.map((specialist) => specialist.nome)}`);
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    adventure.randomAttack();
    console.log(`Grupo restante ${adventure.specialists.map((specialist) => specialist.nome)}`);
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    adventure.randomAttack();
    console.log(`Sobrevivente ${adventure.specialists.map((specialist) => specialist.nome)}`);
    expect(adventure.specialists.length).toBe(1);
  });
});
