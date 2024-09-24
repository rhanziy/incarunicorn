import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    padding: '13px 20px',
    fontSize: '18px',
    fontWeight: 500,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  variants: {
    color: {
      none: {
        backgroundColor: 'white',
        color: '#0073e6',
        ':hover': {
          backgroundColor: '#ededed',
        },
        ':active': {
          backgroundColor: '#e3e3e3',
        },
      },
      primary: {
        backgroundColor: '#0073e6',
        color: '#fff',
        ':hover': {
          backgroundColor: '#1264b5',
        },
        ':active': {
          backgroundColor: '#094a9b',
        },
      },
      secondary: {
        backgroundColor: '#eee',
        color: '#777',
        ':hover': {
          backgroundColor: '#e2e2e2',
        },
        ':active': {
          backgroundColor: '#ddd',
        },
      },
      danger: {
        backgroundColor: '#d32f2f',
        color: '#fff',
        ':hover': {
          backgroundColor: '#b71c1c',
        },
        ':active': {
          backgroundColor: '#9a0007',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        alignSelf: 'stretch',
      },
      false: {
        width: 'auto',
        alignSelf: 'flex-start',
      },
    },
    size: {
      small: {
        padding: '8px 12px',
        fontSize: '14px',
      },
      medium: {
        padding: '10px 20px',
        fontSize: '16px',
      },
      large: {
        padding: '12px 26px',
        fontSize: '18px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    fullWidth: true,
    size: 'medium',
  },
});
