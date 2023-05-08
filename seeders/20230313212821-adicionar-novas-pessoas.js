'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      { nome: 'Lazaro', sobrenome:'indefinido', idade:'32', altura:'170'},
      { nome: 'Madalena', sobrenome:'indefinido', idade:'26', altura:'186'},
      { nome: 'Braulio', sobrenome:'Leopoldo', idade:'24', altura:'184'},
      { nome: 'Tiao', sobrenome:'da Silva Cunha', idade:'23', altura:'190'},
      { nome: 'Filipe', sobrenome:'Pereira Lima', idade:'17', altura:'187'},
      { nome: 'Moonie', sobrenome:'Oliveira', idade:'16', altura:'176'},
      { nome: 'José', sobrenome:'Eduardo', idade:'16', altura:'171'},
      { nome: 'Victor', sobrenome:'Dantas', idade:'17', altura:'180'},
      { nome: 'Caio', sobrenome:'Hygino', idade:'16', altura:'181'}

      ], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('pessoas', null, {});
    
  }
};
