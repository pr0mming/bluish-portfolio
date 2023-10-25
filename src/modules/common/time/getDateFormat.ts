/**
 * This util is to get the string date compounded of the short month + the year given the date as parameter
 * @param {string} lang the language to get the month name
 * @param date the date to convert
 * @returns the string date
 */
const getDateFormat = (lang: string, date: Date): string => {
  const shortMonth = date
    .toLocaleString(lang, { month: 'short' })
    .toLocaleLowerCase()
  const fullYear = date.getFullYear()

  return `${shortMonth}. ${fullYear.toString()}`
}

export default getDateFormat
