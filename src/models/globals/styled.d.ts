import { Theme } from "@models/Theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
