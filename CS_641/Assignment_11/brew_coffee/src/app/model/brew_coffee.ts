export interface CoffeeSync {
    appMessages: Messages;
    socialMedia: Social;
    appURL: URL;
}

export interface Social {
    gitCodeURL: string;
    LinkedInURL: string;
    portfolioURL: string;
    twitterURL: string;
    traktTvURL: string;
    lastFmURL: string;
    spotifyURL: string;

}

export interface URL {
    reportURL: string;
    reportErrorURL: string;
    emailURL: string;
}


export interface Messages {
    appTodayMsg: string;
    greetMsg: string;
    errorMsg: string;
}




