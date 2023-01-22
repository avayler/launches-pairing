import { render, screen, waitFor, act } from '@testing-library/react';
import LaunchesList from '../components/LaunchesList/LaunchesList';
import '@testing-library/jest-dom';
import * as api from '../components/Client';
import MockData from '../mocks/Launches.json';

jest.mock('../components/Client');
const mockApi = jest.mocked(api, { shallow: true });
const { launches } = MockData as any;

describe('Launches List', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders 10 cards successfully', async () => {
    await act(async () => {
      mockApi.getLaunchesData.mockResolvedValue(launches);
    });

    render(<LaunchesList />);

    const launchCards = await waitFor(() => screen.findAllByRole('listitem'), { timeout: 4000 });

    expect(launchCards).toHaveLength(10);
  });

  it('displays error message on api call fail', async () => {
    await act(async () => {
      mockApi.getLaunchesData.mockRejectedValue({ error: { message: 'Something Went Wrong' } });
    });

    render(<LaunchesList />);

    const errorMessage = await waitFor(() => screen.findByTestId('errorMessage'), { timeout: 4000 });

    expect(errorMessage).toHaveTextContent('Something went wrong');
  });
});
