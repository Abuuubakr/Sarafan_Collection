import { StaticImageData } from "next/image"
import { catalogSliceType } from "./catalogSliceType"

export type cartPicture =  StaticImageData


export type Order = {
    order : cartPicture[],
    totalPrice : number
}

export type User = {
    email : string,
    password : string,
    orders : Order[]
}