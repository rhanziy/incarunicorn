'use client';

import Button from '@/app/components/Button';
import { getExcelData } from '@/app/contact/action';
import XLSX from 'xlsx-js-style';

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

export const headerData: HeaderDataType[] = [
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

export const UserExcel = () => {
  const download = async () => {
    const { contactData: userList } = await getExcelData('contactUser');

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

    XLSX.utils.book_append_sheet(wb, ws, '인보험 문의 리스트');
    XLSX.writeFile(wb, 'userList.xlsx');
  };

  return (
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
  );
};
