import * as React from 'react';
import { Route, Redirect, Switch, Router } from 'react-router-dom';
const { lazy, Suspense } = React;

const HomeComponent = lazy(() => import('@pages/Home'));
const Home = (props) => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props}></HomeComponent>
    </Suspense>
  )
};
const OrderListComponent = lazy(() => import('@pages/order/orderList'));
const OrderList = (props) => {
  return (
    <Suspense fallback={null}>
      <OrderListComponent {...props}></OrderListComponent>
    </Suspense>
  )
};
const DataReportListComponent = lazy(() => import('@pages/dataReport/dataReportList'));
const DataReportList = (props) => {
  return (
    <Suspense fallback={null}>
      <DataReportListComponent {...props}></DataReportListComponent>
    </Suspense>
  )
};

export default [
  {
    path:'/',
    component: Home,
    routes:[
      {
        path: "/",
        exact: true,
        render:  ()=> (
          <Redirect to={"/order/orderList"}/>
        )
      },
      {
        path: "/order/orderList",
        extra: true,
        key: 'home',
        component: OrderList
      },
      {
        path: "/dataReport/dataReportList",
        extra: true,
        key: 'order',
        component: DataReportList
      },
    ]
  }
]
