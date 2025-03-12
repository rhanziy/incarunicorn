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
    v: ' ',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
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
    v: '지역',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '14',
      },
    },
  },
  {
    v: '도시',
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

export const PetExcel = () => {
  const download = async () => {
    const wb = XLSX.utils.book_new();

    const { contactData: petList } = await getExcelData('contactPet');
    const bodyData: BodyDataType[][] = petList.map((pet) => [
      { v: pet.id, t: 's' },
      { v: pet.name, t: 's' },
      { v: pet.region, t: 's' },
      { v: pet.city, t: 's' },
      { v: pet.telecom, t: 's' },
      { v: pet.phoneNumber, t: 's' },
      { v: pet.petName, t: 's' },
      { v: pet.petType, t: 's' },
      { v: `만 ${pet.petAge}세`, t: 's' },
      { v: pet.petGender, t: 's' },
      { v: new Date(pet.created_at).toLocaleDateString(), t: 's' },
    ]);

    const ws = XLSX.utils.aoa_to_sheet([
      headerData.map((header) => header.v),
      ...bodyData.map((row) => row.map((cell) => cell.v)),
    ]);

    headerData.forEach((header, index) => {
      const cellRef = XLSX.utils.encode_cell({ c: index, r: 0 });
      ws[cellRef].s = header.s;
    });

    XLSX.utils.book_append_sheet(wb, ws, '펫보험 문의 리스트');
    XLSX.writeFile(wb, 'petList.xlsx');
  };

  return (
    <div
      style={{
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
  );
};
