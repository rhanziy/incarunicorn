import { style } from '@vanilla-extract/css';
import theme from './styles/theme.css';

export const container = style({
  width: '100%',
  maxWidth: theme.device.desktop,
  margin: '0 auto',
  paddingTop: '80px',
  paddingLeft: theme.padding.large,
  paddingRight: theme.padding.large,
  marginBottom: theme.margin.large,
  '@media': {
    'screen and (max-width: 768px)': {
      paddingTop: '100px',
      paddingLeft: theme.padding.medium,
      paddingRight: theme.padding.medium,
    },
    'screen and (max-width: 380px)': {
      paddingTop: '80px',
    },
  },
});
