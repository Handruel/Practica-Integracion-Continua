const holaMundo = require('./index');

test('Hola Mundo test', () => {
  expect(holaMundo()).toBe('Hola Mundo');
});