import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'


export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/tack-blog',
  build: {
	  assetsInlineLimit: 0,
  },
  optimizeDeps: {
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
            NodeGlobalsPolyfillPlugin({
                buffer: true
            })
        ]
    }
}
});
