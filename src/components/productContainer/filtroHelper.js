
export const filterArray = (array, filter) => {

    if (filter !== 'Todo') {
        console.log(array)
        console.log(filter)
        const arrayResult = array.filter(element => element.__EMPTY_5 === filter)
        return arrayResult
    } else {
        return array
    }
}

export const sortArray = (array, sort) => {
    //console.log(sort)

    switch (sort) {
        case 'Alfabetico':
            //console.log(array.sort())
            return array.sort((a, b) => {
                return a.__EMPTY_4.localeCompare(b.__EMPTY_4)
            })

        case 'Precio menor a mayor':
            return array.sort((a, b) => a.__EMPTY_7 - b.__EMPTY_7)

        case 'Precio mayor a menor':
            array.sort((a, b) => b.__EMPTY_7 - a.__EMPTY_7)

        default:
            return array;
    }
}
