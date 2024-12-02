import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const handleLoad = () => {
    history.push('/birds');
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tarea #5 - 22011436</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <h1>Inicio</h1>
        <p>22011436</p>
        <IonButton expand='block' onClick={handleLoad}>
          Cargar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
