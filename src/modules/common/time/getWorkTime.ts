// i18n
import { useTranslation } from 'react-i18next'

import getDateFormat from './getDateFormat'
import getTimeFromDates from './getTimeFromDates'
import isToday from './isToday'

export interface IGetWorkTimeParams {
  lang: string
  t: ReturnType<typeof useTranslation>['t']
  startDate: Date
  endDate: Date
}

/**
 * This util get string date format + the string timespan between two dates
 * @param params the object with the two target dates
 * @returns the string date
 */
const getWorkTime = (params: IGetWorkTimeParams) => {
  const { lang, t, startDate, endDate } = params

  const startDateStr = getDateFormat(lang, startDate)
  const endDateStr = !isToday(endDate)
    ? getDateFormat(lang, endDate)
    : t('present').charAt(0).toUpperCase() + t('present').slice(1)

  const timeStr = getTimeFromDates({ t, startDate, endDate })

  return `${startDateStr} - ${endDateStr} (${timeStr})`
}

export default getWorkTime
