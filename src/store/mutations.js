import Vue from 'vue'
import * as types from './mutation-types'

/*export default {
  [types.ADDRESS] (state, { address }) {
    console.log(address,"mutations");
    state.address = address.nowAddress;
    //Vue.set(state,address,address.nowAddress)
  }

}*/

export default {
  [types.ADDRESS] (state, { address }) {
    state.address = address;
  },
  [types.HOUSESOURCE] (state, { houseSource }) {
    state.houseSource = houseSource;
  },
  [types.STARTPLACE] (state, { startPlace }) {
    state.startPlace = startPlace;
  },
  [types.ENDPLACE] (state, { endPlace }) {
    state.endPlace = endPlace;
  },
  [types.TOURISMKEYWORD] (state, { tourismKeyword }) {
    state.tourismKeyword = tourismKeyword;
  }
}
