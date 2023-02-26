import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
const path = require('path')
export default defineConfig({
    resolve:{
        alias:{
            // '@assets': path.resolve('resources/assets'),
            '@': path.resolve('resources/js'),
        },
    },
    plugins: [
        eslintPlugin(),
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
