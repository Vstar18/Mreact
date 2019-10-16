import * as React from "react";
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import {HashRouter, Route} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import 'moment/locale/zh-cn';
import Routes from "../route";

//全局通用数据存放
const App = () =>  {
  return (
    <Provider>
      <HashRouter>
          { renderRoutes(Routes) }
      </HashRouter>
    </Provider>
  );
}
export default App;