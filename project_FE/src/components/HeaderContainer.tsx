import "./HeaderContainer.css";

const HeaderContainer: React.FC = () => {
  return (
    <div className="header-container">
      <div>
        <strong>인하대학교 전화번호부</strong>
        <div className="search-container">
          <input type="text" placeholder="연락처가 궁금한 곳을 입력하세요!" />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
