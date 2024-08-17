import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mf-categories',
  exposes: {
    './Module': 'apps/mf-categories/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
