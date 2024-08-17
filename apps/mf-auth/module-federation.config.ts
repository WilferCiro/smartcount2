import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mf-auth',
  exposes: {
    './Module': 'apps/mf-auth/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
