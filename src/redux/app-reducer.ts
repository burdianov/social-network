import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = () : InitializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS
});

// ---------- Thunk creators --------- //

export const initializeApp = () => (dispatch: any) => {
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
