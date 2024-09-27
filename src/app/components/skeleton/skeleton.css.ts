import theme from '@/app/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const skeletonGradient = keyframes({
  '0%': {
    backgroundColor: 'rgba(165, 165, 165, 0.1)',
  },

  '50%': {
    backgroundColor: 'rgba(165, 165, 165, 0.3)',
  },

  '100%': {
    backgroundColor: 'rgba(165, 165, 165, 0.1)',
  },
});

export const reviewWrapper = style({
  paddingTop: theme.padding.base,
  paddingBottom: theme.padding.base,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px 2%',
});

export const skeletonItem = style({
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.padding.base,
  borderRadius: 8,
  WebkitAnimation: `${skeletonGradient} 1.8s infinite ease-in-out`,
  animation: `${skeletonGradient} 1.8s infinite ease-in-out`,
  MozAnimation: `${skeletonGradient} 1.8s infinite ease-in-out`,
  OAnimation: `${skeletonGradient} 1.8s infinite ease-in-out`,
});

export const skeletonSpan = style({
  borderRadius: 8,
  WebkitAnimation: `${skeletonGradient} 1.8s infinite ease-in-out`,
  animation: `${skeletonGradient} 1.8s infinite ease-in-out`,
  MozAnimation: `${skeletonGradient} 1.8s infinite ease-in-out`,
  OAnimation: `${skeletonGradient} 1.8s infinite ease-in-out`,
});
