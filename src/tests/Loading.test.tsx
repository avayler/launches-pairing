import { describe, test, expect } from "vitest";
import { render } from "./utils/test-utils";
import Loading from "../components/Loading";

describe("<Loading />", () => {
  it("Loading mounts properly", () => {
    const wrapper = render(<Loading />);
    expect(wrapper).toBeTruthy();

    // Get by id
    const loadingDiv = wrapper.container.querySelector("#loading");
    expect(loadingDiv?.textContent).toBe("Loading...");

    //check if Rocket is present
    const rocket = wrapper.container.querySelector("svg");
    expect(rocket).toBeTruthy();
  });
});

