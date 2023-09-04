const { Op } = require('sequelize');
const Person = require('../../models/Person');
const prompt = require('prompt-sync')({sigint: true});

async function mostrarDados() {
  let people = await Person.findAll();
  for (const person of people) {
    try { // Preencher com todos os atributos
      console.log(`Index: ${person.index} | Name: ${person.firstName} ${person.lastName}`);
    } catch (error) {
      console.log("Error log: ", error);
    }
  };
}

async function PesquisarDados() {
  let findName = prompt("Digite o nome que deseja persquisar: ");

  let people = await Person.findAll({
    where: {
      [Op.or]: [
        { firstName: { [Op.like]: `%${findName}%` } },
        { lastName: { [Op.like]: `%${findName}` } }
      ]
    }
  });

  for (const person of people){
    try { // Preencher com todos os atributos
      console.log(`Index: ${person.index} | Name: ${person.firstName} ${person.lastName}`);
    } catch (error) {
      console.log("Error log: ", error);
    }
  }
}



async function importarDados() {
  const fs = require('fs');
  const filePath = 'resource/people-100000.csv';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split('\n');

  // Utilizando 30 linhas do csv apenas para testar o funcionamento.
  // Quando estiver tudo funcionando perfeitamente, alterar para percorrer o arquivo inteiro.
  const numLinesToProcess = 1000; // Defina o número de linhas que deseja processar
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

    await Person.create({
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