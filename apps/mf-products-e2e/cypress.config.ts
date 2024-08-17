import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mf-products:serve:development',
        production: 'nx run mf-products:serve:production',
      },
      ciWebServerCommand: 'nx run mf-products:serve-static',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
