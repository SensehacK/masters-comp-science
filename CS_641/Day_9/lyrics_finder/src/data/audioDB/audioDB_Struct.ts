// To parse this data:
//
//   import { Convert, Artists } from "./file";
//
//   const artists = Convert.toArtists(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Artists {
    artists: Artist[];
}

export interface Artist {
    idArtist: string;
    strArtist: string;
    strArtistStripped: null;
    strArtistAlternate: string;
    strLabel: string;
    idLabel: string;
    intFormedYear: string;
    intBornYear: string;
    intDiedYear: null;
    strDisbanded: null;
    strStyle: string;
    strGenre: string;
    strMood: string;
    strWebsite: string;
    strFacebook: string;
    strTwitter: string;
    strBiographyDE: string;
    strBiographyFR: string;
    strBiographyCN: null;
    strBiographyIT: string;
    strBiographyJP: string;
    strBiographyRU: string;
    strBiographyES: null;
    strBiographyPT: string;
    strBiographySE: string;
    strBiographyNL: string;
    strBiographyHU: null;
    strBiographyNO: string;
    strBiographyIL: null;
    strBiographyPL: null;
    strGender: string;
    intMembers: string;
    strCountry: string;
    strCountryCode: string;
    strArtistThumb: string;
    strArtistLogo: string;
    strArtistClearart: null;
    strArtistWideThumb: string;
    strArtistFanart: string;
    strArtistFanart2: string;
    strArtistFanart3: string;
    strArtistBanner: string;
    strMusicBrainzID: string;
    strLastFMChart: null;
    intCharted: string;
    strLocked: string;
}
