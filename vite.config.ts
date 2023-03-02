import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'],
            // 指定引入根目录下的 requests，config，utils 目录内的所有函数
            dirs: ['./src/requests/**', './src/config/**', './src/utils/**'],
            // 指定生成的 d.ts 文件位置与文件名
            dts: './src/auto-imports.d.ts',
            // 配置开启 eslint
            eslintrc: {
                enabled: true,
            },
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            // 指定组件位置，默认是src/components
            dirs: ['src/components'],
            // 配置文件生成位置
            dts: 'src/components.d.ts',
            resolvers: [NaiveUiResolver(), ElementPlusResolver()],
        }),
    ],
    base: '/CRM-Vue/',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/assets/scss/_color.scss";',
            },
        },
    },
    server: {
        host: 'localhost',
        port: 3000,
        // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
        strictPort: false,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
