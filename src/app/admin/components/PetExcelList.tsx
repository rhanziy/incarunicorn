'use client';

import Button from '@/app/components/Button';
import { IContactPet } from '@/app/types';
import XLSX from 'xlsx-js-style';
import * as styles from '../style.css';

interface HeaderDataType {
  v: string;
  t: string;
  s: {
    font: {
      bold: boolean;
      sz: string;
    };
  };
}
interface BodyDataType extends Omit<HeaderDataType, 's'> {}

const headerData: HeaderDataType[] = [
  {
    v: '신청인',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '통신사',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '연락처',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '이름',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '종류',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '나이',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '성별',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '생성일',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
];

export const PetExcelList = ({ petList }: { petList: IContactPet[] }) => {
  const download = () => {
    const bodyData: BodyDataType[][] = petList.map((pet) => [
      { v: pet.name, t: 's' },
      { v: pet.telecom, t: 's' },
      { v: pet.phoneNumber, t: 's' },
      { v: pet.petName, t: 's' },
      { v: pet.petType, t: 's' },
      { v: `만 ${pet.petAge}세`, t: 's' },
      { v: pet.petGender, t: 's' },
      { v: new Date(pet.created_at).toLocaleDateString(), t: 's' },
    ]);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([
      headerData.map((header) => header.v),
      ...bodyData.map((row) => row.map((cell) => cell.v)),
    ]);

    headerData.forEach((header, index) => {
      const cellRef = XLSX.utils.encode_cell({ c: index, r: 0 });
      ws[cellRef].s = header.s;
    });

    XLSX.utils.book_append_sheet(wb, ws, 'pet Data');
    XLSX.writeFile(wb, 'petTemplate.xlsx');
  };

  return (
    <div>
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>펫보험 관련 문의</p>
        <Button
          color="secondary"
          size="small"
          fullWidth={false}
          onClick={download}
        >
          엑셀 다운로드
        </Button>
      </div>
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
              <td className={styles.cell}>만 {pet.petAge}세</td>
              <td className={styles.cell}>{pet.petGender}</td>
              <td className={styles.cell}>
                {new Date(pet.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
