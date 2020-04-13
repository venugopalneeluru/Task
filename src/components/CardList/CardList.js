import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "antd";
import {
  WarningOutlined,
  BoxPlotOutlined,
  QuestionCircleOutlined,
  WalletOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { fetchTracking, fetchTruck, fetchShipment } from "../../actions";
import { isEmpty } from "lodash";
import "./CardList.css";

class CardList extends React.Component {
  componentDidMount() {
    const { fetchTracking, fetchTruck, fetchShipment } = this.props;
    fetchTracking();
    fetchTruck();
    fetchShipment();
  }

  renderList() {
    let { trackingData } = this.props.cards;
    return (
      !isEmpty(trackingData) &&
      trackingData.map((element, key) => {
        return (
          <Col span={4} key={key}>
            <Card
              title={
                <div className="name_heading">
                  <span>{element.name}</span>
                </div>
              }
              bordered={true}
              style={{
                backgroundColor: `${element.backgroundColor}`,
                borderRadius: `${element.borderRadius}`,
              }}
            >
              <Row>
                <Col span={18} className="count">
                  {element.count}
                </Col>
                <Col span={6} className="amount">
                  {element.amount}
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col span={20} className="percentDip">
                  -{element.percentDip}
                </Col>
                <Col span={4} className="percentRaise">
                  +{element.percentRaise}
                </Col>
              </Row>
            </Card>
          </Col>
        );
      })
    );
  }
  renderTruckList() {
    let { truckData } = this.props.cards;
    return (
      !isEmpty(truckData) &&
      truckData.map((element, key) => {
        return (
          <Col span={12} key={key}>
            <Card
              title={
                element.name === "Missing Truck" ? (
                  <div className="MissingIcon">
                    <WarningOutlined style={{ paddingRight: "3px" }} />
                    {element.name}
                    <span className="Missingvalue">
                      Value:
                      <span>
                        <button className="value_btn">{element.amount}</button>
                      </span>
                    </span>
                  </div>
                ) : (
                  <div className="DetentionIcon">
                    <BoxPlotOutlined style={{ paddingRight: "3px" }} />
                    {element.name}
                    <span className="Detentionvalue">
                      Value:
                      <span>
                        <button className="value_btn">{element.amount}</button>
                      </span>
                    </span>
                  </div>
                )
              }
              bordered={true}
              style={{
                margin: "10px",
                boxShadow: "0px 0px 5px 1px rgba(181,175,181,1)",
              }}
            >
              <Row>
                <Col span={12}>
                  <h5>
                    <span className="TripId1">TripId : </span>
                    <span className="TripId">{element.id}</span>
                  </h5>
                  <h5>
                    <span className="TripId1">Transporter : </span>
                    <span className="TripId">{element.transporter}</span>
                  </h5>
                </Col>
                <Col span={12}>
                  <h5>
                    <span className="TripId1">From : </span>
                    <span className="TripId">{element.from}</span>
                  </h5>
                  <h5>
                    <span className="TripId1">To : </span>
                    <span className="TripId">{element.to}</span>
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <h5 className="TripId1">Driver Details : </h5>
                  <h5 className="TripId">{element.driverDetails}</h5>
                </Col>
                <Col span={12}>
                  <h5 className="TripId1">Last known Details : </h5>
                  <h5 className="TripId">{element.lastTracked}</h5>
                </Col>
              </Row>
            </Card>
          </Col>
        );
      })
    );
  }

  renderShipmentList() {
    let { shipmentData } = this.props.cards;
    return (
      !isEmpty(shipmentData) &&
      shipmentData.map((element, key) => {
        return (
          <Col span={24} key={key}>
            <Row>
              <Col span={12}>
                <Card
                  title={
                    <div className="Highvalueshipment">
                      <DollarCircleOutlined style={{ paddingRight: "3px" }} />
                      {element.name}
                      <span className="Highvalueshipmentontime">
                        <CheckCircleOutlined style={{ paddingRight: "3px" }} />
                        On time
                      </span>
                      <span className="Highvalueshipmentvalue">
                        Value:
                        <button className="value_btn">{element.amount}</button>
                      </span>
                    </div>
                  }
                  bordered={true}
                  style={{
                    margin: "10px",
                    boxShadow: "0px 0px 5px 1px rgba(181,175,181,1)",
                  }}
                >
                  <Row>
                    <Col span={12}>
                      <h5>
                        <span className="TripId1">TripId : </span>
                        <span className="TripId">{element.id}</span>
                      </h5>
                      <h5>
                        <span className="TripId1">Transporter : </span>
                        <span className="TripId">{element.transporter}</span>
                      </h5>
                      <h5 className="TripId1">Driver Details : </h5>
                      <h5 className="TripId">{element.driverDetails}</h5>
                      <h5 className="TripId1">ITEM : </h5>
                      <h5 className="TripId">{element.item}</h5>
                      <button className="btn_high">View More</button>
                    </Col>
                    <Col span={12}>
                      {element.trackStatus.map((status, index) => (
                        <Col key={index}>
                          <h5 className="TripId1">{status.place}</h5>
                          <h5 className="TripId">{status.time}</h5>
                        </Col>
                      ))}
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title={
                    <div className="DoYou">
                      <QuestionCircleOutlined />
                      Do You Know?
                    </div>
                  }
                  bordered={true}
                  style={{
                    margin: "10px",
                    boxShadow: "0px 0px 5px 1px rgba(181,175,181,1)",
                  }}
                >
                  <Row>
                    <Col span={18}>
                      <h5 className="DoYoupara">
                        There are 03 un-Trucked shipments.Start tracking for not
                        loosing them.
                      </h5>
                    </Col>
                    <Col span={6}>
                      <button className="btn_Do">Start tracking</button>
                    </Col>
                  </Row>
                </Card>

                <Card
                  title={
                    <div className="TransporterDetails">
                      <WalletOutlined />
                      Transporter Details
                    </div>
                  }
                  bordered={true}
                  style={{
                    margin: "10px",
                    boxShadow: "0px 0px 5px 1px rgba(181,175,181,1)",
                  }}
                >
                  <Row>
                    <Col span={9}>
                      <h5 className="TripId1">Total : </h5>
                      <h5 className="TripId">{element.id}</h5>
                    </Col>
                    <Col span={9}>
                      <h5 className="TripId1">Transporter : </h5>
                      <h5 className="TripId">{element.transporter}</h5>
                    </Col>
                    <Col span={6}>
                      <button className="btn_trans">View all</button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        );
      })
    );
  }
  render() {
    // console.log(this.props.cards);
    return (
      <Row>
        <Col span={24}>
          <Row>{this.renderList()}</Row>
          <Row>{this.renderTruckList()}</Row>
          <Row>{this.renderShipmentList()}</Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards };
};

export default connect(mapStateToProps, {
  fetchTracking,
  fetchTruck,
  fetchShipment,
})(CardList);
