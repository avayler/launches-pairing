interface Launch{
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  net: boolean;
  window: unknown;
  rocket: string;
  success: boolean;
  falures: Array<unknown>;
  details: string;
  crew: Array<unknown>;
  ships: Array<string>;
  capsules: Array<unknown>;
  payloads: Array<String>;
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Array<Core>;
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}

interface Fairings{
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: Array<string>;
}

interface Links{
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string;
    launch: string;
    media: unknown;
    recovery: unknown;
  };
  flickr: {
    small: Array<unknown>;
    original: Array<string>;
  };
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface Core{
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}
