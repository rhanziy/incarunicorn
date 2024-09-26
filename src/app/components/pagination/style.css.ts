import { style } from '@vanilla-extract/css';

export const paginationContainer = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'center',
  marginTop: '20px',
});

export const controlButton = style({
  padding: '6px 12px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  borderRadius: 4,
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const paginationButton = style({
  padding: '6px 12px',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  borderRadius: 4,
  ':hover': {
    border: '1px solid #cfe089',
    backgroundColor: '#cfe089',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const active = style({
  fontWeight: 600,
  border: '1px solid #cfe089',
  color: '#545e2b',
  backgroundColor: '#cfe089',
});
