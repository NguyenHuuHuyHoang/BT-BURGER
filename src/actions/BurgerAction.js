export const addItemAction = (itemName, isAdd = true) => {
    return {
        type: "ADD_ORDER_ITEM",
        itemName,
        isAdd,
    }
}