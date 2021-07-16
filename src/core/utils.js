// Pure function
export const capitalize = (string) => {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const range = (start, end) => {
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, idx) => start + idx)
}

export const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export const isEqual = (prev, current) => {
  if (typeof prev === 'object' && typeof current === 'object') {
    return JSON.stringify(prev) === JSON.stringify(current)
  }
  return prev === current
}
