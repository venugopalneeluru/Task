export const trackingData = [
  {
    name: "Total Trips",
    count: 54,
    amount: "100Cr",
    percentRaise: "8%",
    percentDip: "9.9%",
    backgroundColor: "#00008B",
    borderRadius: "15px",
  },
  {
    name: "On-Time",
    count: 26,
    amount: "47Cr",
    percentRaise: "8%",
    percentDip: "9.9%",
    backgroundColor: "#006400",
    borderRadius: "15px",
  },
  {
    name: "Delayed",
    count: 12,
    amount: "27.2Cr",
    percentRaise: "8%",
    percentDip: "9.9%",
    backgroundColor: "#A9A9A9",
    borderRadius: "15px",
  },
  {
    name: "Deviated",
    count: 3,
    amount: "9.3Cr",
    percentRaise: "8%",
    percentDip: "9.9%",
    backgroundColor: "#000000",
    borderRadius: "15px",
  },
  {
    name: "Missing",
    count: 7,
    amount: "9.3Cr",
    percentRaise: "8%",
    percentDip: "-9.9%",
    backgroundColor: "#B22222",
    borderRadius: "15px",
  },
  {
    name: "Un-Tracked",
    count: 3,
    amount: "3.2Cr",
    percentRaise: "8%",
    percentDip: "9.9%",
    backgroundColor: "#1E90FF",
    borderRadius: "15px",
  },
];

export const truckData = [
  {
    name: "Missing Truck",
    amount: "5 Cr",
    id: "123456",
    transporter: "VRL Logistics",
    from: "Mumbai",
    to: "Bangalore",
    driverDetails: "Rahul (+91-986543210)",
    lastTracked: "Kolhapur (26-Oct-2017, 11:12 PM)",
  },
  {
    name: "Detention Truck",
    amount: "2 Cr",
    id: "123456",
    transporter: "VRL Logistics",
    from: "Mumbai",
    to: "Bangalore",
    driverDetails: "Rahul (+91-986543210)",
    lastTracked: "Kolhapur (26-Oct-2017, 11:12 PM)",
  },
];

export const shipmentData = [
  {
    name: "High value shipment",
    status: "On time",
    amount: "25 Cr",
    id: "123456",
    transporter: "VRL Logistics",
    item: "TMT steel bars",
    driverDetails: "Rahul (+91-986543210)",
    trackStatus: [
      {
        place: "Mumbai, Maharashtra",
        time: "22 Oct, 9:45 AM",
      },
      {
        place: "Place, State",
        time: "25 Oct, 9:45 AM",
      },
      {
        place: "Place, State",
        time: "22 Oct, 9:45 AM",
      },
      {
        place: "Place, State",
        time: "22 Oct, 9:45 AM",
      },
    ],
    moreDetails: "No Data Available",
    unTrackedShipments: 3,
    total: "10",
    topTransporter: "VRL Logistics",
  },
];
