import graphImg from '../images/graph.png';
import styles from './History.module.css';

interface HistoryItemProps {
  month: string;
  content: string[];
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
            {/* 2026 */}
            <h3 className={styles.yearTitle}>2026</h3>
            <HistoryItem
              month="3월"
              content={[
                'O.Z. (Omnipotent Zero-defect) Security Program 글로벌 런칭',
                '나스닥 상장 (티커: EMER)',
              ]}
            />

            {/* 2025 */}
            <h3 className={styles.yearTitle}>2025</h3>
            <HistoryItem
              month="10월"
              content={[
                "'OZ Machine' 인사 시스템 테스트 가동",
                '실리콘밸리 R&D 센터 설립',
              ]}
            />
            <HistoryItem
              month="3월"
              content={['(주) 에메랄드 법인 설립', "초대 회장 '오스카' 취임"]}
            />

            {/* 2024 */}
            <h3 className={styles.yearTitle}>2024</h3>
            <HistoryItem
              month="6월"
              content={[
                "'Project Emerald' 팀 결성",
                '1세대 적응형 변이 엔진(AME) 특허 출원',
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
