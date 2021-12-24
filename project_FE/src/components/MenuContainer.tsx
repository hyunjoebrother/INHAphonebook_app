import "./MenuContainer.css";

// interface : 마치 class. 어떠한 객체가 이런걸 가진다고 선언
interface MenuContainerProps {
  menuName: string;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ menuName }) => {
  return (
    <div className="menu-container">
      <strong>{menuName}</strong>
    </div>
  );
};

export default MenuContainer;
