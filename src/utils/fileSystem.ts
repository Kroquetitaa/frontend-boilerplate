import fs from 'fs';
import path from 'path';

export const checkDirectoryExists = (projectPath: string): boolean => {
  return fs.existsSync(projectPath);
};

export const getProjectPath = (projectName: string): string => {
  return path.join(process.cwd(), projectName);
};

export const createDirectory = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

export const copyFile = (source: string, destination: string): void => {
  fs.copyFileSync(source, destination);
};

export const writeFile = (filePath: string, content: string): void => {
  fs.writeFileSync(filePath, content, 'utf-8');
};

export const readFile = (filePath: string): string => {
  return fs.readFileSync(filePath, 'utf-8');
};