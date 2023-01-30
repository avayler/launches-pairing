// NEXTJS API
declare interface Payload {
  id: string;
  type: string;
}

declare interface Launch {
  id: string;
  name: string;
  date: string;
  details: string;
  image_url: string | undefined;
  core: string | undefined;
  payloads: Payload[];
  success: boolean;
  failureReason?: string;
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

declare interface SpaceXFailure {
  altitude: number;
  reason: string;
  time: number;
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
  failures: SpaceXFailure[];
  details: stirng;
  crew: unknown[];
  ships: string[];
  capsules: unknown[];
  payloads: Payload[];
  launchpad: string;
  auto_update: true;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: { core: Partial<SpaceXCore> }[];
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
  block: unknown | null;
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
    capsule: unknown | null;
    mass_returned_kg: unknown | null;
    mass_returned_lbs: unknown | null;
    flight_time_sec: unknown | null;
    manifest: unknown | null;
    water_landing: unknown | null;
    land_landing: unknown | null;
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
  longitude: unknown | null;
  semi_major_axis_km: unknown | null;
  eccentricity: unknown | null;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: unknown | null;
  lifespan_years: unknown | null;
  epoch: unknown | null;
  mean_motion: unknown | null;
  raan: unknown | null;
  arg_of_pericenter: unknown | null;
  mean_anomaly: unknown | null;
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
