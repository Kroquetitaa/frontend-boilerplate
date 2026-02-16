#!/usr/bin/env node
import { Command } from 'commander';
import { createProject } from '@commands/create.js';

const program = new Command();

program
  .name('frontend-boilerplate')
  .description('CLI to create frontend projects with modern architecture')
  .version('1.0.0');

program
  .argument('<project-name>', 'project name')
  .option('-t, --template <template>', 'template to use (react-ts, react, vue, etc.)', 'react-ts')
  .option('-pm, --package-manager <pm>', 'package manager (npm, yarn, pnpm)', 'npm')
  .option('--skip-install', 'do not install dependencies automatically', false)
  .action(async (projectName: string, options) => {
    await createProject(projectName, options);
  });

program.parse(process.argv);