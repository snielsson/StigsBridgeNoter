import { configure } from 'quasar/wrappers';

export default configure(() => {
  return {
    boot: [],

    css: ['app.scss'],

    extras: [
      'material-icons',
    ],

    build: {
      target: { browser: ['es2022', 'firefox115', 'chrome115', 'safari14'] },
      vueRouterMode: 'hash',
      publicPath: '/StigsBridgeNoter/',
      distDir: 'docs',
      vitePlugins: [],
    },

    devServer: {
      open: true,
    },

    framework: {
      plugins: ['Dark', 'LocalStorage', 'Notify'],
    },

    pwa: {
      workboxMode: 'InjectManifest',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      extendManifestJson(json) {
        json.name = 'Bridge Lærebog';
        json.short_name = 'Bridge';
        json.description = 'Interaktiv bridge lærebog — Skolebridge for Voksne, Ny Nordisk Standard';
        json.display = 'standalone';
        json.orientation = 'any';
        json.background_color = '#ffffff';
        json.theme_color = '#1976d2';
        json.lang = 'da';
        json.categories = ['education', 'games'];
      },
    },

    htmlVariables: {
      productName: 'Bridge Lærebog',
      productDescription: 'Interaktiv bridge lærebog — Skolebridge for Voksne',
    },
  };
});
