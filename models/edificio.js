'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      edificio.belongsTo(models.propietario, {
        foreignKey: 'propietario_id',
        as: 'propietario'
      });
    }
  }
  edificio.init({
    nombre: DataTypes.STRING,
    numpisos: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    avaluo: DataTypes.STRING,
    propietario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'edificio',
    tableName: 'edificios',
  });
  return edificio;
};