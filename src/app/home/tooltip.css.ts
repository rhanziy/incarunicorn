// tooltip.css.ts
import { style } from '@vanilla-extract/css';

export const tooltipContainer = style({
  position: 'relative',
  display: 'inline-block',
});

export const tooltipText = style({
  visibility: 'hidden',
  width: '100px',
  backgroundColor: '#555',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '6px',
  padding: '5px 0',
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  left: '105%',
  transform: 'translateY(-50%)',
  opacity: 0,
  transition: 'opacity 0.3s',
  fontSize: 12,
  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '100%',
    marginTop: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'transparent #555 transparent transparent',
  },
});

export const tooltipVisible = style({
  visibility: 'visible',
  opacity: 1,
});
