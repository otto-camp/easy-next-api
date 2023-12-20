import { lilconfigSync } from 'lilconfig';

export const config = lilconfigSync('easy-next-api.config.ts').search();
