import Validator from '../app';

test('case 1', () => {
  const result = Validator.validatePhoneNumber('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});

test('case 2', () => {
  const result = Validator.validatePhoneNumber('+7 960 000 00 00');
  expect(result).toBe('+79600000000');
});

test('case 3', () => {
  const result = Validator.validatePhoneNumber('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});
