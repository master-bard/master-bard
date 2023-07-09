import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useTranslation } from 'react-i18next';

const Tab1: React.FC = () => {
	const { t } = useTranslation(['test']);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{t('test')}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 1 page" />
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
