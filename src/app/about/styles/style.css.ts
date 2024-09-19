import theme from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const introduceWrapper = style({
  display: 'flex',
  gap: 24,
  margin: '24px 0px 16px 16px',
  '@media': {
    'screen and (max-width:480px)': {
      flexDirection: 'column',
    },
  },
});

export const introduceBox = style({
  position: 'relative',
  width: '260px',
  display: 'flex',
  flexDirection: 'column',
  padding: 14,
  paddingTop: 16,
  lineHeight: 1.5,
  textAlign: 'center',
  border: '1px solid #bfbfbf',
  '@media': {
    'screen and (max-width:768px)': {
      width: '50%',
    },
    'screen and (max-width:480px)': {
      width: '100%',
    },
  },
});

export const number = style({
  position: 'absolute',
  top: -12,
  left: -16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 28,
  borderRadius: '50%',
  fontSize: 16,
  fontWeight: 600,
  color: 'white',
  backgroundColor: '#032ea3',
  outline: '5px solid  white',
});

export const container = style({
  marginTop: theme.margin.base,
  height: 150,
  display: 'flex',
  alignItems: 'center',
  gap: '3%',
});
