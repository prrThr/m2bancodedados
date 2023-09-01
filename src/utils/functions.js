const People = require('../../models/People');

async function importarDados() {
    const fs = require('fs');
    const readline = require('readline');
    const filePath = 'people-100000.xlsx';
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Detecta automaticamente a quebra de linha (CR+LF ou LF)
    });
    let primeiraLinha = true;
    rl.on('line', async (line) => {
      if (primeiraLinha){
        primeiraLinha = false;
      }
      const campos = line.split(',');
      const id = campos[0];
      const nome = campos[1];
      console.log(campos[1]);
      const sobrenome = campos[2];
      const sexo = campos[3];
      const em = campos[4];
      const telefone = campos[5];
      const nascimento = campos[6];
      const profissao = campos[7];
  
      let person = {
        userId: id,
        firstName: nome,
        lastName: sobrenome,
        sex: sexo,
        email: em,
        phone: telefone,
        dateOfBirth: nascimento,
        jobTitle: profissao};
        
        let returnedObject = await Table.create(person);
        let generatedKey = returnedObject.dataValues.index;
        console.log("Sucesso! Generated key", generatedKey);
  
      console.log('Linha:', line);
    });
  
    rl.on('close', () => {
    console.log('Dados importados com sucesso!.');
    });
  }

async function mostrarDados() {
    let customers = await Customer.findAll();
    for (const customer of customers) {
        const selectedStore1 = await Store.findByPk(customer.store_id, { logging: false });
        console.log()
    };
}

async function PesquisarDados(){
}

module.exports = {
    importarDados,
    mostrarDados,
    PesquisarDados
}