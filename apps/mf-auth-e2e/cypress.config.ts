import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mf-auth:serve:development',
        production: 'nx run mf-auth:serve:production',
      },
      ciWebServerCommand: 'nx run mf-auth:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
