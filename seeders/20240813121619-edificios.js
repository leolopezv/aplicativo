'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('edificios', [
      {
        nombre: 'Edificio 1',
        numpisos: 5,
        direccion: 'Calle 1',
        avaluo: '1000000',
        propietario_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Edificio 2',
        numpisos: 10,
        direccion: 'Calle 2',
        avaluo: '2000000',
        propietario_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Edificio 3',
        numpisos: 15,
        direccion: 'Calle 3',
        avaluo: '3000000',
        propietario_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Edificio 4',
        numpisos: 20,
        direccion: 'Calle 4',
        avaluo: '4000000',
        propietario_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Edificio 5',
        numpisos: 25,
        direccion: 'Calle 5',
        avaluo: '5000000',
        propietario_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('edificios', null, {});
  }
};
