// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                elemi: resolve(__dirname, 'ElemiModellezes.html'),
                fenyanyagarnyek: resolve(__dirname, 'FenyAnyagArnyek.html'),
                geometria: resolve(__dirname, 'geometriaiTransform.html'),
                blender: resolve(__dirname, 'Blender.html'),
                beadando: resolve(__dirname, 'Beadando.html'),
            },
        },
    },
})