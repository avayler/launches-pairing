import { describe, test, expect, vi } from "vitest";
import Switcher from "../components/Switcher";
import { render, screen, userEvent } from "./utils/test-utils";

describe("<Switcher />", () => {
  it("Switcher mounts properly",  () => {
    const wrapper = render(<Switcher />);
    expect(wrapper).toBeTruthy();

    const button = wrapper.getByRole("button");
    expect(button).toBeTruthy();
    userEvent.click(button);

    expect( wrapper.container.querySelector("#sun-icon")).toBeTruthy();
  });
});
