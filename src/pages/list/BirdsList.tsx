import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonThumbnail, IonImg } from '@ionic/react';

interface Bird {
    gen: string;
    sp: string;
    loc: string;
    rec: string;
    osci: any;
}

const BirdsList: React.FC = () => {
    const [birds, setBirds] = useState<Bird[]>([]);

    useEffect(() => {
    fetch('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala')
        .then(response => response.json())
        .then(data => setBirds(data.recordings))
        .catch(error => console.error('Error al cargar los datos:', error));
    }, []);

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Aves de Guatemala</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent>
            <IonList>
                {birds.map((bird, index) => (
                <IonItem key={index}>
                    <IonThumbnail slot="start">
                        <IonImg src={bird.osci.small} alt={`Ave ${bird.gen}`} />
                    </IonThumbnail>
                    <IonLabel>
                        <h2>Familia: {bird.gen}</h2>
                        <p>Nombre: {bird.sp}</p>
                        <p>Ubicación: {bird.loc}</p>
                        <p>Descubridor: {bird.rec}</p>
                    </IonLabel>
                </IonItem>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
    );
};

export default BirdsList;