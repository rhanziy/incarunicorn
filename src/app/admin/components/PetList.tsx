'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import { headerData } from './PetExcel';
import { IContactPet } from '@/app/types';
import usePagination from '@/app/components/pagination/usePagination';
import { useEffect, useState } from 'react';
import { fetchPageData } from '@/app/components/pagination/action';

export const PetList = ({ totalCount }: { totalCount: number }) => {
  const [petList, setPetList] = useState<IContactPet[]>([]);
  const { currentPage, handlePageChange, pageCount } = usePagination(
    totalCount,
    'petPage',
  );

  useEffect(() => {
    const fetch = async () => {
      try {
        const lists = await fetchPageData('contactPet', currentPage);
        setPetList(lists);
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
          {petList.map((pet, index) => (
            <tr
              key={index}
              className={`${styles.tbodyRow} ${index % 2 === 0 ? styles.evenRow : ''} ${index === petList.length - 1 ? styles.lastRow : ''}`}
            >
              <td className={styles.cell}>{pet.name}</td>
              <td className={styles.cell}>{pet.telecom}</td>
              <td className={styles.cell}>{pet.phoneNumber}</td>
              <td className={styles.cell}>{pet.petName}</td>
              <td className={styles.cell}>{pet.petType}</td>
              <td className={styles.cell}>
                {pet.petAge ? `만 ${pet.petAge}세` : '모름'}
              </td>
              <td className={styles.cell}>{pet.petGender}</td>
              <td className={styles.cell}>
                {new Date(pet.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {petList.length > 0 && (
        <CustomPagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
