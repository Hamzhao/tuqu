/*export const currentAddress = state => {

  return state.address ? state.address : null
}*/
//
// export const getCenter = state => {
//   return state.center ? state.center : false
// }

export const getAddress = state => {
  return state.address ? state.address : ''
}

export const getHouseSource = state => {
  return state.houseSource ? state.houseSource : ''
}

export const getStartPlace = state => {
  return state.startPlace ? state.startPlace : ''
}

export const getEndPlace = state => {
  return state.endPlace ? state.endPlace : ''
}

export const getTourismKeyword = state => {
  return state.tourismKeyword ? state.tourismKeyword : ''
}
