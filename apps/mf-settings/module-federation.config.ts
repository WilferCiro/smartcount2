import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mf-settings',
  exposes: {
    './Module': 'apps/mf-settings/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
