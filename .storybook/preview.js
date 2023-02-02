import StyleProvider from "@contexts/StyleProvider";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: [
      {
        name: "Desktop",
        styles: {
          width: "1440px",
          height: "900px",
        },
        type: "desktop",
      },
      {
        name: "Tablet",
        styles: {
          width: "768px",
          height: "1024px",
        },
        type: "tablet",
      },
      {
        name: "Mobile",
        styles: {
          width: "375px",
          height: "812px",
        },
        type: "mobile",
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <div style={{ position: "relative" }}>
      <StyleProvider isStory>
        <Story />
      </StyleProvider>
    </div>
  ),
];
