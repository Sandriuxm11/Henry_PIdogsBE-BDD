const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    imagen: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false,
    },
    altura: {
      type: DataTypes.DECIMAL,
    },
    peso: {
      type: DataTypes.DECIMAL,
    },
    años_de_vida: {
      type: DataTypes.DECIMAL,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{
    timestamps: false,
  });
};
