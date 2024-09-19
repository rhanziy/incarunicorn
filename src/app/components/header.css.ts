import { style } from '@vanilla-extract/css';
import theme from '../styles/theme.css';

export const header = style({
  position: 'fixed',
  width: '100%',
  height: 70,
  padding: '1rem 3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  transition: 'transform 0.3s ease-out',
  transform: 'translateY(0)',
  backdropFilter: 'blur(4.5px)',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': {
      height: 94,
    },
    'screen and (max-width: 480px)': {
      padding: '1rem 1rem',
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: theme.device.desktop,
  margin: '0 auto',
  '@media': {
    'only screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

export const hide = style({
  transform: 'translateY(-100%)',
});

export const shadow = style({
  boxShadow: '0 0px 5px 0 rgba(92, 94, 128, 0.37)',
});

export const nav = style({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'space-between',
  fontWeight: 400,
  fontSize: theme.fontSize.regular,
  color: 'rgb(183, 183, 183)',
  '@media': {
    'only screen and (max-width: 768px)': {
      marginTop: 12,
    },
  },
});

export const active = style({
  fontWeight: 600,
  color: '#032ea3',
});
