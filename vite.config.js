import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   //serve per far funzionare le variabili e i mixins di sass in ogni componente Vue
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: '@import "./src/style/global.scss";',
         },
      },
   },
});
