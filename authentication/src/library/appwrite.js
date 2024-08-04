import { Account, Client } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66aedfdc0030148c8192');


export const account =new Account(client);

export {ID} from "appwrite";