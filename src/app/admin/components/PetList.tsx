'use client';

import CustomPagination from '@/app/components/pagination/CustomPagination';
import * as styles from '../style.css';
import { PetExcel, headerData } from './PetExcel';
import { IContactPet } from '@/app/types';
import useMultiplePagination from '@/app/components/pagination/useMultiplePagination';

export const PetList = ({ petList }: { petList: IContactPet[] }) => {
  const totalItems = petList?.length;
  const { currentPage, handlePageChange, pageCount, fetchData } =
    useMultiplePagination<IContactPet>('contactPet', totalItems, 'petPage');

  return (
    <div>
      <PetExcel petList={petList} />
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
          {fetchData.map((pet, index) => (
            <tr
              key={index}
              className={`${styles.tbodyRow} ${index % 2 === 0 ? styles.evenRow : ''} ${index === fetchData.length - 1 ? styles.lastRow : ''}`}
            >
              <td className={styles.cell}>{pet.name}</td>
              <td className={styles.cell}>{pet.telecom}</td>
              <td className={styles.cell}>{pet.phoneNumber}</td>
              <td className={styles.cell}>{pet.petName}</td>
              <td className={styles.cell}>{pet.petType}</td>
              <td className={styles.cell}>만 {pet.petAge}세</td>
              <td className={styles.cell}>{pet.petGender}</td>
              <td className={styles.cell}>
                {new Date(pet.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {fetchData.length > 0 && (
        <CustomPagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
