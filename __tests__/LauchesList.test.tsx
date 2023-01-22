import { render, screen, waitFor } from '@testing-library/react';
import LaunchesList from '../components/LaunchesList/LaunchesList';
import '@testing-library/jest-dom';
import * as api from '../components/Client';
import MockData from '../mocks/Launches.json';

jest.mock('../components/Client');
jest.mocked('../Utils/Client');
const mockApi = jest.mocked(api, { shallow: true });

describe('Launches List', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders 10 cards successfully', async () => {
    mockApi.getLaunchesData.mockResolvedValue(MockData);
    render(<LaunchesList />);

    const launchCards = await waitFor(() => screen.findAllByRole('listitem'));

    expect(launchCards).toHaveLength(10);
  });

  it('displays error message on api call fail', async () => {
    mockApi.getLaunchesData.mockRejectedValue({ error: 'Something Went Wrong' });
    render(<LaunchesList />);

    const errorMessage = await waitFor(() => screen.findByTestId('errorMessage'));

    expect(errorMessage).toBeTruthy();
  });
});
