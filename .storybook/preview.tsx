import type { Preview } from '@storybook/react';
import 'minireset.css';
import '../styles/global.css';
import '../styles/tokens.css';
import { CSSProperties } from 'react';
import React from 'react';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxHeight: 'auto',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
};

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
