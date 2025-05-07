import React from 'react';
import styles from './Pagination.module.css';


interface Props {
  pageSize: number;
  totalItems: number;
  page: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<Props> = ({pageSize, totalItems,page, onPrev, onNext }) => (
  <div className={styles.pagination}>
    <button className={styles.button} onClick={onPrev} disabled={page === 1}>Previous</button>
    <span className={styles.label} >Page {page}</span>
    <button disabled={page>=totalItems/pageSize} className={styles.button} onClick={onNext}>Next</button>
  </div>
);

export default Pagination;
