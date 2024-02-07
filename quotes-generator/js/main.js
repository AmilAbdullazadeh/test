// const Validate = function (password) {
//   this.password = password;
//   this.validateNumberPassword = () => {
//     const isNumber = this.password
//       .split("")
//       .some((item) => !isNaN(Number(item)));
//     isNumber
//       ? console.log("Number yoxlanisi-dogru")
//       : console.log("Parolda reqem daxil etmemisiniz");
//   };
//   this.validateLength = () => {
//     this.password.length >= 8
//       ? console.log("Parol uzunlugu yoxlanisi-dogru")
//       : console.log("Parol uzunlugu 8 reqemden cox olmalidir");
//   };
//   this.validateCharacter = () => {
//     const character = this.password
//       .split("")
//       .some((item) => "@?&%$!*".includes(item));
//     character
//       ? console.log("Spacial Character yoxlanisi-dogru")
//       : console.log("Spacial Character daxil etmelisiniz");
//   };
// };

// const password = new Validate("@tural123");
// password.validateNumberPassword();
// password.validateLength();
// password.validateCharacter();




// speacial
const validatePassword = {
  validate: function (password) {
    if (password.length < 7) {
      throw new Error("yanlisdir, en azi 7 herfden ibaret  olmalidir")
    } 
    if (!(password.match("[A-Z]"))) {
      throw new Error("yanlisdir, en azi 1 eded boyuk herf olmalidir");
    }
    if (!(password.match('[a-z]'))) {
      throw new Error("yanlisdir, en azi 1 eded kici herf olmalidir");
    }
    if (!(password.match('[@?&%$!*]'))) {
      throw new Error("yanlisdir, en azi 1 eded xususi simvol olmalidir");
    }
    if (!(password.match('[0-9]'))) {
      throw new Error("yanlisdir, en azi 1 eded reqem olmalidir");
    }

    return 'Yazdigin parol ugurludur !'
  }
}

validatePassword.validate("Amil1234234@"); // yanlisdir, en azi 7 herfden ibaret  olmalidir

validatePassword.validate("Amil123455@"); // yanlisdir, en azi 1 eded boyuk herf olmalidir


validatePassword.validate("Amil123455@"); // yanlisdir, en azi 1 eded kici herf olmalidir

validatePassword.validate("Amil123455@"); // yanlisdir, en azi 1 eded xususi simvol olmalidir

console.log(validatePassword.validate("Amil@@@@@@@@1212"))