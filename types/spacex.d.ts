// NEXTJS API
declare interface Payload {
  id: string;
  type: string;
}

declare interface Launch {
  id: string;
  name: string;
  date: string;
  image_url: string;
  core: string;
  payloads: Payload[];
}

// SPACEX API - LAUNCHES
declare interface SpaceXLinks {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: string;
    launch: string;
    media: string;
    recovery: null;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

declare interface SpaceXLaunch {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[]; // Ship IDs
  };
  links: SpaceXLinks;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: unknown[];
  details: stirng;
  crew: unknown[];
  ships: string[];
  capsules: unknown[];
  payloads: string[];
  launchpad: string;
  auto_update: true;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: SpaceXCoreBasic[];
  id: string;
}

// SPACEX API - CORES
declare interface SpaceXCoreBasic {
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

declare interface SpaceXCore {
  block: null;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  last_update: string;
  launches: string[];
  serial: string;
  status: string;
  id: string;
}

// SPACEX API - PAYLOADS
declare interface SpaceXPayload {
  dragon: {
    capsule: null;
    mass_returned_kg: null;
    mass_returned_lbs: null;
    flight_time_sec: null;
    manifest: null;
    water_landing: null;
    land_landing: null;
  };
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: number[];
  nationalities: string[];
  manufacturers: string[];
  mass_kg: number;
  mass_lbs: number;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: null;
  semi_major_axis_km: null;
  eccentricity: null;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: null;
  lifespan_years: null;
  epoch: null;
  mean_motion: null;
  raan: null;
  arg_of_pericenter: null;
  mean_anomaly: null;
  id: string;
}

// SPACEX API - GENERAL
declare interface QueryResult<T> {
  docs: T[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
