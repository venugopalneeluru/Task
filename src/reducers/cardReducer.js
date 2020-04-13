import { cloneDeep } from "lodash";

const initialState = {
  trackingData: [],
  truckData: [],
  shipmentData: [],
};

export default (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case "FETCH_TRACKING": {
      newState = cloneDeep(state);
      newState.trackingData = action.payload;
      return newState;
    }
    case "FETCH_TRUCK": {
      newState = cloneDeep(state);
      newState.truckData = action.payload;
      return newState;
    }
    case "FETCH_SHIPMENT": {
      newState = cloneDeep(state);
      newState.shipmentData = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

// by adding the default: return state, we are ensuring it never returns undefined and therefore breaks. We are just saying, if there is an action called FETCH_POSTS then return its payload and add it to state. If not, well just return the state as it is.
