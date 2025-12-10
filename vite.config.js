import {defineConfig} from 'vite';

export default defineConfig({
    base: '/vite-website/',
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['import'],
                quietDeps: true,
            },
        },
    },
});
