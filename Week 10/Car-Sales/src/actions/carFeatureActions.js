export const REMOVE_ITEM = "REMOVE_ITEM"
export const removeItem = (feature) => {
    console.log("removeItem action clicked!")
    return { type: REMOVE_ITEM, payload: feature}
}

export const ADD_ITEM = "ADD_ITEM"
export const addItem = (feature) => {
    console.log("addItem action clicked!")
    return { type: ADD_ITEM, payload: feature }
}