import { execSync } from 'child_process';
import { select } from '@inquirer/prompts';
import { logger } from '../utils/logger.js';
import { checkDirectoryExists, getProjectPath, writeFile } from '../utils/fileSystem.js';
import {
  createFolderStructure,
  createAdditionalFiles,
  createGitkeepFiles,
} from '../utils/folderBuilder.js';
import { architectures } from '../architectures/structures.js';
import { setupConfigurations } from '../utils/configSetup.js';

export interface CreateProjectOptions {
  template?: string;
  packageManager?: 'npm' | 'yarn' | 'pnpm';
  skipInstall?: boolean;
  architecture?: string;
}

export const createProject = async (
  projectName: string,
  options: CreateProjectOptions = {}
): Promise<void> => {
  try {
    const { template = 'react-ts', packageManager = 'npm', skipInstall = false } = options;

    logger.info(`\n🚀 Creating project: ${projectName}\n`);

    const projectPath = getProjectPath(projectName);

    if (checkDirectoryExists(projectPath)) {
      logger.error(`❌ Directory ${projectName} already exists.`);
      process.exit(1);
    }

    logger.cyan('📦 Creating base project with Vite...\n');
    execSync(`npm create vite@latest ${projectName} -- --template ${template}`, {
      stdio: 'inherit',
    });

    logger.success('\n✅ Base project created!\n');

    logger.cyan('🏗️  Select folder architecture:\n');

    const architectureChoices = Object.entries(architectures).map(([key, arch]) => ({
      name: arch.name,
      value: key,
      description: arch.description,
    }));

    const selectedArchitecture = await select({
      message: 'Which architecture do you want to use?',
      choices: architectureChoices,
    });

    const architecture = architectures[selectedArchitecture];

    logger.cyan(`\n⚙️  Applying architecture: ${architecture.name}...\n`);

    createFolderStructure(projectPath, architecture.folders);

    if (architecture.files) {
      createAdditionalFiles(projectPath, architecture.files);
    }

    createGitkeepFiles(projectPath);

    logger.success('\n✅ Architecture applied successfully!\n');

    logger.cyan('🔧 Configuring development tools...\n');
    await setupConfigurations(projectPath);

    logger.success('\n✅ Configurations applied!\n');

    logger.cyan('📋 Next steps:\n');
    logger.white(`  cd ${projectName}`);

    if (!skipInstall) {
      logger.white(`  ${packageManager} install`);
    }

    logger.white(`  ${packageManager} run dev\n`);

    logger.info(`💡 Tip: Check the README.md files in each folder for more info.\n`);
  } catch (error) {
    logger.error('❌ Error creating project');
    console.error(error);
    process.exit(1);
  }
};