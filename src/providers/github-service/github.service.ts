import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { USER_LIST } from '../../mocks/user.mocks';
import { User } from '../../models/user.interface';
import { Http, Response } from '@angular/http'
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'
@Injectable()

export class GithubServiceProvider {
  private baseUrl: string = 'https://api.github.com/users';
  private reposUrl: string = 'repos'
  constructor(private http: Http) {

  }
  getUserInfo(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json() || 'Server error.'))
  }

  getRepository (username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do((data: Response) => console.log(data))
    .map((data: Response) => data.json())
    .catch((error: Response) => Observable.throw(error || 'server error!'))
  }
  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }
  mockGetRepositoryInfo(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }
}
