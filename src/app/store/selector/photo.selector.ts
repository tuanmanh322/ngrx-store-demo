import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as photoReducer from '../reducer/photo.reducer';

// init base sub selector
export const featurePhotoSelector = createFeatureSelector<photoReducer.initPhotoType>('photo');

// create selector for component call
export const loadAllPhoto = createSelector(
  featurePhotoSelector,
  photoReducer.photoAdapter.getSelectors().selectAll
);
// create selector for component call
export const getError = createSelector(
  featurePhotoSelector,
  (state: photoReducer.initPhotoType) => state.error
);

export const getPhotoLoading = createSelector(
  featurePhotoSelector,
  (state: photoReducer.initPhotoType) => state.loading
);
export const getPhotoLoaded = createSelector(
  featurePhotoSelector,
  (state: photoReducer.initPhotoType) => state.loaded
);

// PhotoNumberId
export const getPhotoNumberId = createSelector(
  featurePhotoSelector,
  (state: photoReducer.initPhotoType) => state.selectedPhotoId
);

// get currentPhoto with id
export const getCurrentPhoto = createSelector(
  featurePhotoSelector,
  getPhotoNumberId,
  state => state.entities[state.selectedPhotoId]
);
