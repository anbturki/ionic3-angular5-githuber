import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;
  repositories: Repository[];
  constructor(private github: GithubServiceProvider, private navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInfo(): void {
    this.github.getUserInfo(this.username).subscribe(data => {
      this.user = data
    })
    this.github.getRepository(this.username).subscribe(data => this.repositories = data)
    // this.github.mockGetUserInfo(this.username).subscribe((data: User) => {this.user = data})
    // this.github.mockGetRepositoryInfo(this.username).subscribe((data: Repository[]) => {this.repositories = data})
  }
  ionViewDidLoad() {
    this.username = this.navParams.get('username')
    if (this.username) {
      this.getUserInfo()
    }
  }

}
