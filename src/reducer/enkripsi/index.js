import {
    CREATE_ENCRYPTION
} from "../../api/encryption";

const initialState = {
    createEncryptionResult: false,
    createEncryptionLoading: false,
    createEncryptionError: false,
};

const encryptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ENCRYPTION:
            return {
                ...state,
                createEncryptionResult: action.payload.data,
                createEncryptionLoading: action.payload.loading,
                createEncryptionError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default encryptionReducer;