/**
 * It's just to check if the date is today :)
 * @param date the date
 * @returns a boolean if is today or not
 */
const isToday = (date: Date) => {
  const today = new Date()

  return today.toDateString() === date.toDateString()
}

export default isToday
