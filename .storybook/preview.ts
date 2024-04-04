import type { Preview } from "@storybook/react";
import 'minireset.css'
import '../styles/global.css';
import '../styles/tokens.css';


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
