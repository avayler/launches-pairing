import { describe, test, expect, vi } from "vitest";
import Switcher from "../components/Switcher";
import { render, screen, userEvent } from "./utils/test-utils";

describe("<Switcher />", () => {
  it("Switcher mounts properly and toggles icons from sun to moon", async () => {
    const wrapper = render(<Switcher />);
    expect(wrapper).toBeTruthy();

    const button = await wrapper.getByRole("button");
    expect(button).toBeTruthy();
    expect(await wrapper.container.querySelector("#sun-icon")).toBeTruthy();
    expect(await wrapper.container.querySelector("#moon-icon")).toBeFalsy();
    
    await userEvent.click(button);
    expect(await wrapper.container.querySelector("#moon-icon")).toBeTruthy();
  });
});
