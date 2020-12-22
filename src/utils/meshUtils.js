import COLORS from '../consts/colors'
import _ from 'lodash'

const COLOR_LIST = Object.keys(COLORS)

export function stackNewBox(boxes, setBoxes) {
  const newBox = getNewBox(boxes.length)
  const newBoxes = boxes.map((box) => ({ ...box, move: false })).concat(newBox)
  setBoxes(newBoxes)
}

function getNewBox(total) {
  return {
    move: true,
    color: getRandomColor(),
    position: [_.random(0, 2), total * 0.5 - 3, 0],
  }
}

function getRandomColor() {
  const colorName = _.shuffle(COLOR_LIST)[0]
  return COLORS[colorName]
}
