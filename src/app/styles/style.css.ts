import { style } from '@vanilla-extract/css';
import theme from './theme.css';

export const heading = style({
  fontSize: theme.fontSize.large,
  fontWeight: 600,
});

export const message = style({
  fontSize: theme.fontSize.regular,
  color: '#888',
});
