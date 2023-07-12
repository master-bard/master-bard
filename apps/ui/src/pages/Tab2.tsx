import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useTranslation } from 'react-i18next';

const Tab2: React.FC = () => {
	const { t } = useTranslation(['example']);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 2</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{t('welcome')}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 2 page" />
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
