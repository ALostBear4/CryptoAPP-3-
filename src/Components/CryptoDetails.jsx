import React,{ useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";

import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclaimationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../Services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

export default function CryptoDetails() {
  const { coinId } = useParams();
  const [timePeriod, setTimeperiod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data);
  




  return <div>CryptoDetails {coinId}</div>;
}