const prompt = require('prompt-sync')({ sigint: true });
const list = require('./utils/listFunctions');
const insert = require('./utils/insertFunctions');

// ---------------------------------------------- //

async function main() {
    let option = 0;

    while (option != 8) {
        option = 0;
        while(option < 1 || option > 8) {
            console.log('1 - Mostrar clientes:');
            console.log('2 - Mostrar endereços:');
            console.log('3 - Mostrar pagamentos:');
            console.log('4 - Inserir cliente:');
            console.log('5 - Inserir endereço:');
            console.log('6 - Inserir pagamento:');
            console.log('7 - Limpar tela');
            console.log('8 - Sair');
            option = parseInt(prompt('Selecione uma opção: '));
        }
        
        switch (option) {
            case 1:
                try {
                    await list.Customers();    
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;
    
            // ------------------------------------------------------- //
    
            case 2:
                try {
                    await list.Addresses();
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;
    
            // ------------------------------------------------------- //
            
            case 3:
                try {
                    await list.Payments();
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;
    
            // ------------------------------------------------------- //
            
            case 4:
                try {
                    let store_id = parseInt(prompt("Digite o ID da loja: "));
                    let first_name = prompt("Digite o primeiro nome: ");
                    let last_name = prompt("Digite o sobrenome: ");
                    let email = prompt("Digite seu email: ");
                    let address_id  = parseInt(prompt("Digite o ID do endereço: "));
                    await insert.customer(store_id, first_name, last_name, email, address_id);
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;
    
            // ------------------------------------------------------- //
            
            case 5:
                try {
                    let address = prompt("Digite o endereço: ");
                    let address2 = prompt("Digite o segundo endereço: ");
                    let district = prompt("Digite o distrito:");
                    let city_id = parseInt(prompt("Digite o ID da cidade: "));
                    let postal_code = prompt("Digito código postal: ");
                    let phone = prompt("Digite o telefone: ");
                    let location = 'POINT(40.7128, -74.0060)';
                    await insert.address(address, address2, district, city_id, postal_code, phone, location);
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;
    
            // ------------------------------------------------------- //
            
            case 6:
                try {
                    let customer_id = parseInt(prompt("Insira o ID do cliente: "));
                    let staff_id = parseInt(prompt("Insira o ID do funcionário: "));
                    let rental_id = parseInt(prompt("Insira o ID do aluguel: "));
                    let amount = parseFloat(prompt("Insira o valor: "));
                    let payment_date = prompt("Insira a data de pagamento (YYYY-MM-DD HH:MM:SS): ");
                    await insert.payment(customer_id, staff_id, rental_id, amount, payment_date);
                } catch (error) {
                    console.log('Error log: ', error);
                }
                break;
    
            // ------------------------------------------------------- //

            case 7:
                console.clear();
                break;

            // ------------------------------------------------------- //

            case 8:
                console.log('Saindo...');
                break;
            
            // ------------------------------------------------------- //
            
            default:
                console.log('Default');
        }
    }
}

main();