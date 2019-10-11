import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd';
import { HashRouter } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import GlobalModel from './GlobalModel';
// import App from './App';

//全局通用数据存放
const globalModel = new GlobalModel();

const App = () => {
    return <div>开发环境配置完成</div>
}

ReactDom.render(
    <Provider globalModel={ globalModel }>
        <ConfigProvider locale={zh_CN}>
            <HashRouter>
                <App />
            </HashRouter>
        </ConfigProvider>
    </Provider>,
    document.querySelector('#root')
);

