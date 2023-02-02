import { Breakpoints } from "./Breakpoints";

type RadiusOptions = "sm" | "complete";
type TypographyOptions =
  | "large-title"
  | "secondary-title"
  | "tertiary-title"
  | "body-title"
  | "body-sub"
  | "body-text"
  | "body-small";

export interface Theme {
  colors: {
    background: string;
    text: string;
    accent: string;
    accent2: string;
  };
  radius: (type: RadiusOptions) => string | null;
  spacing: (value: number) => string | null;
  fontSize: (value: number) => string | null;
  minBp: (breakpoint: Breakpoints) => string | null;
  typography: (type: TypographyOptions) => string | null;
}
