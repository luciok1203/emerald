import crowImg from '../images/profiles/Crow.png';
import dorothyImg from '../images/profiles/Dorothy.png';
import oscarImg from '../images/profiles/Oscar.png';
import reoImg from '../images/profiles/Reo.png';
import tinImg from '../images/profiles/Tin.png';
import styles from './Members.module.css';

interface MemberItemProps {
  name: string;
  roles: (string | React.ReactNode)[];
  description?: React.ReactNode;
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
      {/* 배너 영역: 16:3 비율 및 6vw 폰트 적용 대상 */}
      <div className="hero-banner">
        <div className="hero-box">2embers</div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <MemberItem
            name="Oscar"
            roles={['대표이사', '대표이사 집무실']}
            image={oscarImg}
          />
          <MemberItem
            name="Crow"
            roles={['경영전략이사', '전략기획실']}
            image={crowImg}
          />
          <MemberItem
            name="Tin"
            roles={[
              '시스템운영총괄',
              <>
                시스템운<span className="text-highlight-red">영</span>실
              </>,
            ]}
            image={tinImg}
          />
          <MemberItem
            name="Dorothy"
            roles={['자산운용총괄', '자산운용본부']}
            image={dorothyImg}
          />
          <MemberItem
            name="Reo"
            roles={['인재경영총괄', '인재경영실']}
            image={reoImg}
          />
        </div>
      </div>
    </>
  );
};

export default Members;
