import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
import { Table,  Modal, Button, Input, Form, Select, Space, Tag, Popconfirm, } from 'antd';
import echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import 'antd/dist/antd.css';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavSearch,
  Addition,
  SearchWrapper,
} from './style';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'toothpaste',
    name: record.name
  }),
};


const getOption = (data, max) => ({
  title: {
    text: '',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    confine: true,
    inverse: true,
    axisPointer: {
      type: 'cross',
      animation: false,
      label: {
        backgroundColor: '#27ae60'
      }
    }
  },
  legend: {
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 20
  },
  grid: {
    right: '10%',
    left: '10%',
    height: '60%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {onZero: true},
    data: []
  },
  yAxis: {
    name: '',
    type: 'value',
    max: max
  },
  series: {
    type: 'line',
    symbol: "none",
    color: '#83de9f',
    hoverAnimation: false,
    data: data,
    areaStyle: {
      normal: {
        opacity: 0.3,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ade1cd'
          },
          {
            offset: 1,
            color: '#fff'
          }]
        )
      }
    }
  },
  animationDuration: 2000,
  animationEasing: 'quadraticOut'
})

const tailLayout = {
  wrapperCol: { offset: 15, span: 16 },
};

const onFinishFailed = errorInfo => {
  console.log(errorInfo);
};

const onGenderChange = (value) => {
  console.log(value);
};

class Header extends Component {
  render() {
    const { focused, list, visible, handleInputFocus, handleInputBlur, showModal, handleSubmit, handleCancel, handleDelete, handleSearch, chartData, ranDom, max } = this.props;
    const netList = list.toJS();
    const chartDatas = chartData.toJS();
    const { Column } = Table;
    const { Option } = Select;

    const onFinish = values => {
      const arr = [];
      values.key = netList.length + 1;
      arr.push(values);
      handleSubmit(arr);
    };

    return (
      <>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={300}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onClick={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                  onKeyDown={(event) => handleSearch(event)}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe662;</i>
            </SearchWrapper>
          </Nav>
          <Addition>
          <Button type="primary" style={{marginTop: '10px', marginRight: '20px', borderRadius: '5px'}} onClick={ranDom}>Random</Button>
          <Button type="primary" style={{marginTop: '10px', marginRight: '20px', borderRadius: '5px'}} onClick={showModal}>
            Create
          </Button>
          <Modal title="Create Product" {...tailLayout} visible={visible}
            htmlType="submit" onOk={onFinish} onCancel={handleCancel}
          >
          <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item label="name" name="name"
              rules={[{ required: true, message: 'Please input product name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="type" name="type"
              rules={[{ required: true, message: 'Please input product type' }]}
            >
              <Select
                placeholder="Select a option"
                onChange={onGenderChange}
                allowClear
               >
                <Option value="daily necessities">daily necessities</Option>
                <Option value="electronic product">electronic product</Option>
                <Option value="foodstuff">foodstuff</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Quantity" name="quantity"
              rules={[{ required: true, message: 'Please input product quantity' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Price" name="price"
              rules={[{ required: true, message: 'Please input product price' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ float: 'right'}}>Submit</Button>
            </Form.Item>
          </Form>
          </Modal>
          </Addition>
        </HeaderWrapper>

        <Table
          dataSource={netList}
          rowSelection={{type: 'checkbox', ...rowSelection}}
        >
        <Column align="center" title="Name" dataIndex="name" key="name" />
        <Column align="center" title="Type" dataIndex="type" key="type" />
        <Column align="center" title="Quantity" dataIndex="quantity" key="quantity" />
        <Column
          align="center"
          title="Price"
          dataIndex="price"
          key="price"
          render={price => (
            <Tag color="blue" key={price}>$ {price}</Tag>
          )}
        />
        <Column
          align="center"
          title="Operation"
          key="operation"
          render={(text, record) => (
            netList.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key - 1)}>
                <Space size="middle">
                  <Button type="danger" size="small">delete</Button>
                </Space>
              </Popconfirm>
            ) : null
          )}
        />
        </Table>
        <ReactEcharts style={{width: '100%', height: '800px'}} option={getOption(chartDatas, max)} />
      </>
    )
  }

  componentDidMount() {
    this.props.getListData();
  }

  componentWillUnmount() {
    document.onkeydown = null;
  }
};

const mapStateToProps = state => {
  return {
    focused: state.getIn(['products', 'focused']),
    visible: state.getIn(['products', 'visible']),
    filter: state.getIn(['products', 'filter']),
    list: state.getIn(['products', 'list']),
    chartData: state.getIn(['products', 'chartData']),
    max: state.getIn(['products', 'max']),
  }
};

const mapDispatchToProps = dispatch => ({
  handleInputFocus: list => dispatch(actionCreators.serachFocus()),
  handleInputBlur: state => dispatch(actionCreators.searchBlur()),
  getListData: action => dispatch(actionCreators.getList()),
  showModal: visible => dispatch(actionCreators.showModal()),
  handleSubmit: data => dispatch(actionCreators.handleSubmit(data)),
  handleCancel: visible => dispatch(actionCreators.handleCancel()),
  onFinish: values => dispatch(actionCreators.onFinish()),
  handleDelete: item => dispatch(actionCreators.handleDelete(item)),
  handleSearch: event => (event.keyCode === 13) && dispatch(actionCreators.handleSearch(event.target.value)),
  ranDom: action => dispatch(actionCreators.ranDom()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
