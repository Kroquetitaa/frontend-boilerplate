import { execSync } from 'child_process';
import { logger } from './logger.js';

export const installDependencies = (projectPath: string, packageManager: 'npm' | 'yarn' | 'pnpm' = 'npm'): void => {
  try {
    logger.cyan('\n📦 Installing dependencies...\n');
    execSync(`cd ${projectPath} && ${packageManager} install`, { stdio: 'inherit' });
    logger.success('\n✅ Dependencies installed successfully!\n');
  } catch (error) {
    logger.error('❌ Error installing dependencies');
    throw error;
  }
};

export const addDependency = (
  projectPath: string,
  dependency: string,
  isDev: boolean = false,
  packageManager: 'npm' | 'yarn' | 'pnpm' = 'npm'
): void => {
  try {
    const devFlag = isDev ? (packageManager === 'npm' ? '--save-dev' : '-D') : '';
    execSync(`cd ${projectPath} && ${packageManager} add ${dependency} ${devFlag}`, { stdio: 'inherit' });
  } catch (error) {
    logger.error(`❌ Error installing ${dependency}`);
    throw error;
  }
};