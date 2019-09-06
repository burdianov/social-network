export const updateObjectInArray = (items, itemId, objectPropertyName, newObjectProps) => {
    return items.map(item => {
        if (item[objectPropertyName] === itemId) {
            return {...item, ...newObjectProps};
        }
        return item;
    })
}