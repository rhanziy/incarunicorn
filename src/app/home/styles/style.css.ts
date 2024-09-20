import theme from '@/app/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});
export const imgContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 320,
  height: 380,
  marginRight: theme.margin.large,
  borderRadius: 12,
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 768px)': {
      width: 300,
      height: 380,
      alignSelf: 'center',
      borderRadius: '50%',
      marginRight: 0,
    },
    'screen and (max-width: 480px)': {
      width: 270,
      height: 350,
      alignItems: 'flex-start',
    },
  },
});

export const consultingWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3%',
  marginTop: theme.margin.medium,
  marginBottom: theme.margin.medium,
  '@media': {
    'screen and (max-width:480px)': {
      flexDirection: 'column',
    },
  },
});

export const consultingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '47%',
  gap: 8,
  '@media': {
    'screen and (max-width:480px)': {
      width: '100%',
    },
  },
});

export const arrowBox = style({
  marginTop: theme.margin.xLarge,
  transform: 'rotate(0deg)',
  '@media': {
    'screen and (max-width:480px)': {
      marginTop: theme.margin.small,
      marginBottom: theme.margin.small,
      transform: 'rotate(90deg)',
    },
  },
});

export const reviewContainer = style({
  marginBottom: theme.margin.base,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px 2%',
});
