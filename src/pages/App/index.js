import * as React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd';
import { HashRouter } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import Routes from "../route";

//全局通用数据存放
const App = () =>  {
  return (
    <Provider>
      <HashRouter>
          <Routes />
      </HashRouter>
    </Provider>
  );
}
export default App;