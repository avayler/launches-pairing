
export interface SpaceXLaunch {
    id: string;
    name: string;
    date_utc: string;
    cores: { core: { id: string, serial: string } }[];
    payloads: { id: string, type: string }[];
    links: { patch: { small: string } };
    success: boolean;
    failures?: { reason: string }[];
}