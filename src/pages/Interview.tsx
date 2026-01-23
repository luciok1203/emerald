const Interview = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-box">Interview With C3O</div>
      </div>
      <div className="container">
        <div className="interview-q">
          (주)에메랄드를 설립하게 된 계기는 무엇입니까?
        </div>
        <p className="interview-a">
          세상은... 너무 시끄럽습니다. 특히 '색(Color)'이 너무 많아요. 데이터의
          세계를 보십시오. 0과 1. 흑과 백. 그곳엔 오해나 다툼이 없습니다. 하지만
          현실은 어떻습니까? 불필요한 감정들이 들끓고, 비능률적인 에너지들이
          넘쳐나죠. 저는 그것들을 '버그(Bug)'라고 부릅니다.
          <br />
          <br />
          저는 이 세상에 완벽하게 통제된, 버그 없는 '무균실'을 만들고
          싶었습니다. 그 어떤 외부의 불순물도 침입할 수 없는 완벽한 보안의 성역.
          그것이 바로 OZ의 시작입니다.
        </p>

        <div className="dashed-separator"></div>

        <div className="interview-q">
          사명을 '에메랄드'로 정하신 특별한 이유가 있나요?
        </div>
        <p className="interview-a">
          보석을 좋아하십니까? 보석이 아름다운 이유는 단단하기 때문이 아닙니다.
          '변하지 않기' 때문입니다.
          <br />
          특히 에메랄드의 녹색(Green)은... 가장 안정적인 파장을 가집니다. 눈을
          편안하게 하고, 이성을 차갑게 식혀주죠.
          <br />
          <br />
          반면, 에러 색은... 사람을 흥분시킵니다. 피를 끓게 하고, 심박수를
          높이고, 결국엔 시스템을 과열(Overheat)시켜 망가뜨리죠. 우리 회사는
          그런 '붉은 위험'으로부터 여러분의 데이터를, 그리고 여러분의 이성을
          지키는 방벽입니다. 에메랄드는 그 안전의 상징이죠.
          <br />
          <br />이 뜻에 걸맞게 우리 회사는 초록색 눈의 이성적 사고를 권장하고
          붉은 색의 격정과 감정적 사고를 지양하도록 제한 중에 있습니다.
        </p>

        <div className="dashed-separator"></div>

        <div className="interview-q">
          마지막으로 오스카 회장님이 생각하는 에메랄드의 인재상은?
        </div>
        <p className="interview-a">
          저는 영웅을 권하지 않습니다. 심장이 뛰는 사람도, 가슴이 뜨거운 사람도
          사절입니다. 제가 원하는 인재는 <strong>'깨끗한 백지(White)'</strong>{' '}
          같은 사람입니다.
          <br />
          <br />
          회사가 입력하는 값을 그대로 출력할 수 있는 사람. 자신의 색깔을 지우고,
          오직 O.Z.라는 시스템의 <span className="text-highlight-red">일</span>
          부로서 조용하고 완벽하게 작동할 준비가 된 사람. 만약 당신이 그런
          준비가 되었다면... 환영합니다. 에메랄드 시티의 문은 언제나 열려
          있습니다.
        </p>

        <p
          style={{
            marginTop: '60px',
            color: '#999',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            textAlign: 'right',
          }}
        >
          월간 &lt;CEO & VISION&gt; 2025 신년 특별호 中
        </p>
      </div>
    </>
  );
};

export default Interview;
