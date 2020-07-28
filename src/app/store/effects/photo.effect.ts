import {Injectable} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as photoActions from '../action/photo.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {PhotoModel} from '../../model/photo.model';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

// same service
@Injectable()
export class PhotoEffect {
  constructor(
    private photoService: PhotoService,
    private $action: Actions
  ) {
  }

  // init effect
  @Effect()
    // init variable of data type action
    // pipe filter data
  $LoadAllPhoto: Observable<Action> = this.$action.pipe(
    // ofType filter Action Type
    ofType<photoActions.LoadAllPhoto>(photoActions.LOAD_ALL_PHOTO)
    // mergeMap synchronized data
    , mergeMap((action: photoActions.LoadAllPhoto) => {
      console.log('--effects done to LoadAllPhotoSuccess  ofType mergeMap  action:', action);
      // pipe filter data after then get it from api
      return this.photoService.get('/photo').pipe(
        // browse the array then Call ActionSuccess (action will be call reducers)
        map(
          (photo: PhotoModel[]) => {
            console.log('--effects done to LoadAllPhotoSuccess  ofType mergeMap map photo:', photo);
            return new photoActions.LoadAllPhotoSuccess(photo);
          }
        ),
        // if have error effect will be call actionError same case
        // Of : Emit variable amount of values in a sequence and then emits a complete notification
        catchError(err => of(new photoActions.LoadAllPhotoError(err)))
      );
    })
  );
  @Effect()
  $loadPhotoById: Observable<Action> = this.$action.pipe(
    ofType<photoActions.LoadOnePhotoById>(photoActions.LOAD_ONE_PHOTO_ID),
    mergeMap((action: photoActions.LoadOnePhotoById) => {
      console.log('--start effect to get photoById with action :  ', action);
      return this.photoService.get('/photo/' + action.payload).pipe(
        map((photoById: PhotoModel) => {
          console.log('--current photo by id done effect to get photoById with photoById :  ', photoById);
          return new photoActions.LoadOnePhotoByIdSuccess(photoById);
        }),
        catchError(err => of(new photoActions.LoadAllPhotoError(err)))
      );
    }),
  );


  @Effect()
  $createNewPhoto: Observable<Action> = this.$action.pipe(
    ofType<photoActions.CreateOnePhoto>(photoActions.CREATE_ONE_PHOTO),
    map((action: photoActions.CreateOnePhoto) => {
        console.log('---start effect to CREATE_ONE_PHOTO ofType->map action :', action);
        return action.payload;
      }
    ),
    mergeMap((photo: PhotoModel) => {
      console.log('---effect to CREATE_ONE_PHOTO ofType->map->mergeMap photo: ', photo);
      return this.photoService.post('/photo', photo).pipe(
        map(
          (newPhoto: PhotoModel) => {
            console.log('---effect done create newPhoto: ', photo);
            return new photoActions.CreateOnePhotoSuccess(newPhoto);
          }
        ),
        catchError(err => of(new photoActions.CreateOnePhotoError(err)))
      );
    })
  );
  @Effect()
  $editPhoto: Observable<Action> = this.$action.pipe(
    ofType<photoActions.EditOnePhoto>(photoActions.EDIT_ONE_PHOTO),
    map((action: photoActions.EditOnePhoto) => {
      console.log('---start effect to EDIT_ONE_PHOTO action;', action);
      return action.payload;
    }),
    mergeMap((photo: PhotoModel) => {
      console.log('---edit effect call service to EDIT_ONE_PHOTO action;', photo);
      return this.photoService.put('/photo/' + photo.id, photo).pipe(
        map(
          (updatePhoto: PhotoModel) => {
            console.log('--- edit photo effect done! updatePhoto: ' , updatePhoto);
            return new photoActions.EditOnePhotoSuccess({
              id: updatePhoto.id,
              changes: updatePhoto
            });
          }
        ),
        catchError(err => of(new photoActions.EditOnePhotoError(err)))
      );
    })
  );
  @Effect()
  $deletePhoto: Observable<Action> = this.$action.pipe(
    ofType<photoActions.DeleteOnePhoto>(photoActions.DELETE_ONE_PHOTO),
    map((action: photoActions.DeleteOnePhoto) => {
      return action.payload;
    }),
    mergeMap(
      (id: number) => {
        return this.photoService.delete('/photo/' + id).pipe(
          map(() => {
            return new photoActions.DeleteOnePhotoSuccess(id);
          }),
          catchError(err => of(new photoActions.DeleteOnePhotoError(err)))
        );
      }
    )
  );
}




