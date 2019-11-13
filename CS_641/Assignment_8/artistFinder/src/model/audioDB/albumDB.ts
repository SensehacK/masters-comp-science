export interface AlbumsDB {
    albums: Album[];
}

export interface Album {
    idAlbum: string;
    idArtist: string;
    idLabel: string;
    strAlbum: string;
    strAlbumStripped: string;
    strArtist: string;
    strArtistStripped: string;
    intYearReleased: string;
    strStyle: string;
    strGenre: string;
    strLabel: string;
    strReleaseFormat: string;
    intSales: string;
    strAlbumSpine: null;
    strAlbum3DThumb: null;
    strDescriptionEN: null;
    strDescriptionDE: null;
    strDescriptionFR: null;
    strDescriptionCN: null;
    strDescriptionIT: null;
    strDescriptionJP: null;
    strDescriptionRU: null;
    strDescriptionES: null;
    strDescriptionPT: null;
    strDescriptionSE: null;
    strDescriptionNL: null;
    strDescriptionHU: null;
    strDescriptionNO: null;
    strDescriptionIL: null;
    strDescriptionPL: null;
    intLoved: null;
    intScore: string;
    intScoreVotes: string;
    strReview: string;
    strMood: string;
    strTheme: string;
    strSpeed: string;
    strLocation: null;
    strBBCReviewID: string;
    strRateYourMusicID: string;
    strDiscogsID: string;
    strWikidataID: string;
    strWikipediaID: string;
    strGeniusID: null;
    strLyricWikiID: null;
    strMusicMozID: string;
    strItunesID: null;
    strAmazonID: null;
    strLocked: string;
}
