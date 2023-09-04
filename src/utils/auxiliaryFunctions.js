const sequelize = require('../../config/database');

// ------------------------------------------------------------- // 

function alignText(text, width) {
    if (text.length >= width) {
        return text.substring(0, width);
    }
    const spaces = " ".repeat(width - text.length);
    return text + spaces;
  }

// ------------------------------------------------------------- // 

async function checkTableState (table) {

    try {
      const AllTables = await sequelize.getQueryInterface().showAllTables();
  
      if (AllTables.includes(table)){
        const count = await sequelize.models[table].count();
        if (count === 0) {
          return "vazia"
        } else {
          return "preenchida"
        }
      } else {
        return "inexistente";
      }
    } catch (error) {
      console.log(`Erro ao verificar tabela ${table}: `, error);
    }
  }

// ------------------------------------------------------------- // 

function filledTable (tableState) {
    if (tableState === "inexistente") {
      console.log("Tabela inexistente. Importe os dados primeiro.")
      return false;
    } else if (tableState === "vazia") {
      console.log("Tabela vazia. Importe os dados primeiro.")
      return false;
    } else {
      return true;
    }
  }

// ------------------------------------------------------------- // 

module.exports = {
    alignText,
    checkTableState,
    filledTable
}


