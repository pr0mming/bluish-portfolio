const getDateFormat = (date: Date): string => {
  const shortMonth = date
    .toLocaleString('default', { month: 'short' })
    .toLocaleLowerCase()
  const fullYear = date.getFullYear()

  return `${shortMonth}. ${fullYear.toString()}`
}

export default getDateFormat
