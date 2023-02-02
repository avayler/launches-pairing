module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: 'Create a new Atom, Molecule, or Organism component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter component name:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Please choose component type:',
        choices: ['Atom', 'Molecule', 'Organism'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{lowerCase type}}s/{{pascalCase name}}/index.tsx',
        templateFile: './.plop/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './.plop/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: './.plop/styles.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{lowerCase type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile: './.plop/documentation.hbs',
      },
    ],
  });
};