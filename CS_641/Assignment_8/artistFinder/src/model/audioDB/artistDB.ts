export interface ArtistDB {
    artists: Artist[];
}

export interface Artist {
    idArtist: 'string';
    strArtist: 'string';
    strArtistStripped: 'string';
    strArtistAlternate: 'string';
    strLabel: 'string';
    idLabel: 'string';
    intFormedYear: 'string';
    intBornYear: 'string';
    intDiedYear: 'string';
    strDisbanded: 'string';
    strStyle: 'string';
    strGenre: 'string';
    strMood: 'string';
    strWebsite: 'string';
    strFacebook: 'string';
    strTwitter: 'string';
    strBiographyEN: 'string';
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

export interface ArtistT {
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
