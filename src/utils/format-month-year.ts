export const formatMonthYear = (date: string, locales?: string | string[]) => {
  const toDate = new Date(date)
  return new Intl.DateTimeFormat(locales, {
    month: 'long',
    year: 'numeric',
  }).format(toDate) // 'September 2022'
}
