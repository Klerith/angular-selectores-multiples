export enum Region {
  Africa   = 'Africa',
  Americas = 'Americas',
  Asia     = 'Asia',
  Europe   = 'Europe',
  Oceania  = 'Oceania',
}

export interface SmallCountry {
  name   : string;
  cca3   : string;
  borders: string[];
}


export interface Country {
  name:         Name;
  cca3:         string;
  status:       Status;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  cioc?:        string;
  borders?:     string[];
  gini?:        { [key: string]: number };
  fifa?:        string;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Currencies {
  NOK?: All;
  EUR?: All;
  GBP?: All;
  GGP?: All;
  RON?: All;
  MKD?: All;
  ALL?: All;
  DKK?: All;
  CHF?: All;
  CZK?: All;
  PLN?: All;
  RSD?: All;
  RUB?: All;
  IMP?: All;
  SEK?: All;
  MDL?: All;
  FOK?: All;
  BGN?: All;
  BYN?: All;
  BAM?: BAM;
  JEP?: All;
  HUF?: All;
  UAH?: All;
  GIP?: All;
  ISK?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  nor?: string;
  deu?: string;
  fra?: string;
  nld?: string;
  lav?: string;
  cat?: string;
  eng?: string;
  mlt?: string;
  nfr?: string;
  ron?: string;
  mkd?: string;
  sqi?: string;
  dan?: string;
  est?: string;
  ces?: string;
  slk?: string;
  swe?: string;
  pol?: string;
  srp?: string;
  rus?: string;
  glv?: string;
  spa?: string;
  ell?: string;
  fao?: string;
  bul?: string;
  bel?: string;
  cnr?: string;
  bos?: string;
  hrv?: string;
  lit?: string;
  de?:  string;
  ltz?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  nrf?: string;
  hun?: string;
  ita?: string;
  ukr?: string;
  fin?: string;
  por?: string;
  lat?: string;
  slv?: string;
  gle?: string;
  gsw?: string;
  roh?: string;
  tur?: string;
  isl?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
