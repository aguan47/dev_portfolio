export const initialInputState = {
    "name": {
        value: "",
        type: "text",
        isDisabled: false,
        placeholder: "Your first name"
    },
    "email": {
        value: "",
        type: "email",
        isDisabled: false,
        placeholder: "Your email address"
    },
    "message": {
        value: "",
        type: "textarea",
        isDisabled: false,
        placeholder: "Your message"
    },
}

export const inputReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_VALUE":
            return {...state, [action.payload.name]: { ...state[action.payload.name], value: action.payload.value } };
        case "DISABLE":
            return {...state, [action.payload.name]: { ...state[action.payload.name], isDisabled: true } };
        case "ENABLE":
            return {...state, [action.payload.name]: { ...state[action.payload.name], isDisabled: false } };
        case "ERASE_VALUE":
            return {...state, [action.payload.name]: { ...state[action.payload.name], value: "" } };
        default:
            return state;
    }
}