import { ImageModel } from './ImageModel'

export type ProjectModel = {
    id: number
    name: string
    img: ImageModel
    description: string
    repositoryUrl: string
    productionUrl: string | null
}