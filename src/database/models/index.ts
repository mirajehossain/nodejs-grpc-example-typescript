import * as fs from 'fs';
import * as path from 'path';
import { ModelCtor } from 'sequelize/types/lib/model';
import { BaseModel } from './base';

// region exporting all models from nested folders

export { IUser, UserModel } from './User.model';
// endregion

// region loader function for all models in this folder or subfolders

/**
 * exports all Model classes of files that end with '.model.ts
 */

export const modelsLoader = () => {
  const array = getFilesRecursively(__dirname)
    .filter(fileName => fileName.endsWith('model.js'))
    .map(fileName => {
      // tslint:disable-next-line:non-literal-require
      const modelClass = require(fileName);
      const models = {};
      Object.keys(modelClass).forEach(key => {
        if (
          modelClass[key].constructor != null &&
          modelClass[key].ModelName != null
        ) {
          // @ts-ignore
          models[modelClass[key].ModelName] = modelClass[key];
        }
      });
      return models;
    })
    .reduce<{ [key: string]: any }[]>(
      (arr: any[], val: any[]) => arr.concat(val),
      [],
    );
  let obj = {};
  array.forEach(item => {
    obj = {
      ...obj,
      ...item,
    };
  });
  return obj as {
    [modelName: string]: typeof BaseModel & ModelCtor<BaseModel>;
  };
};

// region helper functions

const getAllSubFolders = (baseFolder: string, folderList: string[] = []) => {
  const folders: string[] = fs
    .readdirSync(baseFolder)
    .filter(file => fs.statSync(path.join(baseFolder, file)).isDirectory());
  folders.forEach(folder => {
    folderList.push(path.join(baseFolder, folder));
    getAllSubFolders(path.join(baseFolder, folder), folderList);
  });
  return folderList;
};
const getFilesInFolder = (rootPath: string) => {
  return fs
    .readdirSync(rootPath)
    .filter(
      filePath => !fs.statSync(path.join(rootPath, filePath)).isDirectory(),
    )
    .map(filePath => path.normalize(path.join(rootPath, filePath)));
};
const getFilesRecursively = (rootPath: string): string[] => {
  const rootFiles = getFilesInFolder(rootPath);
  const subFolders = getAllSubFolders(rootPath);
  const allFiles = subFolders.map(getFilesInFolder);
  return [].concat.apply([...rootFiles], allFiles);
};

// endregion

// endregion
