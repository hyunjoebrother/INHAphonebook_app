import "./MenuContainer.css";

interface ContainerProps {
  menuName: string;
}

const MenuContainer: React.FC<ContainerProps> = ({ menuName }) => {
  return (
    <div className="container">
      <strong>{menuName}</strong>
      <p>대충메뉴리스트</p>
    </div>
  );
};

export default MenuContainer;
