import { style } from '@vanilla-extract/css';
import theme from './theme.css';

export const wrapper = style({
  margin: `${theme.padding.large} auto`,
});

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
});
export const flexAllCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const flexColumnAllCenter = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
