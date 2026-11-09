export interface EpisodeListResponse {

    info: Info;
    results: Episode[];

}

export interface Info {

    count: number ;
    pages: number ;
    next: string 
    prev: string 

}

export interface Episode {

    id: number ;
    name: string ;
    url: string ;

}
