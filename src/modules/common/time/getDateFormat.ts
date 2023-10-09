const getDateFormat = (lang: string, date: Date): string => {
  const shortMonth = date
    .toLocaleString(lang, { month: 'short' })
    .toLocaleLowerCase()
  const fullYear = date.getFullYear()

  return `${shortMonth}. ${fullYear.toString()}`
}

export default getDateFormat
