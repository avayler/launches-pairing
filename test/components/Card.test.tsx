import { render } from '@testing-library/react';
import Card from '../../components/Card';
import { SpaceXLaunch } from '../../types/interface';

jest.mock('next/router');

describe('Card component', () => {
    const launch: SpaceXLaunch = {
        id: 'launch-1',
        name: 'Test Launch',
        date_utc: '2022-01-01T00:00:00Z',
        links: {
            patch: {
                small: 'https://example.com/launch-1-patch-small.jpg',
            },
        },
        cores: [
            {
                core: {
                    id: '1',
                    serial: 'core-1',
                },
            },
        ],
        payloads: [
            {
                id: 'payload-1',
                type: 'Test Payload 1',
            },
            {
                id: 'payload-2',
                type: 'Test Payload 2',
            },
        ],
        success: true,
    };

    it('renders the launch name and date', () => {
        const { getByText } = render(<Card launch={ launch } />);
        expect(getByText(launch.name)).toBeInTheDocument();
        expect(getByText('Date: Jan 1, 2022, 24:00:00')).toBeInTheDocument();
    });

    it('renders the first core serial and payload types', () => {
        const { getByText } = render(<Card launch={ launch } />);
        expect(getByText('First Core Serial: core-1')).toBeInTheDocument();
        expect(getByText('Payload 1 : Test Payload 1')).toBeInTheDocument();
        expect(getByText('Payload 2 : Test Payload 2')).toBeInTheDocument();
    });

    it('renders success message for a successful launch', () => {
        const { getByText, queryByText } = render(<Card launch={ launch } />);
        expect(getByText('Success')).toBeInTheDocument();
        expect(queryByText('Failed')).toBeNull();
    });

    it('renders failure message and reasons for a failed launch', () => {
        const failedLaunch: SpaceXLaunch = {
            ...launch,
            success: false,
            failures: [
                {
                    reason: 'Test Failure Reason 1',
                },
                {
                    reason: 'Test Failure Reason 2',
                },
            ],
        };
        const { getByText } = render(<Card launch={ failedLaunch } />);
        expect(getByText('Failed')).toBeInTheDocument();
        expect(getByText('Reason for Failure:')).toBeInTheDocument();
        expect(getByText('1. Test Failure Reason 1')).toBeInTheDocument();
        expect(getByText('2. Test Failure Reason 2')).toBeInTheDocument();
    });
});
