import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { logger } from './logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration templates
const TEMPLATES_PATH = path.join(__dirname, '../../templates/configs');

/**
 * Setup GitHub Actions and PR template
 */
const setupGithubActions = (projectPath: string): void => {
  const githubDir = path.join(projectPath, '.github');
  const workflowsDir = path.join(githubDir, 'workflows');
  
  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir, { recursive: true });
  }

  // Copy workflow
  const workflowSource = path.join(TEMPLATES_PATH, 'github-workflow.yml');
  const workflowDest = path.join(workflowsDir, 'ci.yml');

  if (fs.existsSync(workflowSource)) {
    fs.copyFileSync(workflowSource, workflowDest);
    logger.info('  ✓ GitHub Actions workflow copied');
  } else {
    logger.warn(`  ⚠ Not found: ${workflowSource}`);
  }

  // Copy PR template
  const prTemplateSource = path.join(TEMPLATES_PATH, 'pull_request_template.md');
  const prTemplateDest = path.join(githubDir, 'pull_request_template.md');

  if (fs.existsSync(prTemplateSource)) {
    fs.copyFileSync(prTemplateSource, prTemplateDest);
    logger.info('  ✓ PR template copied');
  } else {
    logger.warn(`  ⚠ Not found: ${prTemplateSource}`);
  }
};

/**
 * Setup Biome
 */
const setupBiome = (projectPath: string): void => {
  const biomeSource = path.join(TEMPLATES_PATH, 'biome.json');
  const biomeDest = path.join(projectPath, 'biome.json');

  if (fs.existsSync(biomeSource)) {
    fs.copyFileSync(biomeSource, biomeDest);
    logger.info('  ✓ Biome configured');
  } else {
    logger.warn(`  ⚠ Not found: ${biomeSource}`);
  }
};

/**
 * Setup Lighthouse CI
 */
const setupLighthouse = (projectPath: string): void => {
  const lighthouseSource = path.join(TEMPLATES_PATH, 'lighthouserc.js');
  const lighthouseDest = path.join(projectPath, 'lighthouserc.js');

  if (fs.existsSync(lighthouseSource)) {
    fs.copyFileSync(lighthouseSource, lighthouseDest);
    logger.info('  ✓ Lighthouse CI configured');
  } else {
    logger.warn(`  ⚠ Not found: ${lighthouseSource}`);
  }
};

/**
 * Setup CHANGELOG.md
 */
const setupChangelog = (projectPath: string): void => {
  const changelogSource = path.join(TEMPLATES_PATH, 'CHANGELOG.md');
  const changelogDest = path.join(projectPath, 'CHANGELOG.md');

  if (fs.existsSync(changelogSource)) {
    fs.copyFileSync(changelogSource, changelogDest);
    logger.info('  ✓ CHANGELOG.md created');
  } else {
    logger.warn(`  ⚠ Not found: ${changelogSource}`);
  }
};

/**
 * Setup Husky and lint-staged
 */
const setupHusky = (projectPath: string): void => {
  // Copy lint-staged configuration
  const lintStagedSource = path.join(TEMPLATES_PATH, 'lint-staged.config.json');
  const lintStagedDest = path.join(projectPath, 'lint-staged.config.json');

  if (fs.existsSync(lintStagedSource)) {
    fs.copyFileSync(lintStagedSource, lintStagedDest);
    logger.info('  ✓ lint-staged configured');
  } else {
    logger.warn(`  ⚠ Not found: ${lintStagedSource}`);
  }

  // Copy commitlint configuration
  const commitlintSource = path.join(TEMPLATES_PATH, 'commitlint.config.js');
  const commitlintDest = path.join(projectPath, 'commitlint.config.js');

  if (fs.existsSync(commitlintSource)) {
    fs.copyFileSync(commitlintSource, commitlintDest);
    logger.info('  ✓ commitlint configured');
  } else {
    logger.warn(`  ⚠ Not found: ${commitlintSource}`);
  }

  // Create .husky directory
  const huskyDir = path.join(projectPath, '.husky');
  if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, { recursive: true });
  }

  // Copy hooks
  const preCommitSource = path.join(TEMPLATES_PATH, 'pre-commit');
  const preCommitDest = path.join(huskyDir, 'pre-commit');

  const commitMsgSource = path.join(TEMPLATES_PATH, 'commit-msg');
  const commitMsgDest = path.join(huskyDir, 'commit-msg');

  if (fs.existsSync(preCommitSource)) {
    fs.copyFileSync(preCommitSource, preCommitDest);
    fs.chmodSync(preCommitDest, '755');
    logger.info('  ✓ pre-commit hook configured');
  } else {
    logger.warn(`  ⚠ Not found: ${preCommitSource}`);
  }

  if (fs.existsSync(commitMsgSource)) {
    fs.copyFileSync(commitMsgSource, commitMsgDest);
    fs.chmodSync(commitMsgDest, '755');
    logger.info('  ✓ commit-msg hook configured');
  } else {
    logger.warn(`  ⚠ Not found: ${commitMsgSource}`);
  }
};

/**
 * Update package.json with scripts and dependencies
 */
const updatePackageJson = (projectPath: string): void => {
  const packageJsonPath = path.join(projectPath, 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    logger.warn('  ⚠ package.json not found');
    return;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  // Add scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    'lint': 'biome check .',
    'lint:fix': 'biome check --write .',
    'format': 'biome format --write .',
    'format:check': 'biome format .',
    'prepare': 'husky',
    'lighthouse': 'lhci autorun',
  };

  // Add devDependencies
  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    '@biomejs/biome': '^1.9.4',
    'husky': '^9.0.11',
    'lint-staged': '^15.2.0',
    '@commitlint/cli': '^18.6.0',
    '@commitlint/config-conventional': '^18.6.0',
    '@lhci/cli': '^0.13.0',
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
  logger.info('  ✓ package.json updated');
};

/**
 * Install development dependencies
 */
const installDevDependencies = (projectPath: string): void => {
  try {
    logger.cyan('\n  📦 Installing development dependencies...\n');
    execSync('npm install', {
      cwd: projectPath,
      stdio: 'inherit',
    });
    logger.info('  ✓ Dependencies installed');
  } catch (error) {
    logger.warn('  ⚠ Error installing dependencies. Run `npm install` manually.');
  }
};

/**
 * Initialize Husky
 */
const initHusky = (projectPath: string): void => {
  try {
    execSync('npx husky init', {
      cwd: projectPath,
      stdio: 'pipe',
    });
    logger.info('  ✓ Husky initialized');
  } catch (error) {
    logger.warn('  ⚠ Error initializing Husky');
  }
};

/**
 * Setup all tools
 */
export const setupConfigurations = async (projectPath: string): Promise<void> => {
  try {
    logger.info(`\n  📍 Looking for templates in: ${TEMPLATES_PATH}\n`);
    
    // Verify that templates folder exists
    if (!fs.existsSync(TEMPLATES_PATH)) {
      logger.error(`  ❌ Templates folder not found: ${TEMPLATES_PATH}`);
      logger.warn('  ⚠ Skipping tools configuration');
      return;
    }

    // Setup files
    setupGithubActions(projectPath);
    setupBiome(projectPath);
    setupLighthouse(projectPath);
    setupChangelog(projectPath);
    setupHusky(projectPath);
    updatePackageJson(projectPath);

    // Install dependencies
    installDevDependencies(projectPath);

    // Initialize Husky (after installing)
    initHusky(projectPath);

  } catch (error) {
    logger.error('  ❌ Error configuring tools');
    console.error(error);
  }
};