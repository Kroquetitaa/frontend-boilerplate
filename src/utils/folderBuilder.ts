import fs from 'fs';
import path from 'path';
import { logger } from './logger.js';
import { FolderStructure } from '../architectures/structures.js';

export const createFolderStructure = (
  basePath: string,
  structure: FolderStructure,
  currentPath: string = ''
): void => {
  for (const [name, subStructure] of Object.entries(structure)) {
    const folderPath = path.join(basePath, currentPath, name);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      logger.info(`  📁 Created: ${path.relative(basePath, folderPath)}`);
    }

    if (subStructure && typeof subStructure === 'object') {
      createFolderStructure(basePath, subStructure, path.join(currentPath, name));
    }
  }
};

export const createAdditionalFiles = (
  basePath: string,
  files: { [path: string]: string }
): void => {
  for (const [filePath, content] of Object.entries(files)) {
    const fullPath = path.join(basePath, filePath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, content, 'utf-8');
    logger.info(`  📄 Created: ${path.relative(basePath, fullPath)}`);
  }
};


export const createGitkeepFiles = (basePath: string): void => {
  const walkDir = (dir: string) => {
    const files = fs.readdirSync(dir);

    if (files.length === 0) {

      const gitkeepPath = path.join(dir, '.gitkeep');
      fs.writeFileSync(gitkeepPath, '', 'utf-8');
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      }
    });
  };

  walkDir(basePath);
};