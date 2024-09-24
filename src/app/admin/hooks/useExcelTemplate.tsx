import XLSX from 'xlsx-js-style';

type HeaderData = {
  v: string;
  t: string;
  s: {
    font: {
      bold: boolean;
      sz: string;
    };
  };
};
const headerData: HeaderData[] = [
  {
    v: '카테고리',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '이름',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '직업',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '통신사',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '핸드폰번호',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '주민등록번호',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '문의사항',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
  {
    v: '생성일',
    t: 's',
    s: {
      font: {
        bold: true,
        sz: '20',
      },
    },
  },
];

export const useExcelTemplate = () => {
  const generateTemplate = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      headerData.map((headerData) => headerData.v),
    ]);

    headerData.forEach((header, index) => {
      const cellRef = XLSX.utils.encode_cell({ c: index, r: 0 });
      worksheet[cellRef].s = header.s;
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, 'template.xlsx');
  };

  return { generateTemplate };
};
