const prompt = require('prompt-sync')({ sigint: true });
const functions = require('./utils/functions');
const sequelize = require('../config/database');
//Criar tabela com as colunas: Index, UserId, FirstName, LastName, Sex, Email, Phone, DateBirth, Job Title

// ---------------------------------------------- //


//sequelize.sync().then(() => {
//    functions.importarDados();
//  });
  

async function main() {
  let option = 0;

  while (option != 4) {
      option = 0;
      while(option < 1 || option > 4) {
          console.log("---Menu---")
          console.log("1 - Mostrar todos os dados")
          console.log("2 - Pesquisar dados")
          console.log('3 - Limpar tela');
          console.log('4 - Sair');
          option = parseInt(prompt('Selecione uma opção: '));
      }
      
      switch (option) {
          case 1:
              try {
                  await functions.mostrarDados();    
              } catch (error) {
                  console.log("Error log: ", error);
              }
              break;
  
          // ------------------------------------------------------- //
  
          case 2:
              try {
                  await functions.PesquisarDados();
              } catch (error) {
                  console.log("Error log: ", error);
              }
              break;
  
          // ------------------------------------------------------- //

          case 3:
              console.clear();
              break;

          // ------------------------------------------------------- //

          case 4:
              console.log('Saindo...');
              break;
          
          // ------------------------------------------------------- //
          
          default:
              console.log("Opção inválida. Por favor, escolha uma opção válida.");
      }
  }
}

main();