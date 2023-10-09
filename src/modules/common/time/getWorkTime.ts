import getDateFormat from './getDateFormat'
import getTimeFromDates from './getTimeFromDates'
import isToday from './isToday'

// i18n
import { useTranslation } from 'react-i18next'

export interface IGetWorkTimeParams {
  lang: string
  t: ReturnType<typeof useTranslation>['t']
  startDate: Date
  endDate: Date
}

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
