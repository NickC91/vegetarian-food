export const rowalizer = (array, item_for_row = 3) => {
  const rowsNumber = Math.ceil(array.length / item_for_row)
  return Array.from({ length: rowsNumber }, (_, num) => {
    let start = num * item_for_row
    let end = start + item_for_row
    return array.slice(start, end)
  })
}