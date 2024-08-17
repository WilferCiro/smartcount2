import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mf-products',
  exposes: {
    './Module': 'apps/mf-products/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
