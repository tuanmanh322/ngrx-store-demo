import * as photoEffects from '../effects/photo.effect';
import * as fromApp from '../state/app.state';
import {Store} from '@ngrx/store';

export class PhotoDataSource {
  constructor(
    private store: Store<fromApp.AppState>
  ) {
  }

}
