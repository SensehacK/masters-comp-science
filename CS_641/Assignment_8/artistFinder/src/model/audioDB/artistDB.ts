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
}
