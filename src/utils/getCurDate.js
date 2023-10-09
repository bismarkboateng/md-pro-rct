
export const getDate = () => {
    const currentDate = new Date();

    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let month

    switch(currentMonth) {
        case 1:
            month = "Jan"
            break
        case 2:
            month = "Feb"
            break
        case 3:
            month = "March"
            break
        case 4:
            month = "April"
            break
        case 5:
            month = "May"
            break
        case 6:
            month = "June"
            break
        case 7:
            month = "July"
            break
        case 8:
            month = "Aug"
            break
        case 9:
            month = "Sept"
            break
        case 10:
            month = "Oct"
            break
        case 11:
            month = "Nov"
            break
        case 12:
            month = "Dec"
            break
    }

    const date = `${month} ${currentDay}`

    return date
}
