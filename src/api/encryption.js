import axios from "axios";
export const CREATE_ENCRYPTION = "CREATE_ENCRYPTION";


export const createEncryption = (data) => (dispatch) => {
    dispatch({
        type: CREATE_ENCRYPTION,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });
    axios({
        method: "POST",
        url: "localhost:8000/v1/base64/encode",
        data: data,
        timeout: 120000,
    })
    .then((response) => {
        dispatch({
            type: CREATE_ENCRYPTION,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
            },
        })
    })
    .catch((error) => {
        dispatch({
            type: CREATE_ENCRYPTION,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
            }
        })
    })
}
