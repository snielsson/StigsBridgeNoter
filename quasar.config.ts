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
      config: {
        dark: true,
        brand: {
          primary: '#c8a96e',
          secondary: '#7eb8a0',
          accent: '#c8a96e',
          dark: '#0e0e12',
          'dark-page': '#0e0e12',
          positive: '#7eb8a0',
          negative: '#e05c5c',
          info: '#6bb8e8',
          warning: '#d4a843',
        },
      },
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
        json.background_color = '#0e0e12';
        json.theme_color = '#0e0e12';
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
