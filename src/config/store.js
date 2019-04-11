import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import globalStore from "./globalStore";

const rootReducer = combineReducers({
    global: globalStore,
    form: formReducer
});
const store = createStore(rootReducer);

export default store;