import {NgModule} from '@angular/core';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { PhotoCreateComponent } from './photo-create/photo-create.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {PhotoReducer} from '../store/reducer/photo.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PhotoEffect} from '../store/effects/photo.effect';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PhotoListComponent,
      },
    ]),
    // config store
    StoreModule.forFeature('photo', PhotoReducer),
    // config effects
    EffectsModule.forFeature([PhotoEffect])
  ],
  declarations: [PhotoListComponent, PhotoEditComponent, PhotoCreateComponent]
})
export class PhotoModule {

}
