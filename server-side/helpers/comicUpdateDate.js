function comicUpdateDate(comicDate) {
  let now = new Date()
  let targetDate = new Date(comicDate)
  let timeDifference = now - targetDate // Hasil berupa miliseconds

  let seconds = Math.floor(timeDifference / 1000) // Miliseconds -> Seconds
  let minutes = Math.floor(seconds / 60) // Seconds -> Minutes
  let hours = Math.floor(minutes / 60)
  let days = Math.floor(hours / 24)

  if (days > 1) return `${days} days ago`
  else if (days === 1) return `1 day ago`
  else if (hours >= 1) return `${hours} hours ago`
  else if (minutes >= 1) return `${minutes} minutes ago`
  else return `${seconds} seconds ago`
}

module.exports = comicUpdateDate