import { Fragment, type ReactNode } from 'react';
import styles from './DataList.module.css';

export interface DataListItem {
  title: string;
  content: ReactNode;
  [key: string]: string | ReactNode | number | boolean | undefined;
}

interface DataListProps {
  data: DataListItem[];
  className?: string;
  ListHeaderComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
}

const DataList = ({
  data,
  className,
  ListHeaderComponent,
  ListFooterComponent,
}: DataListProps) => {
  return (
    <div className={className}>
      {ListHeaderComponent}
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.content}>{item.content}</div>

          {index < data.length - 1 && <div className="dashed-separator"></div>}
        </Fragment>
      ))}
      {ListFooterComponent}
    </div>
  );
};

export default DataList;
