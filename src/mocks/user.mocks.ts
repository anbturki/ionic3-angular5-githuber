import { User } from '../models/user.interface'

const userList: User[] = [
    {
        name: 'Ali turki',
        location: 'Giza, EG',
        company: 'syscrew',
        bio: 'I love #JAVASCRIPT',
        avatar_url: 'https://www.w3schools.com/w3images/avatar5.png',
        email: 'ali@example.com'
    },
    {
        name: 'Mahmoud Shokry',
        location: 'Giza, EG',
        company: 'EBNI',
        bio: 'I love #AI',
        avatar_url: 'https://www.w3schools.com/w3images/avatar4.png',
        email: 'msn@example.com'
    }
]

export const USER_LIST = userList;