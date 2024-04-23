'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estudantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      nome: {
        type: Sequelize.STRING,
         allowNull: false,
         validate:{
          // nao permite campo vazio
          notEmpty:{
            msg:"Esse campo não pode ser vazio"
          },
          //quantidade de caracteres
          // len:{
          //   args:[4,20],
          //   msg:"Esse campo deve ter entre 4 e 20 caracteres"
          // }
         }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
        
          // nao permite campo vazio
          // notEmpty:{
          //   msg:"Esse campo não pode ser vazio"
          // },
          isEmail:{
            msg:"Esse campo precisa ser um e-mail"
           }
        },
        unique:true,
      },
      createdAt: {
               allowNull: false,
                type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Estudantes');
  }
};