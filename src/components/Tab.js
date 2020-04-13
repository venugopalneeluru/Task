import React, { Component } from "react";
import { Radio, Row, Col, Select, Input } from "antd";
import "./CardList/CardList.css";
const { Option } = Select;
const { Search } = Input;
function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "All",
    };
  }
  onChange = (e) => {
    this.setState({ size: e.target.value });
  };
  render() {
    const { size } = this.state;
    return (
      <div>
        <Row style={{ margin: "10px 0px 0px 10px" }}>
          <Col span={5}>
            <Select
              defaultValue="Tracking"
              style={{ width: 280 }}
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col span={19}>
            <Search
              placeholder="Input Search text"
              onSearch={(value) => console.log(value)}
            />
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px 0px 10px" }}>
          <Col span={16}>
            <Radio.Group
              value={size}
              onChange={this.onChange}
              style={{
                marginBottom: 16,
                boxShadow: "0px 0px 2px 1px rgba(181,175,181,1)",
              }}
            >
              <Radio.Button value="All" style={{ width: "170px" }}>
                All(50)
              </Radio.Button>
              <Radio.Button value="FTL" style={{ width: "170px" }}>
                FTL(26)
              </Radio.Button>
              <Radio.Button value="LCL" style={{ width: "169px" }}>
                LCL(16)
              </Radio.Button>
              <Radio.Button value="Courier" style={{ width: "168px" }}>
                Courier(10)
              </Radio.Button>
              <Radio.Button value="Container" style={{ width: "168px" }}>
                Container(03)
              </Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={7}>
            <Radio.Group
              value={size}
              onChange={this.onChange}
              style={{
                marginBottom: 16,
                boxShadow: "0px 0px 2px 1px rgba(181,175,181,1)",
              }}
            >
              <Radio.Button value="Outbound" style={{ width: "190px" }}>
                Outbound(30)
              </Radio.Button>
              <Radio.Button value="Inbound" style={{ width: "200px" }}>
                Inbound(16)
              </Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
        <Row style={{ margin: "0px 10px 10px 10px" }}>
          <Col span={8}>
            <Select
              showSearch
              style={{
                width: 400,
                boxShadow: "0px 0px 2px 1px rgba(181,175,181,1)",
              }}
              placeholder="Select transporter"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              showSearch
              style={{
                width: 400,
                boxShadow: "0px 0px 2px 1px rgba(181,175,181,1)",
              }}
              placeholder="Select plant/depot"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              showSearch
              style={{
                width: 400,
                boxShadow: "0px 0px 2px 1px rgba(181,175,181,1)",
              }}
              placeholder="Select item"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tab;
