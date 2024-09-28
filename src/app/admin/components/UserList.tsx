'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import { headerData } from './UserExcel';
import { IContactUser } from '@/app/types';
import { useEffect, useState } from 'react';
import { fetchPageData } from '@/app/components/pagination/action';
import usePagination from '@/app/components/pagination/usePagination';

export const UserList = ({ totalCount }: { totalCount: number }) => {
  const [userList, setUserList] = useState<IContactUser[]>([]);
  const { currentPage, handlePageChange, pageCount } = usePagination(
    totalCount,
    'userPage',
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        const lists = await fetchPageData('contactUser', currentPage);
        setUserList(lists);
      } catch (error) {
        console.error('Error fetching list', error);
      }
    };
    fetch();
  }, [currentPage, totalCount]);

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
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
