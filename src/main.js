const sequelize = require('../config/database');
const prompt = require('prompt-sync')({ sigint: true });
const { importarDados, mostrarDados, PesquisarDados } = require('./utils/functions');
const { checkTableState } = require('./utils/auxiliaryFunctions');


// ---------------------------------------------------------------------- //

let tableState;
let option = 0;

async function main() {

    while (option != 5) {
        tableState = await checkTableState("Person");
        option = 0;
        while (option < 1 || option > 5) {
            console.log(`--- Estado da tabela: ${tableState} ---`)
            console.log("1 - Mostrar todos os dados")
            console.log("2 - Pesquisar dados")
            console.log("3 - Limpar tela");
            console.log("4 - Importar dados");
            console.log("5 - Sair");
            option = parseInt(prompt("Selecione uma opção: "));
        }

        switch (option) {
            case 1:
                try {
                    await mostrarDados(tableState);
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;

            // ------------------------------------------------------- //

            case 2:
                try {
                    await PesquisarDados(tableState);
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
                    await importarDados();
                } catch (error) {
                    console.log("Erro ao importar dados: ", error);
                }
                break;

            // ------------------------------------------------------- //

            case 5:
                console.log("Saindo...");
                // await sequelize.close();  Algo ainda continua rodando após executar esta linha
                break;

            // ------------------------------------------------------- //

            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

main();

async function teste() {
    const AllTables = await sequelize.getQueryInterface().showAllTables();
    console.log(AllTables);
}
//teste();

