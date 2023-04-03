import { SpaceXLaunch } from '../../../types/interface';

export const launch: SpaceXLaunch = {
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

export const failedLaunch: SpaceXLaunch = {
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