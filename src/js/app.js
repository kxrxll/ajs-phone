// TODO: write your code here
class Validator {
  static validatePhoneNumber(str) {
    if (
      // поиск запрещенных символов
      str.search(/[^A-Za-z\d\-_]/g) === -1
      // поиск запрещенных символов в начале строки
    && str.search(/^[^\d\-_]/) !== -1
    // поиск запрещенных символов в конце строки
    && str.search(/[^\d\-_]$/) !== -1
    // поиск 4 цифр в строке
    && str.search(/[\d]{4,}/) === -1) {
      return true;
    } return false;
  }
}

export default Validator;
