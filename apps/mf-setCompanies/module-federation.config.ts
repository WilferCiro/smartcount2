import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mf-setCompanies',
  exposes: {
    './Module': 'apps/mf-setCompanies/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
