import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../redux/reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
   return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
