import { Component } from '@angular/core';
import {Input} from '@angular/core'
import {Repository} from '../../models/repository.interface';
@Component({
  selector: 'repository',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {
  @Input() repository: Repository;
}
