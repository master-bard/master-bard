import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.ionic.starter',
	appName: 'ui',
	webDir: '../../dist/apps/ui',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'https',
	},
};

export default config;
