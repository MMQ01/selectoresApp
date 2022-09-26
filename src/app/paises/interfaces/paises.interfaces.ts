export interface PaisSmall {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       Region;
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
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Region[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    borders?:     string[];
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

export enum Region {
    Europe = "Europe",
}

export interface Currencies {
    EUR?: All;
    ALL?: All;
    UAH?: All;
    RSD?: All;
    MKD?: All;
    NOK?: All;
    HUF?: All;
    GBP?: All;
    ISK?: All;
    SEK?: All;
    BYN?: All;
    GIP?: All;
    GGP?: All;
    CHF?: All;
    HRK?: All;
    CZK?: All;
    IMP?: All;
    BAM?: BAM;
    BGN?: All;
    JEP?: All;
    DKK?: All;
    FOK?: All;
    RON?: All;
    MDL?: All;
    PLN?: All;
    RUB?: All;
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

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    eng?: string;
    mlt?: string;
    cat?: string;
    fin?: string;
    swe?: string;
    ita?: string;
    por?: string;
    bar?: string;
    deu?: string;
    fra?: string;
    ltz?: string;
    sqi?: string;
    ukr?: string;
    srp?: string;
    mkd?: string;
    spa?: string;
    gle?: string;
    slk?: string;
    nor?: string;
    hun?: string;
    cnr?: string;
    isl?: string;
    est?: string;
    slv?: string;
    lav?: string;
    nld?: string;
    bel?: string;
    rus?: string;
    nfr?: string;
    hrv?: string;
    gsw?: string;
    roh?: string;
    ces?: string;
    glv?: string;
    bos?: string;
    lit?: string;
    bul?: string;
    ell?: string;
    nrf?: string;
    dan?: string;
    fao?: string;
    ron?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    pol?: string;
    tur?: string;
    lat?: string;
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
