const generateId = (arr: Array<any>): number => {
  if (arr.length > 0) {
    return arr.at(-1).id + 1
  }
  return 1
}

export default generateId
