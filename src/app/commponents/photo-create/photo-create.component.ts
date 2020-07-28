import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/state/app.state';
import * as photoAction from '../../store/action/photo.action';
import {PhotoModel} from '../../model/photo.model';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.css']
})
export class PhotoCreateComponent implements OnInit {
  photoForm: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.photoForm = this.fb.group({
      albumId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      thumbnailUrl: new FormControl('', [Validators.required]),
    });
  }

  onAdd() {
    if (this.photoForm.valid) {
      const photoEdit: PhotoModel = {
        albumId: this.photoForm.get('albumId').value,
        thumbnailUrl: this.photoForm.get('thumbnailUrl').value,
        url: this.photoForm.get('url').value,
        title: this.photoForm.get('title').value,
      };
      // call action
      console.log('---start add-component to call CreateOnePhoto ');
      this.store.dispatch(new photoAction.CreateOnePhoto(photoEdit));
      this.photoForm.reset();
    }
  }
}
