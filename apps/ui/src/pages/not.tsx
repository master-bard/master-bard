import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useTranslation, Trans } from 'react-i18next';

const Test: React.FC = () => {
	const { t } = useTranslation(['hola']);
	return (
		<IonPage>
					<IonTitle>{t('welcome', { ns: 'hola' })}</IonTitle>

		</IonPage>
	);
};

export default Test;
