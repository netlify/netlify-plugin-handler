import { formatDistance, subDays } from 'date-fns'

export async function onRequest() {
  const timePassed = formatDistance(subDays(new Date(), 3), new Date())
  console.log(timePassed)
}
