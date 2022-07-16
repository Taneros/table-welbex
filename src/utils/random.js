export const randomNum = (min = 0, max = 55) => {
  let num = Math.random() * (max - min) + min

  return Math.floor(num)
}

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = ''
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
