import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import MenuContainer from "../components/MenuContainer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonTitle size="small">인하대학교 전화번호부</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home1</IonTitle>
            <IonTitle size="small">인하대학교 전화번호부1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Home page" />
        <MenuContainer menuName="총학생회" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
