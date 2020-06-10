#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addUser,
  findUser,
  removeUser,
  listUsers
} = require('./app');

// User Questions
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'User Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'User Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'User Email Address'
  }
];

program 
  .version('1.0.0')
  .description('Client Management System')

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a User')
  .action(() => {
    prompt(questions).then(answers => addUser(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a User')
  .action(name => findUser(name));

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a User')
  .action(_id => removeUser(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all Users')
  .action(() => listUsers());

program.parse(process.argv);