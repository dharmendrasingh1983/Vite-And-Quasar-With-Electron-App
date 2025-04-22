import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import {fileURLToPath} from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy'
// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue(
        {
            template: {transformAssetUrls}
        }
    ),
        quasar({
            sassVariables: fileURLToPath(
                new URL('./src/quasar-variables.sass', import.meta.url)
            )
        }),
        viteStaticCopy({
              targets: [
                {
                  src: 'src/assets/icon.ico',
                  dest: 'assets' // copies to dist root
                }
              ]
            })
    ],
})
