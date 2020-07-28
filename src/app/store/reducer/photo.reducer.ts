import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {PhotoModel} from '../../model/photo.model';
import * as fromApp from '../state/app.state';
import * as ptActions from '../action/photo.action';
import {PhotoAction} from '../action/photo.action';

// init  state type
// initPhotoType will be run global project
// note: call adapter in another function then embedded state type after this we will get some data.
// tslint:disable-next-line:class-name
export interface initPhotoType extends EntityState<PhotoModel> {
  // u can additional entities state properties
  selectedPhotoId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

// rebuild AppState
export interface PhotoAppState extends fromApp.AppState {
  photo: initPhotoType;
}

// create adapter
export const photoAdapter: EntityAdapter<PhotoModel> = createEntityAdapter<PhotoModel>();

// init state
export const initPhotoState: initPhotoType = {
  error: '',
  loading: false,
  loaded: false,
  selectedPhotoId: null,
  ids: [],
  entities: {}
};

// rebuild state
export const initialState = photoAdapter.getInitialState(initPhotoState);


export function PhotoReducer(
  state = initialState,
  action: ptActions.PhotoAction
): initPhotoType {
  switch (action.type) {
    case ptActions.LOAD_ALL_PHOTO_SUCCESS: {
      console.log('--start reducer LOAD_ALL_PHOTO_SUCCESS-----------');
      return photoAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case ptActions.LOAD_ALL_PHOTO_ERROR: {
      console.log('--start reducer LOAD_ALL_PHOTO_ERROR-----------');
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    }
    case ptActions.CREATE_ONE_PHOTO_SUCCESS: {
      console.log('--start reducer CREATE_ONE_PHOTO_SUCCESS ');
      return photoAdapter.addOne(action.payload, state);
    }
    case ptActions.CREATE_ONE_PHOTO_ERROR: {
      console.log('--start reducer CREATE_ONE_PHOTO_ERROR ');
      return {
        ...state,
        error: action.payload
      };
    }
    case ptActions.EDIT_ONE_PHOTO_SUCCESS: {
      console.log('--start reducer EDIT_ONE_PHOTO_SUCCESS ');
      return photoAdapter.updateOne(action.payload, state);
    }
    case ptActions.EDIT_ONE_PHOTO_ERROR: {
      console.log('--start reducer EDIT_ONE_PHOTO_SUCCESS ');
      return {
        ...state,
        error: action.payload
      };
    }
    case ptActions.DELETE_ONE_PHOTO_SUCCESS: {
      console.log('--start reducer DELETE_ONE_PHOTO_SUCCESS ');
      return photoAdapter.removeOne(action.payload, state);
    }
    case ptActions.DELETE_ONE_PHOTO_ERROR: {
      console.log('--start reducer DELETE_ONE_PHOTO_ERROR ');
      return {
        ...state,
        error: action.payload
      };
    }
    case ptActions.LOAD_ONE_PHOTO_ID_SUCCESS: {
      console.log('--start reducer LOAD_ONE_PHOTO_ID_SUCCESS ');
      return photoAdapter.addOne(action.payload, {
        ...state,
        selectedPhotoId: action.payload.id
      });
    }
    case ptActions.LOAD_ONE_PHOTO_ID_ERROR: {
      console.log('--start reducer LOAD_ONE_PHOTO_ID_SUCCESS ');
      return {
        ...state,
        error: action.payload
      };
    }
    default: {
      return {...state};
    }

  }
}
