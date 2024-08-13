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
    await queryInterface.bulkInsert('propietarios', [
      {
        nombre: 'Juan',
        apellido: 'Perez',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maria',
        apellido: 'Lopez',
        estado: 'inactivo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Pedro',
        apellido: 'Gonzalez',
        estado: 'activo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ana',
        apellido: 'Martinez',
        estado: 'inactivo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Luis',
        apellido: 'Rodriguez',
        estado: 'activo',
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
    await queryInterface.bulkDelete('propietarios', null, {});
  }
};
