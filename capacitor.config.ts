import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.keys.learningstylesapp',
  appName: 'KEYS',
  webDir: 'dist',
  server: {
    url: 'https://2f0e3146-6a32-44ed-bc60-b80677b19fd4.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
