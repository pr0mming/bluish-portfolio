// i18n
import { useTranslation } from 'react-i18next'

export interface IGetTimeFromDatesParams {
  t: ReturnType<typeof useTranslation>['t']
  startDate: Date
  endDate: Date
}

const getTimeFromDates = (params: IGetTimeFromDatesParams): string => {
  const { t, startDate, endDate } = params

  let yearDiff = endDate.getFullYear() - startDate.getFullYear()
  let monthDiff = endDate.getMonth() - startDate.getMonth() + 1

  if (monthDiff < 0) {
    yearDiff--
    monthDiff += 12
  }

  if (yearDiff === 0 && monthDiff < 1) {
    return t('new')
  } else {
    let result = ''

    if (yearDiff > 0) {
      result += yearDiff === 1 ? t('oneYear') : `${yearDiff} ${t('years')}`
      if (monthDiff > 0) {
        result += ` ${t('and')} `
      }
    }

    if (monthDiff > 0) {
      result += monthDiff === 1 ? t('oneMonth') : `${monthDiff} ${t('months')}`
    }

    return result
  }
}

export default getTimeFromDates
