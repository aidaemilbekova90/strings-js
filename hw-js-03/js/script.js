/*Напишите скрипт, в которую вводится имя человека и выводится на экран
 приветствие в виде слова «Привет», после которого должна стоять запятая,
  введенное имя и восклицательный знак. После запятой должен стоять пробел,
   а перед восклицательным знаком пробела быть не должно. Пример: "Привет, Вася!"*/


  /* let userName = prompt ("Как вас зовут?", "Вася" );
   document.write(`Привет, ${userName} !`);*/


  /*
  2. Составить скрипт, который запрашивает название футбольной команды и выводит его 
  на экране со словами «это чемпион!». Пример: "REAL MADRID это чемпион!"*/
   
  /*let teamName= prompt("название футбольной команды?");
  document.write(`${teamName.toUpperCase()} это чемпион!`);*/



  /*3.Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты.
   Скрипт должен обработать полученный номер и показать
   на странице последние 4 цифры карты. Пример: "Последние 4 цифры вашей карты: 1245"  9123456789991245*/

   let creditCard= prompt("Ввести номер кредитной карты");


   //document.write(`${creditCard.substring(12,16)}`);
   // document.write(creditCard.slice(creditCard.length-4,creditCard.length));
    //document.write("<h1>последние 4 цифры вашей карты:" + creditCard.slice(creditCard.length-4, creditCard.length )+"</h1>");
    document.write(`Последние 4 цифры вашей карты: ${"*".repeat(creditCard.length-4)+creditCard.slice(creditCard.length-4,creditCard.length)}`);





   

