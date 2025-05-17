import { IonButton, IonInput, IonItem, IonText } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {

  const [digite, setDigite] = useState(0);
  const [resultado, setresultado] = useState<number | null> (null);

  const CalcularArea = () => {
    
    setresultado(3.14 *  digite  * digite); 
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>curso de dispositivos Móveis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Criando aplicativo IONIC</h1>

         <IonItem>
        <IonInput onIonChange={ (e) => setDigite(parseFloat(e.detail.value! ))} label="calcular a circunferência de um circulo" placeholder="Digite o Nº"></IonInput>
        <IonText color="primary">
        <h1>O valor da areaé: {resultado}</h1>
      </IonText>
        <IonButton onClick= {CalcularArea}>Calcular</IonButton>
      </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
