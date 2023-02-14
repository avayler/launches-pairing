import ListOfCards from "../components/ListOfCards";
import { render, screen } from "./utils/test-utils";
import mockLaunchData from "./mocks/mockLaunchData";

describe("<ListOfCards/>", () => {
  it("is not finding cards"),
    () => {
      render(<ListOfCards launchData={mockLaunchData} />);
      expect(screen.getByText(/FalconsatX/i)).toBeUndefined();
    };
  it("correctly displays cards", () => {
    render(<ListOfCards launchData={mockLaunchData} />);
    
    expect(screen.getByText(/FalconSat/i)).toBeDefined();
    expect(screen.getByText(/2006-03-24T22:30:00.000Z/i)).toBeDefined();
    expect(screen.getByText(/5e9e289df35918033d3b2623/i)).toBeDefined();
    expect(screen.getByText(/5eb0e4b5b6c3bb0006eeb1e1/i)).toBeDefined();
    expect(screen.getByAltText(/FalconSat/i)).toBeDefined();
    expect(screen.getByText(/merlin engine failure/i)).toBeDefined();

    expect(screen.getByText(/Falcon 9 Test Flight/i)).toBeDefined();
    expect(screen.getByText(/CRS-2/i)).toBeDefined();
  });
});
