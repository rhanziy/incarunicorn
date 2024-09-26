'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import { UserExcel, headerData } from './UserExcel';
import usePagination from '@/app/components/pagination/usePagination';
import { IContactUser } from '@/app/types';

export const UserList = ({ userList }: { userList: IContactUser[] }) => {
  const totalItems = userList?.length;
  const {
    currentPage,
    handlePageChange,
    itemCountPerPage,
    pageCount,
    fetchData,
  } = usePagination<IContactUser>('contactUser', totalItems);

  return (
    <div>
      <UserExcel userList={userList} />
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
          {fetchData.map((user, index) => (
            <tr
              key={index}
              className={`${styles.tbodyRow} ${index % 2 === 0 ? styles.evenRow : ''} ${index === fetchData.length - 1 ? styles.lastRow : ''}`}
            >
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
      {fetchData.length > 0 && (
        <CustomPagination
          totalItems={totalItems}
          itemCountPerPage={itemCountPerPage}
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
