'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import { headerData } from './UserExcel';
import { IContactUser } from '@/app/types';
import usePagination from '@/app/components/pagination/usePagination';

export const UserList = ({
  userList,
  pageCount,
  page,
}: {
  userList: IContactUser[];
  pageCount: number;
  page: number;
}) => {
  const handlePageChange = usePagination('userPage');

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.theadRow}>
            {headerData.map((header, index) => (
              <th key={index} className={styles.cell}>
                {header.v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr
              key={index}
              className={`${styles.tbodyRow} ${index % 2 === 0 ? styles.evenRow : ''} ${index === userList.length - 1 ? styles.lastRow : ''}`}
            >
              <td className={styles.cell}>{user.id}</td>
              <td className={styles.cell}>{user.category}</td>
              <td className={styles.cell}>{user.name}</td>
              <td className={styles.cell}>{user.job}</td>
              <td className={styles.cell}>{user.telecom}</td>
              <td className={styles.cell}>{user.phoneNumber}</td>
              <td className={styles.cell}>{user.ssn}</td>
              <td className={styles.cell}>{user.text}</td>
              <td className={styles.cell}>
                {new Date(user.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {userList.length > 0 && (
        <CustomPagination
          currentPage={page}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
