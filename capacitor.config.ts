import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ivhn.calificaciones',
  appName: 'School Planner',
  webDir: 'dist/app-calificaciones-v3',
  server: {
    androidScheme: 'https'
  }
};

export default config;
