'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudantes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estudantes.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  
    nome: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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

   // email:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Estudantes',
  });
  return Estudantes;
};