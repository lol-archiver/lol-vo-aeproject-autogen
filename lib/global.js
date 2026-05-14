import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';



process.title = 'lol-vo-aeproject-autogen';
// eslint-disable-next-line no-debugger
process.on('unhandledRejection', (error, promise) => { (console ?? {})?.error(error); debugger; });


export const dirProject = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const dirConfig = resolve(dirProject, 'config');
export const dirConfigDefault = resolve(dirProject, 'config-default');
export const dirResources = resolve(dirProject, 'reso');
export const dirDistExtend = resolve(dirProject, 'dist-extend');
