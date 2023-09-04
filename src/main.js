const prompt = require('prompt-sync')({ sigint: true });
const functions = require('./utils/functions');
const sequelize = require('../config/database');
//Criar tabela com as colunas: Index, UserId, FirstName, LastName, Sex, Email, Phone, DateBirth, Job Title

// ---------------------------------------------- //

//TODO:
//  * Arrumar função verificarTabela()
//  * Adicionar "logging: false" na configuração
//  * Completar as colunas nas funções

let tableState;

async function main() {
  let option = 0;

  tableState = functions.verificarTabela("m1db2");

  while (option != 5) {
      option = 0;
      while(option < 1 || option > 5) {
          console.log(`--- Estado da tabela: ${tableState} ---`)
          console.log("1 - Mostrar todos os dados")
          console.log("2 - Pesquisar dados")
          console.log('3 - Limpar tela');
          console.log('4 - Importar dados');
          console.log('5 - Sair');
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
              try {
                functions.importarDados();
                emptyTable = true;
              } catch (error) {
                console.log("Erro ao importar dados: ", error);
              }
              break;
          
          // ------------------------------------------------------- //
          
          case 5:
              console.log('Saindo...');
              break;
          
          // ------------------------------------------------------- //
          
          default:
              console.log("Opção inválida. Por favor, escolha uma opção válida.");
      }
  }
}

main();