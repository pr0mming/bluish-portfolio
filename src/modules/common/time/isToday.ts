const isToday = (date: Date) => {
  const today = new Date()

  return today.toDateString() === date.toDateString()
}

export default isToday
