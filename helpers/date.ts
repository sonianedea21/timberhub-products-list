export const getDate = (date: number) => {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const time = new Date(1970, 0, 1);
    time.setSeconds(date);
    return `${time.getDate()}. ${month[time.getMonth()]} ${time.getFullYear()}`
}