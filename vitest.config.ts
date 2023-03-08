import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/setupTest.ts'],
        coverage:{
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
        }
      },
});