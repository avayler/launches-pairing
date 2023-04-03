import { render } from '@testing-library/react';
import Card from '../../components/Card';
import { launch, failedLaunch } from './__mocks__/card.mock'

jest.mock('next/router');

describe('Card component', () => {
    it('renders the launch name and date', () => {
        const { getByText } = render(<Card launch={launch} />);
        expect(getByText(launch.name)).toBeInTheDocument();
        expect(getByText('Date: Jan 1, 2022, 24:00:00')).toBeInTheDocument();
    });

    it('renders the first core serial and payload types', () => {
        const { getByText } = render(<Card launch={launch} />);
        expect(getByText('First Core Serial: core-1')).toBeInTheDocument();
        expect(getByText('Payload 1 : Test Payload 1')).toBeInTheDocument();
        expect(getByText('Payload 2 : Test Payload 2')).toBeInTheDocument();
    });

    it('renders success message for a successful launch', () => {
        const { getByText, queryByText } = render(<Card launch={launch} />);
        expect(getByText('Success')).toBeInTheDocument();
        expect(queryByText('Failed')).toBeNull();
    });

    it('renders failure message and reasons for a failed launch', () => {
        const { getByText } = render(<Card launch={failedLaunch} />);
        expect(getByText('Failed')).toBeInTheDocument();
        expect(getByText('Reason for Failure:')).toBeInTheDocument();
        expect(getByText('1. Test Failure Reason 1')).toBeInTheDocument();
        expect(getByText('2. Test Failure Reason 2')).toBeInTheDocument();
    });
});
