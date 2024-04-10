import type { Preview } from "@storybook/react";
import "minireset.css";
import "../styles/global.css";
import "../styles/tokens.css";
import { CSSProperties } from "react";
import React from "react";
import * as TT from "@storybook/addon-a11y";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxHeight: "auto",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
};

console.log(TT, 1111);
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

    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) => {
        if (b.name === "Docs") return 1;
        return a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
  },
};

export default preview;
