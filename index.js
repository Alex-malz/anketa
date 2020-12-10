let  userFirstName;
        while (!(userFirstName = prompt('Ваше имя?')))
            alert('Поле Ваше имя не может быть пустым!');
let userLastName;
        while (!(userLastName = prompt('Ваша фамилия?')))
            alert('Поле Ваша фамилия не может быть пустым!');
let userPatronymicName;
        while (!(userPatronymicName = prompt('Ваше отчество?')))
            alert('Поле Ваше отчество не может быть пустым!');
let age;
age = Number(age);
do {
  age = +prompt('Ваш возраст?');
  alert('Поле Ваш возраст может состоять только из цифр');
    } while (isNaN(age)) ;
    console.log(age)
let userGender = confirm('Ваш пол - мужской?');
if (userGender == true) {
    gender = 'Ваш пол - мужской';
}
else {
    gender = 'Ваш пол - женский ';
}
if (userGender == true && age >= 65) {
    benefit = 'да';
  } else if (userGender == true && age < 65) {
    benefit = 'нет';
  } else if (userGender == false && age >= 55) {
    benefit = 'да';
  } else if (userGender == false && age < 55) {
    benefit = 'нет';
  }
let ageDay =(+age*365);
let ageNew =(+age+5);
alert(`Ваше имя: ${userFirstName}\r\n` + `Ваша фамилия: ${userLastName}\r\n` + `Ваше отчество: ${userPatronymicName}\r\n` + `Ваш возраст: ${age}\r\n` + 
`Ваш возраст в днях: ${ageDay}\r\n` + `Через 5 лет вам будет: ${ageNew}\r\n` + `${gender}\r\n` + `Вы на пенсии? ${benefit}`);
