import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  name: 'G2 History',
  slug: 'G2History',
  version: '1.0.0',
  backgroundColor: '#111111',
  newArchEnabled: true,
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.omega9937.G2History',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.omega9937.G2History',
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    'expo-font',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#111111',
        image: './assets/images/splash.png',
        resizeMode: 'contain',
        dark: {
          image: './assets/images/splash.png',
          backgroundColor: '#111111',
        },
      },
    ],
    'expo-web-browser',
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: '3eeb805e-f435-46b2-9462-fba70b3cb455',
    },
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
  },
});
