import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>인하대학교 전화번호부</IonTitle>
          <IonTitle size="small">연락처가 궁금한 곳을 입력하세요!</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Header;
