import cycleImage from '../images/cycle.png';

const Home = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-box">
          EMERALD
          <span style={{ fontSize: '1rem', verticalAlign: 'top' }}>©</span>
        </div>
      </div>
      <div className="container">
        <h2 className="section-title">
          <span className="text-highlight-red">바이러스</span>의 종점, 변형하는
          보안의 시작
        </h2>

        <div className="dashed-separator"></div>

        <div className="home-split">
          <div className="home-text">
            <p style={{ marginBottom: '1.5rem' }}>
              우리의 프로그램 &lt;OZ&gt;는 각종 바이러스에 대응하여 다양한 킬러
              프로그램으로 적응, 변형하여{' '}
              <span className="text-highlight-red">바이러스</span>를 원천
              차단하는 프로그램입니다.
            </p>
            <p>
              OZ의 등장 이후로 전 세계의 컴퓨터 바이러스는 88% 사장되었으며 남은
              12%도 조만간 OZ의 손아귀 안에 들어가게 됩니다.
            </p>
          </div>
          <div className="home-visual">
            <img
              src={cycleImage}
              alt="Cycle"
              style={{ width: '250px', height: 'auto' }}
            />
          </div>
        </div>

        <div className="dashed-separator"></div>

        <h2 className="section-title">OZ만이 할 수 있는 완벽의 가이드라인</h2>
        <div style={{ marginTop: '20px', fontSize: '1.05rem' }}>
          <p>
            인간의 장점을 극대화하고 인간의 단점을 완벽히 삭제하는 완벽한 재조정
            시스템의 탄생, 우리는 인류를 초인류로 만들 준비가 다 되었습니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
