import { Role } from '../enums/role.enum';

export class User{
    _id?:string;
    email: string;
    password: string;
    role: Role;
    displayName?: string;
    profilePhotoUrl?: string;
    createdAt?:Date;
    updatedAt?:Date;
    __v?:number;
}