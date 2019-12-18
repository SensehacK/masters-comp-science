export interface CoffeeSync {
    appSettings: AppSettings;
    socialMedia: Social;
    appMessages: Messages;
}

export interface AppSettings {
    background_color: string;
    font_color: string;
    font_size: number;
    blankURL: string;
    coffee_slider_val: number;
    coffee_water_val: number;
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

export interface Messages {
    appTodayMsg: string;
    greetMsg: string;
    errorMsg: string;
    sourceCodeURL: string;
    reportErrorURL: string;
    emailURL: string;
}