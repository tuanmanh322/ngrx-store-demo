import {Action} from '@ngrx/store';
import {PhotoModel} from '../../model/photo.model';
import {Update} from '@ngrx/entity';

// init type for action
export const LOAD_ALL_PHOTO = ' LOAD ALL PHOTO';
export const LOAD_ALL_PHOTO_SUCCESS = ' LOAD ALL PHOTO SUCCESS';
export const LOAD_ALL_PHOTO_ERROR = ' LOAD ALL PHOTO ERROR';

export const LOAD_ONE_PHOTO_ID = ' LOAD ONE PHOTO';
export const LOAD_ONE_PHOTO_ID_SUCCESS = ' LOAD ONE PHOTO SUCCESS';
export const LOAD_ONE_PHOTO_ID_ERROR = ' LOAD ONE PHOTO ERROR';

export const CREATE_ONE_PHOTO = ' CREATE ONE PHOTO';
export const CREATE_ONE_PHOTO_SUCCESS = ' CREATE ONE PHOTO SUCCESS';
export const CREATE_ONE_PHOTO_ERROR = '  CREATE ONE PHOTO ERROR';

export const EDIT_ONE_PHOTO = '  EDIT ONE PHOTO';
export const EDIT_ONE_PHOTO_SUCCESS = '  EDIT ONE PHOTO SUCCESS';
export const EDIT_ONE_PHOTO_ERROR = '  EDIT ONE PHOTO ERROR';

export const DELETE_ONE_PHOTO = '  SUCCESS ONE PHOTO ';
export const DELETE_ONE_PHOTO_SUCCESS = '  SUCCESS ONE PHOTO SUCCESS';
export const DELETE_ONE_PHOTO_ERROR = '  SUCCESS ONE PHOTO ERROR';


// init action
export class LoadAllPhoto implements Action {
  readonly type = LOAD_ALL_PHOTO;
}

export class LoadAllPhotoSuccess implements Action {
  readonly type = LOAD_ALL_PHOTO_SUCCESS;

  constructor(
    public payload: PhotoModel[]
  ) {
    console.log('--- start action LOAD_ALL_PHOTO_SUCCESS payload:', payload);
  }
}

export class LoadAllPhotoError implements Action {
  readonly type = LOAD_ALL_PHOTO_ERROR;

  constructor(
    public payload: any
  ) {
    console.log('--- start action LOAD_ALL_PHOTO_ERROR payload:', payload);
  }
}

export class LoadOnePhotoById implements Action {
  readonly type = LOAD_ONE_PHOTO_ID;

  constructor(
    public payload: number
  ) {
    console.log('--start action to LoadOnePhotoById id: ', payload);
  }
}

export class LoadOnePhotoByIdSuccess implements Action {
  readonly type = LOAD_ONE_PHOTO_ID_SUCCESS;

  constructor(
    public payload: PhotoModel
  ) {
    console.log('--start action to LoadOnePhotoByIdSuccess payload: ', payload);
  }
}

export class LoadOnePhotoByIdError implements Action {
  readonly type = LOAD_ONE_PHOTO_ID_ERROR;

  constructor(
    public payload: string
  ) {
    console.log('--start action to LoadOnePhotoByIdError payload: ', payload);
  }
}


export class CreateOnePhoto implements Action {
  readonly type = CREATE_ONE_PHOTO;

  constructor(
    public payload: PhotoModel
  ) {
    console.log('--- start action CREATE_ONE_PHOTO payload:', payload);
  }
}

export class CreateOnePhotoSuccess implements Action {
  readonly type = CREATE_ONE_PHOTO_SUCCESS;

  constructor(
    public payload: PhotoModel
  ) {
    console.log('--- start action CREATE_ONE_PHOTO_SUCCESS payload:', payload);
  }
}

export class CreateOnePhotoError implements Action {
  readonly type = CREATE_ONE_PHOTO_ERROR;

  constructor(
    public payload: string
  ) {
    console.log('--- start action CREATE_ONE_PHOTO_ERROR payload:', payload);
  }
}

export class EditOnePhoto implements Action {
  readonly type = EDIT_ONE_PHOTO;

  constructor(
    public payload: PhotoModel
  ) {
    console.log('--- start action EDIT_ONE_PHOTO payload:', payload);
  }
}

export class EditOnePhotoSuccess implements Action {
  readonly type = EDIT_ONE_PHOTO_SUCCESS;

  constructor(
    public payload: Update<PhotoModel>
  ) {
    console.log('--- start action EDIT_ONE_PHOTO_SUCCESS payload:', payload);
  }
}

export class EditOnePhotoError implements Action {
  readonly type = EDIT_ONE_PHOTO_ERROR;

  constructor(
    public payload: string
  ) {
    console.log('--- start action EDIT_ONE_PHOTO_ERROR payload:', payload);
  }
}

export class DeleteOnePhoto implements Action {
  readonly type = DELETE_ONE_PHOTO;

  constructor(
    public payload: number
  ) {
    console.log('--- start action DELETE_ONE_PHOTO payload:', payload);
  }
}

export class DeleteOnePhotoSuccess implements Action {
  readonly type = DELETE_ONE_PHOTO_SUCCESS;

  constructor(
    public payload: number
  ) {
    console.log('--- start action DELETE_ONE_PHOTO_SUCCESS payload:', payload);
  }
}

export class DeleteOnePhotoError implements Action {
  readonly type = DELETE_ONE_PHOTO_ERROR;

  constructor(
    public payload: string
  ) {
    console.log('--- start action DELETE_ONE_PHOTO_ERROR payload:', payload);
  }
}

export type PhotoAction =
  | LoadAllPhoto
  | LoadAllPhotoSuccess
  | LoadAllPhotoError
  | LoadOnePhotoById
  | LoadOnePhotoByIdSuccess
  | LoadOnePhotoByIdError
  | CreateOnePhoto
  | CreateOnePhotoSuccess
  | CreateOnePhotoError
  | EditOnePhoto
  | EditOnePhotoSuccess
  | EditOnePhotoError
  | DeleteOnePhoto
  | DeleteOnePhotoSuccess
  | DeleteOnePhotoError
  ;
