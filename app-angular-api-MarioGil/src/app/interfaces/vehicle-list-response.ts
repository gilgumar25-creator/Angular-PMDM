export interface VehicleListResponse {

    count: number
    next: string
    previous: string
    results: Vehicle[]


}

export interface Vehicle{

    name: string
    model: string
    manufacturer: string 
    costo: number
    longitud: number
    max_atmosphering_speed: number
    crew: number 
    passengers: number
    capacidad: number
    consumables: string
    clase: string 
    films: string
    url:string


}
