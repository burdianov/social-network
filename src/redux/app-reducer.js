import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

// ---------- Action creators --------- //

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
});

// ---------- Thunk creators --------- //

export const initializeApp = () => dispatch => {
    const promise = dispatch(getAuthUserData());
    // other potential dispatch (second)
    // const promise2 = disptach(getThemeColor());
    // the promise returned by the second dispatched shall be
    // placed within the square brackets below

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
};

export default appReducer;
