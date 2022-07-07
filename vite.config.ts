import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { quasar } from '@quasar/vite-plugin'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin(),
        quasar({
            sassVariables: 'src/views/styles/_quasar-variables.scss',
        }),
        vueI18n({
            include: path.resolve(__dirname, './path/to/src/locales/**'),
        }),
    ],
})
