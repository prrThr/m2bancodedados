//Criar tabela com as colunas: Index, UserId, FirstName, LastName, Sex, Email, Phone, DateBirth, Job Title





async function menu() {
  const prompt = require('prompt-sync')({ sigint: true });
  let opc = "0";
  while (opc != "3") {
    console.log("---Menu---")
    console.log("1.Mostrar todos os dados")
    console.log("2.Pesquisar dados")
    console.log("3.Sair")
    opc = prompt("Escolha uma das opcoes: ");

    switch (opc) {
      case "1":
        await mostrarDados();
        break;

      case "2":
        await PesquisarDados();
        break;

      case "3":
        console.log("saindo...")
        break;

      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        break;
    }
  }
}

testConnection();
importarDados();
menu();