import graphImg from '../images/graph.png';
import styles from './History.module.css';

interface HistoryItemProps {
  month: string;
  content: (string | React.ReactNode)[];
}

const HistoryItem = ({ month, content }: HistoryItemProps) => (
  <div className={styles.entry}>
    <span className={styles.month}>{month}</span>
    <ul className={styles.list}>
      {content.map((text, idx) => (
        <li key={idx}>{text}</li>
      ))}
    </ul>
  </div>
);

const History = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-box">H1story</div>
      </div>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.historyContent}>
            {/* 2015 */}
            <h3 className={styles.yearTitle}>2015, 완벽의 첫걸음</h3>
            <HistoryItem
              month="3월"
              content={[
                '오스카(Oscar), "에메랄드 시큐리티" 설립',
                '초기 자본금: 5천만 원 (부모님 빌린 돈)',
                '직원 수: 3명 (오스카 포함)',
                '사업 목표: "안전하고 투명한 인터넷 세상 만들기"',
              ]}
            />
            <HistoryItem
              month="9월"
              content={[
                '첫 번째 보안 프로그램 "Emerald Shield v1.0" 출시',
                '중소기업 10곳과 계약 성공',
                '오스카의 인터뷰: "저는, 사람들이 안심하고 디지털 세상을 누리길 바랍니다."',
              ]}
            />

            {/* 2018 */}
            <h3 className={styles.yearTitle}>2018, OZ프로그램 첫 발</h3>
            <HistoryItem
              month="3월"
              content={[
                'OZ 프로그램 개발 시작',
                '내부 테스트 결과: 바이러스 차단율 94%',
                '하지만 오스카는 불만: "94%는 실패다. 100%가 아니면 의미 없어."',
              ]}
            />
            <HistoryItem
              month="12월"
              content={[
                'OZ 프로그램 정식 출시',
                '출시 1개월 만에 전국 100만 기업 도입',
                '오스카의 기자회견: "OZ는 인간의 불완전함을 넘어선 완벽한 시스템입니다."',
              ]}
            />

            {/* 2020 */}
            <h3 className={styles.yearTitle}>
              2020, 사업 확장, 프로그램의 완벽통제
            </h3>
            <HistoryItem
              month="1월"
              content={[
                <>
                  <span className="text-highlight-red">오</span>스카의 결정:
                  에메랄드 시큐리티 상장 (KRX: EMER, 001230)
                </>,
                '주가 1만 원에서 시작해 3개월 만에 10만 원 돌파',
              ]}
            />
            <HistoryItem
              month="4월"
              content={['OZ Machine 프로토타입 1호 완성']}
            />
            <HistoryItem
              month="8월"
              content={[
                'OZ Machine 프로토타입 1호 대시민 공개, 전 신문사 서기 조사',
              ]}
            />
            <HistoryItem
              month="10월"
              content={['OZ Machine 프로토타입 3호 완료']}
            />

            {/* 2024 */}
            <h3 className={styles.yearTitle}>2024, 전성기</h3>
            <HistoryItem
              month="1월"
              content={[
                'OZ 프로그램, 전 세계 시장 점유율 80% 달성',
                '오스카, TIME지 "올해의 인물" 선정',
              ]}
            />
            <HistoryItem
              month="4월"
              content={[
                '사옥 이전: 강남 신사옥 (지상 50층, 지하 5층)',
                '지하 3~5층: OZ Machine 전용 시설 (외부 출입 금지)',
              ]}
            />
            <HistoryItem
              month="9월"
              content={[
                'OZ Machine 완전 체제 돌입',
                '목표: 2026년 1월 안에 전국 20개 지사에 각 1대씩 배치',
              ]}
            />
            <HistoryItem
              month="12월"
              content={[
                '연매출 1조 원 돌파',
                '오스카 회장, 기부금 100억 원 쾌척',
                '소감: "역시 CEO는 바빠"',
              ]}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={graphImg}
              alt="Growth Graph Debug"
              className={styles.graphImg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
