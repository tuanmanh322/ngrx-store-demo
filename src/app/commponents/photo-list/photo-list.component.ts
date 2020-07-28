import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PhotoModel} from '../../model/photo.model';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../store/state/app.state';
import * as photoAction from '../../store/action/photo.action';
import * as photoSelect from '../../store/selector/photo.selector';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  $photoList: Observable<PhotoModel[]>;
  $error: Observable<string>;

  constructor(
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    console.log('--start list- component call action :');
    this.store.dispatch(new photoAction.LoadAllPhoto());
    this.$photoList = this.store.pipe(select(photoSelect.loadAllPhoto));
    console.log('--effects return data to  action');
    this.$error = this.store.pipe(select(photoSelect.getError));
  }

  delete(id: number) {
    if (confirm('You are sure delete this ???')) {
      console.log('--start delete- component call action :');
      this.store.dispatch(new photoAction.DeleteOnePhoto(id));
    }
  }

  edit(photo: PhotoModel) {
    console.log('--start edit- component call action :');
    this.store.dispatch(new photoAction.LoadOnePhotoById(photo.id));
  }
}
