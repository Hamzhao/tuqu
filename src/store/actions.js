import * as types from './mutation-types'

export const setAddress = ({ commit }, payload) => { // {commit}：直接把commit对象传递过来
   let address = payload;
   commit(types.ADDRESS,{ address });
}

export const setHouseSource = ({ commit }, payload) => {
   let houseSource = payload;
   commit(types.HOUSESOURCE,{ houseSource })
}

export const setStartPlace = ({ commit }, payload) => { // {commit}：直接把commit对象传递过来
  let startPlace = payload;
  commit(types.STARTPLACE,{ startPlace });
}

export const setEndPlace = ({ commit }, payload) => { // {commit}：直接把commit对象传递过来
  let endPlace = payload;
  commit(types.ENDPLACE,{ endPlace });
}

export const setTourismKeyword = ({ commit }, payload) => {
  let tourismKeyword = payload;
  commit(types.TOURISMKEYWORD,{ tourismKeyword })
}

