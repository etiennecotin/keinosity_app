import {UPDATE_SHOWMENU,} from './ActionTypes'

const initialState = {
    showMenu: false
};

const globalStore = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SHOWMENU:
            return {
                ...state,
                showMenu: action.value
            };
        default:
            return initialState
    }
};

export default globalStore