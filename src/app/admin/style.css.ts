import { style } from '@vanilla-extract/css';

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: 16,
  fontSize: 13,
  textAlign: 'left',
});

export const theadRow = style({
  backgroundColor: '#4c818a',
  color: '#ffffff',
  textAlign: 'center',
});

export const ownerRow = style({
  backgroundColor: '#6b4c85',
});

export const cell = style({
  padding: '12px 15px',
  border: '1px solid #dddddd',
});

export const tbodyRow = style({
  borderBottom: '1px solid #dddddd',
});

export const evenRow = style({
  backgroundColor: '#f3f3f3',
});

export const lastRow = style({
  borderBottom: '2px solid #4c818a',
});

export const activeRow = style({
  fontWeight: 'bold',
  color: '#4c818a',
});
