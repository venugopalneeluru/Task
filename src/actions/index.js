import { trackingData, truckData, shipmentData } from "../apis/json";

//Fetching Tracking Data
export const fetchTracking = () => (dispatch) => {
  dispatch({
    type: "FETCH_TRACKING",
    payload: trackingData,
  });
};

//Fetching Truck Data
export const fetchTruck = () => (dispatch) => {
  dispatch({
    type: "FETCH_TRUCK",
    payload: truckData,
  });
};

//Fetching Shipment Data
export const fetchShipment = () => (dispatch) => {
  dispatch({
    type: "FETCH_SHIPMENT",
    payload: shipmentData,
  });
};
