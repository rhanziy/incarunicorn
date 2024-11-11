'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import { headerData } from './PetExcel';
import { IContactPet } from '@/app/types';
import usePagination from '@/app/components/pagination/usePagination';

export const PetList = ({
  petList,
  pageCount,
  page,
}: {
  petList: IContactPet[];
  pageCount: number;
  page: number;
}) => {
  const handlePageChange = usePagination('petPage');

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
              <td className={styles.cell}>{pet.id}</td>
              <td className={styles.cell}>{pet.name}</td>
              <td className={styles.cell}>{pet.region}</td>
              <td className={styles.cell}>{pet.city}</td>
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
          currentPage={page}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
