import "./index.less";
import * as React from "react";
import fetch from '@utils/fetch';
const { lazy, Suspense ,useEffect,useState} = React;

const Head = () =>{
  const [userInfo, setUserInfo] = useState({userName:''});
  const getUserInfo = ()=> {
    // let timestamp = Date.parse(new Date());
    fetch(`/report/user/info`).then(res => {
      if (res.errorCode == 0) {
        const name = res.result.name;
        setUserInfo({...userInfo,userName:name});
        window.sessionStorage.setItem('login', JSON.stringify(res.result));
      }
      else if (res.data.errorCode = 50000){
          if (res.data.loginUrl) {
              window.location.href = res.data.loginUrl;
              // window.location.href = res.data.loginUrl+'?redirect=http://localhost-isp.yiche.com/isp-static/#/index/home';
          }
          else {
              // window.location.href = "https://a.yiche.com/static_common-portal/login.html?redirect=http://dev-isp.yiche.com:8080/#/index/home";
          }
      }
    });
  }
  const handleLogoutClick = ()=>{
    fetch("/common-portal/common/portal/logout",{},true).then(res => {
      if (res.errorCode === 0) {
        window.location = window.location.origin + "/static_common-portal/login.html?redirect=" + window.location.href;
      }
    });
  }
  useEffect(()=>{
    getUserInfo();
  },[])
    return (
      <div className="head-component">
        <div className="logo">
          <img src={require('@assets/img/header_logo.png')} />
          <span className="log_tit">反作弊系统</span>
          <p></p>
        </div>
        <div className="left">
          <div className="user">
            欢迎您, <span className="name">{userInfo.userName}</span>
          </div>
          <div 
            className="logout"
            onClick={()=>handleLogoutClick()}
          >
            <span>退出</span>
          </div>
        </div>
      </div>
    )
  }
  
export default Head;