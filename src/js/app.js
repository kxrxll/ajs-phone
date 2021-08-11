// TODO: write your code here
class Validator {
  static validatePhoneNumber(str) {
    const no8 = str.replace(/^8/, '+7');
    const noOtherSymbols = no8.replace(/([\D])/g, (_zero, first) => {
      if (first !== '+') {
        return '';
      } return '+';
    });
    return noOtherSymbols;
  }
}

export default Validator;
