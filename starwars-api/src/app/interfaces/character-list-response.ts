export interface CharacterListResponse {

    count: number 
    next: string 
    previous: string
    results: Character[]
    
}


export interface Character {

    id: number
    name: string 
    url: string 


}
