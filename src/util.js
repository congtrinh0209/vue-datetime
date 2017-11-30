import moment from 'moment'

export function weekdays (momentLocale, mondayFirst = false) {
  const weekdays = moment.localeData(momentLocale).weekdaysMin()
  if (mondayFirst) {
    return weekdays.slice(1).concat(weekdays[0])
  }
  return weekdays
}

export function monthDays (month, year, mondayFirst = false, heightFixed = false) {
  const monthDate = moment([year, month, 1])
  let firstDay = monthDate.day() - (mondayFirst ? 1 : 0)

  if (firstDay === -1) {
    firstDay = 6
  }
  let num_of_days = monthDate.daysInMonth() + firstDay
  let days = (new Array(heightFixed ? 35 : num_of_days)).fill(null)
  let data = days.map((value, index) => {
    if(heightFixed){
      if(index >= num_of_days) {
        return null
      }
      if(num_of_days > 35 && index < num_of_days - 35) {
        return (35 + index + 1 - firstDay)
      }
    }
    if(index + 1 >= firstDay){
      return index + 1 - firstDay
    }
    return null
  })
  return data
}

export function years () {
  const currentYear = moment().year()
  let years = []

  for (let i = currentYear - 100; i < currentYear + 100; i++) {
    years.push(i)
  }

  return years
}

export function months () {
  return moment.months()
}

export function hours () {
  let hours = []

  for (let i = 0; i < 24; i++) {
    hours.push(i < 10 ? '0' + i : i)
  }

  return hours
}

export function minutes () {
  let minutes = []

  for (let i = 0; i < 60; i++) {
    minutes.push(i < 10 ? '0' + i : i)
  }

  return minutes
}
