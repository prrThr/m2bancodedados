const People = require('../../models/People');

async function importarDados() {
    const fs = require('fs');
    const readline = require('readline');
    const filePath = 'people-1000000.xlsx';
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity // Detecta automaticamente a quebra de linha (CR+LF ou LF)
    });
    rl.on('line', (line) => {
        console.log('Linha:', line);
    });
    rl.on('close', () => {
        console.log('Leitura concluída.');
    });

    let person = {
        index: ,
        userId: ,
        firstName: ,
        lastName: ,
        sex: ,
        email: ,
        phone: ,
        dateOfBirth: ,
        jobTitle: };
    let returnedObject = await People.create(person);
    let generatedKey = returnedObject.dataValues.index;
    console.log("Sucesso! Generated key", generatedKey);
}

async function mostrarDados() {
    let customers = await Customer.findAll();
    for (const customer of customers) {
        const selectedStore1 = await Store.findByPk(customer.store_id, { logging: false });
        console.log()
    };
}