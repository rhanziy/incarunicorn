import theme from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: theme.device.mobile,
  paddingBottom: theme.padding.large,
  '@media': {
    'screen and (max-width: 480px)': {
      width: '100%',
    },
  },
});

export const successModal = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '320px',
  height: '260px',
  backgroundColor: 'white',
  borderRadius: 8,
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  '@media': {
    'screen and (max-width: 480px)': {
      width: '240px',
      height: '200px',
    },
  },
});

export const closeBtn = style({
  position: 'absolute',
  top: 16,
  right: 16,
  '@media': {
    'screen and (max-width: 480px)': {
      top: 10,
      right: 10,
    },
  },
});

export const sucessText = style({
  marginTop: 4,
  marginBottom: 4,
  fontWeight: 600,
  fontSize: theme.fontSize.large,
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: theme.fontSize.regular,
    },
  },
});

export const sucessText2 = style({
  fontSize: theme.fontSize.regular,
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: theme.fontSize.small,
    },
  },
});
