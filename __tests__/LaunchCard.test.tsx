import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import LaunchCard from '../components/LaunchCard/LaunchCard';
import Mockdata from '../mocks/Launches.json';
const { launches } = Mockdata as any;
const { name, date_utc, cores, payloads, image, success, failures } = launches[0];

describe('Launchcard Component', () => {
  it('should render launch name', () => {
    render(
      <LaunchCard
        name={name}
        date_utc={date_utc}
        cores={cores}
        payloads={payloads}
        image={image}
        success={success}
        failures={failures}
      />
    );
    expect(screen.getByTestId('name')).toHaveTextContent(name);
    expect(screen.getByTestId('date_utc')).toBeTruthy();
    expect(screen.getByTestId('cores')).toBeInTheDocument();
    expect(screen.getByTestId('payloads')).toBeInTheDocument();
  });
});
