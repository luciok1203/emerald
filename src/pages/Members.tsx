import crowImg from '../images/profiles/Crow.png';
import dorothyImg from '../images/profiles/Dorothy.png';
import reoImg from '../images/profiles/Reo.png';
import oscarImg from '../images/profiles/Oscar.png';
import tinImg from '../images/profiles/Tin.png';
import styles from './Members.module.css';

interface MemberItemProps {
  name: string;
  roles: string[];
  description?: string;
  image?: string;
}

const MemberItem = ({ name, roles, description, image }: MemberItemProps) => (
  <div className={styles.row}>
    {image ? (
      <img src={image} alt={name} className={styles.img} />
    ) : (
      <div className={styles.img}></div>
    )}
    <div className={styles.info}>
      <h3>{name}</h3>
      <ul>
        {roles.map((role, idx) => (
          <li key={idx}>{role}</li>
        ))}
      </ul>
      {description && (
        <p style={{ marginTop: '10px', color: '#666', fontSize: '0.9rem' }}>
          {description}
        </p>
      )}
    </div>
  </div>
);

const Members = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-box">2embers</div>
      </div>
      <div className="container">
        <div className={styles.grid}>
          <MemberItem
            name="Oscar"
            roles={['CEO', '총괄 담당자']}
            description="에메랄드의 창립자이자 설계자. 모든 시스템을 총괄합니다."
            image={oscarImg}
          />
          <MemberItem
            name="Crow"
            roles={['재정전략이사', 'Prime minister']}
            image={crowImg}
          />
          <MemberItem
            name="Tin"
            roles={['생산라인 QC 총괄', '머신 총괄 담당']}
            image={tinImg}
          />
          <MemberItem
            name="Dorothy"
            roles={['투자전략 총괄']}
            image={dorothyImg}
          />
          <MemberItem
            name="Reo"
            roles={['인사팀 총괄 담당자']}
            image={reoImg}
          />
        </div>
      </div>
    </>
  );
};

export default Members;
