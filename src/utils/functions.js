const Person = require('../../models/Person');
const fs = require('fs');
const filePath = 'resource/people-100000.csv';


async function mostrarDados() {
  let people = await Person.findAll();
  for (const person of people) {
    const selectedStore1 = await Store.findByPk(person.store_id, { logging: false });
    console.log()
  };
}

async function PesquisarDados() {
}



async function importarDados() {
  

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split('\n');

  // Utilizando 30 linhas do csv apenas para testar o funcionamento.
  // Quando estiver tudo funcionando perfeitamente, alterar para percorrer o arquivo inteiro.
  const numLinesToProcess = 30; // Defina o número de linhas que deseja processar
  //for (const line of lines) {
  for (let i = 1; i < numLinesToProcess && i < lines.length; i++) {
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

    if (index === 'Index') { // Talvez dê para remover poís a iteração já começa do 1 (segunda linha)
      // Esta é a linha de cabeçalho, pule-a
      continue;
    }

    const cleanedJobTitle = jobTitle.replace(/"/g, '');

    await People.create({
      userId,
      firstName,
      lastName,
      sex,
      email,
      phone,
      dateOfBirth,
      jobTitle: cleanedJobTitle,
    });

    console.log(`Dados importados para ${firstName} ${lastName}`);
  }
  
  console.log('Importação concluída.');
}

module.exports = {
  importarDados,
  mostrarDados,
  PesquisarDados,
}