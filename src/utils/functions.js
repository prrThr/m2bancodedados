const People = require('../../models/People');
const fs = require('fs');
const csv = require('csv-parser');
const filePath = 'src/utils/people-100000.csv';

async function importarDados() {
  const readline = require('readline');
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Detecta automaticamente a quebra de linha (CR+LF ou LF)
  });

  let primeiraLinha = true;

  rl.on('line', async (line) => {
    if (primeiraLinha) {
      primeiraLinha = false;
    }
    const campos = line.split(',');
    const id = campos[1];
    const nome = campos[2];
    const sobrenome = campos[4];
    const sexo = campos[5];
    const em = campos[6];
    const telefone = campos[7];
    const nascimento = campos[8];
    const profissao = campos[9];

    console.log("Profissão: ", campos[9]);
    let person = {
      userId: id,
      firstName: nome,
      lastName: sobrenome,
      sex: sexo,
      email: em,
      phone: telefone,
      dateOfBirth: nascimento,
      jobTitle: profissao
    };

    let returnedObject = await People.create(person);
    let generatedKey = returnedObject.dataValues.index;
    //console.log("Sucesso! Generated key", generatedKey);

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

async function PesquisarDados() {
}

// 'src/utils/people-100000.csv'

async function importCSV() {
  

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split('\n');

  const numLinesToProcess = 30; // Defina o número de linhas que deseja processar
  //for (const line of lines) {
  for (let i = 0; i < numLinesToProcess && i < lines.length; i++) {
  const line = lines[i];  
  
  const [
      index,
      userId,
      firstName,
      lastName,
      sex,
      email,
      phone,
      dateOfBirth,
      jobTitle,
    ] = line.split(',');

    if (index === 'Index') {
      // Esta é a linha de cabeçalho, pule-a
      continue;
    }

    await People.create({
      userId,
      firstName,
      lastName,
      sex,
      email,
      phone,
      dateOfBirth,
      jobTitle,
    });

    console.log(`Dados importados para ${firstName} ${lastName}`);
  }

  console.log('Importação concluída.');
}

module.exports = {
  importarDados,
  mostrarDados,
  PesquisarDados,
  importCSV
}