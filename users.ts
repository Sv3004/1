export interface IUser{
    userid: string,
    name: string,
    gender: string
}

class User implements IUser{
    gender: string;
    name: string;
    userid: string;


    constructor(userid: string, name: string, gender: string) {
        this.gender = gender;
        this.name = name;
        this.userid = userid;
    }
}

export function getUsersArray() {
    return [
        new User(  '127e4567--12d3-a458-426614174000',  'John', 'man'),
        new User( '127e4567-e89a-12f3-a458-327395154000',  'Anna', 'woman')
    ];
}