const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(1).then((msg) => expect(msg).toEqual('Oi!'));
  });
  test('ocupado', () => {
    expect.assertions(1);
    return answerPhone(false).catch((error) =>
      expect(error.message).toEqual('Infelizmente não podemos atender...'));
  });
});
