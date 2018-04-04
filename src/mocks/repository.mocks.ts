import { Repository } from '../models/repository.interface'
import { USER_LIST } from './user.mocks'

const repositoryList: Repository[] = [
    {
        name: 'ionic 3 camera',
        description: 'this plugin help ionic developers to how to integrate mobile camera within Ionic 3',
        owner: USER_LIST[0]
    }, 
    {
        name: 'ionic 3 alarm',
        description: 'this plugin help ionic developers to how to integrate mobile alarm within Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'ionic 3 SMS',
        description: 'this plugin help ionic developers to how to integrate SMS within Ionic 3',
        owner: USER_LIST[0]
    }
]

export const REPOSITORY_LIST = repositoryList;