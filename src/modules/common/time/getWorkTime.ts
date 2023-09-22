import getDateFormat from './getDateFormat'
import getTimeFromDates from './getTimeFromDates'
import isToday from './isToday'

const getWorkTime = (startDate: Date, endDate: Date) => {
  const startDateStr = getDateFormat(startDate)
  const endDateStr = !isToday(endDate) ? getDateFormat(endDate) : 'Present'
  const timeStr = getTimeFromDates(startDate, endDate)

  return `${startDateStr} - ${endDateStr} (${timeStr})`
}

export default getWorkTime
