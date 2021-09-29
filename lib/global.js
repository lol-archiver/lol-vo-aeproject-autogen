import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


process.title = 'lol-vo-aeproject-autogen';
// eslint-disable-next-line no-debugger
process.on('unhandledRejection', (error, promise) => { (console ?? {}).error(error); debugger; });


export const dirLib = dirname(fileURLToPath(import.meta.url));
export const dirProject = resolve(dirLib, '..');

export const dirReso = resolve(dirProject, 'reso');
export const dirSrcExtend = resolve(dirProject, 'src-extend');