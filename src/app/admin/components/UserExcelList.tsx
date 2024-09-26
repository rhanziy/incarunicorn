'use client';

import Button from '@/app/components/Button';
import { IContactUser } from '@/app/types';
import XLSX from 'xlsx-js-style';
import * as styles from '../style.css';
import CustomPagination from '@/app/components/pagination/CustomPagination';
import usePagination from '@/app/components/pagination/usePagination';

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
    v: '카테고리',
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
    v: '직업',
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
    v: '주민등록번호',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '문의사항',
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

export const UserExcelList = ({ userList }: { userList: IContactUser[] }) => {
  const {
    currentPage,
    handlePageChange,
    paginatedData,
    totalItems,
    itemCountPerPage,
    pageCount,
  } = usePagination(userList);

  const download = () => {
    const bodyData: BodyDataType[][] = userList.map((user) => [
      { v: user.category, t: 's' },
      { v: user.name, t: 's' },
      { v: user.job, t: 's' },
      { v: user.telecom, t: 's' },
      { v: user.phoneNumber, t: 's' },
      { v: user.ssn, t: 's' },
      { v: user.text, t: 's' },
      { v: new Date(user.created_at).toLocaleDateString(), t: 's' },
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

    XLSX.utils.book_append_sheet(wb, ws, 'User Data');
    XLSX.writeFile(wb, 'userTemplate.xlsx');
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>인보험 관련 문의</p>
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
          {paginatedData.map((user, index) => (
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
      <CustomPagination
        totalItems={totalItems}
        itemCountPerPage={itemCountPerPage}
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
