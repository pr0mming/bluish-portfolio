const getTimeFromDates = (startDate: Date, endDate: Date): string => {
  let yearDiff = endDate.getFullYear() - startDate.getFullYear()
  let monthDiff = endDate.getMonth() - startDate.getMonth() + 1

  if (monthDiff < 0) {
    yearDiff--
    monthDiff += 12
  }

  if (yearDiff === 0 && monthDiff < 1) {
    return "I'm new here!"
  } else {
    let result = ''

    if (yearDiff > 0) {
      result += yearDiff === 1 ? '1 year' : `${yearDiff} years`
      if (monthDiff > 0) {
        result += ' and '
      }
    }

    if (monthDiff > 0) {
      result += monthDiff === 1 ? '1 month' : `${monthDiff} months`
    }

    return result
  }
}

export default getTimeFromDates
