const { Op } = require('sequelize');
const Person = require('../../models/Person');
const prompt = require('prompt-sync')({sigint: true});
const { alignText, filledTable } = require('./auxiliaryFunctions');


async function mostrarDados(tableState) {

  if (!filledTable(tableState)) {
    return;
  }

  let people = await Person.findAll();
  people.forEach( ppl => {
    try {
      const formattedIndex = alignText(ppl.index.toString(), 3);
      const formattedUserID = alignText(ppl.userId.toString(), 17);
      const formattedFirstName = alignText(ppl.firstName.toString(), 11);
      const formattedLastName = alignText(ppl.lastName.toString(), 11);
      const formattedSex = alignText(ppl.sex.toString(), 7);
      const formattedEmail = alignText(ppl.email.toString(), 34);
      const formattedPhone = alignText(ppl.phone.toString(), 24);
      const formattedDateOfBirth = alignText(ppl.dateOfBirth.toString(), 12);
      
      console.log(`${formattedIndex} | ${formattedUserID} | ${formattedFirstName} | ${formattedLastName} | ${formattedSex} | ${formattedEmail} | ${formattedPhone} | ${formattedDateOfBirth} | ${ppl.jobTitle}`)  
    } catch (error) {
      console.log("Error log: ", error);
    }
  });
  
}

async function PesquisarDados(tableState) {

  if (!filledTable(tableState)) {
    return;
  }
  
  let findName = prompt("Digite o nome que deseja persquisar: ");

  let people = await Person.findAll({
    where: {
      [Op.or]: [
        { firstName: { [Op.like]: `%${findName}%` } },
        { lastName: { [Op.like]: `%${findName}` } }
      ]
    }
  });

  people.forEach( ppl => {
    try {
      const formattedIndex = alignText(ppl.index.toString(), 3);
      const formattedUserID = alignText(ppl.userId.toString(), 17);
      const formattedFirstName = alignText(ppl.firstName.toString(), 11);
      const formattedLastName = alignText(ppl.lastName.toString(), 11);
      const formattedSex = alignText(ppl.sex.toString(), 7);
      const formattedEmail = alignText(ppl.email.toString(), 34);
      const formattedPhone = alignText(ppl.phone.toString(), 24);
      const formattedDateOfBirth = alignText(ppl.dateOfBirth.toString(), 12);
      
      console.log(`${formattedIndex} | ${formattedUserID} | ${formattedFirstName} | ${formattedLastName} | ${formattedSex} | ${formattedEmail} | ${formattedPhone} | ${formattedDateOfBirth} | ${ppl.jobTitle}`)  
    } catch (error) {
      console.log("Error log: ", error);
    }
  });
}



async function importarDados() {

  try {
    await Person.sync();
    console.log("Tabela sincronizada com sucesso.");
  } catch (error) {
    console.log("Erro ao sincronizar tabela: ", error);
  }

  const fs = require('fs');
  const filePath = 'resource/people-100000.csv';
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const lines = fileContents.split('\n');

  const numLinesToProcess = 1000; // Defina o número de linhas que deseja processar
  //for (const line of lines) {  // Remover "//" desta linha caso deseje percorrer o arquivo inteiro
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
  PesquisarDados
}