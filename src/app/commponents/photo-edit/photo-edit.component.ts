import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../store/state/app.state';
import * as photoSelect from '../../store/selector/photo.selector';
import * as photoAction from '../../store/action/photo.action';
import {Observable} from 'rxjs';
import {PhotoModel} from '../../model/photo.model';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  photoForm: FormGroup;
  idPhoto: number;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit(): void {
    this.photoForm = this.fb.group({
      albumId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      thumbnailUrl: new FormControl('', [Validators.required]),
    });

    // get data from selectors
    const photo: Observable<PhotoModel> = this.store.pipe(select(photoSelect.getCurrentPhoto));

    photo.subscribe(data => {
      if (data) {
        this.photoForm.patchValue({
          albumId: data.albumId,
          title: data.title,
          url: data.url,
          thumbnailUrl: data.thumbnailUrl
        });
        this.idPhoto = data.id;
      }
    });
  }

  updatePhoto() {
    if (this.photoForm.valid) {
      const photoEdit: PhotoModel = {
        id: this.idPhoto,
        albumId: this.photoForm.get('albumId').value,
        thumbnailUrl: this.photoForm.get('thumbnailUrl').value,
        url: this.photoForm.get('url').value,
        title: this.photoForm.get('title').value,
      };
      // call action
      this.store.dispatch(new photoAction.EditOnePhoto(photoEdit));
      this.photoForm.reset();
    }
  }

}
