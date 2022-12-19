export type DimensionsType = {
    thickness: number,
    width: number,
    length: number
}

export type ProductType = {
    id: number,
    created: number,
    species: string,
    grade: string,
    drying_method: string,
    usage: string,
    dimensions: DimensionsType[],
    treatment: string | null,
}