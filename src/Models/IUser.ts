export interface IUserCredentials {
    userId: string;
    password: string;
}

export interface IUser  extends IUserCredentials{
    firstName: string;
    lastName: string;
    emailId: string;
}
