import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next.use(Backend).init({
	interpolation: { escapeValue: false },
	resources: {
		es: {
			translation: {
				hello: '¡Hola mundo!',
			},
		},
		en: {
			translation: {
				hello: 'hello world',
			},
		},
	},
	lng: 'es',
	fallbackLng: 'en',
	debug: true,
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</React.StrictMode>,
);
