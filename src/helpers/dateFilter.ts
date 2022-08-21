import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    let now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for (let item in list) {
        if (
            list[item].date.getFullYear() === parseInt(year) && (list[item].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[item])
        }
    }
    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

export const addZeroToDate = (number: number): string => number < 10 ? `0${number}` : `${number}`
// if(number < 10){
//     return `0${number}`
// }
// else{
//     return `${number}`
// }

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) - 1]} - ${year}`
}

export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}


