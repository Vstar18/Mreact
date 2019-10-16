import * as React from "react";
// import "./index.less";
import { NavLink } from "react-router-dom";
import { Menu,Icon } from 'antd';
import menus from '@pages/menus';

const { useState} = React;
const { SubMenu } = Menu;

const Nav = () => {
  
  const [menues, setMenues] = useState(menus);
  const [current, setCurrent] = useState(JSON.parse(window.sessionStorage.getItem('navCurrent')) || ['5176']);
  const [openKey, setOpenKey] = useState(JSON.parse(window.sessionStorage.getItem('navOpenKey')) || ['5169']);
  const currentKeyChange = (key)=>{
    
  }
  const handleClick = (e)=>{
    let currentOpenKey = [],currentSelectedKey = [];
    currentOpenKey.push(e.keyPath[1]);
    currentSelectedKey.push(e.key);
    e.keyPath[2] ? currentOpenKey.push(e.keyPath[2]) : '';
    window.sessionStorage.navCurrent = JSON.stringify(currentSelectedKey);
    window.sessionStorage.navOpenKey = JSON.stringify(currentOpenKey);
    window.sessionStorage.removeItem('hasDate');
    setCurrent([...currentSelectedKey]);
    setOpenKey([...currentOpenKey]);
    // window.location.reload();
  }
  const showMenu = menues.map((menu, index) => {
    return (
      !menu.subNodeList ? 
      <Menu.Item key={menu.nodeId}>
        <NavLink activeClassName="active" to={menu.nodeUrl}>{menu.className}</NavLink>
      </Menu.Item>
      : (<SubMenu 
            key={menu.nodeId}
            title={
              <span>
                <Icon type={menu.imgName} />
                <span>{menu.className}</span>
              </span>
            }>
          {
            menu.subNodeList.map((subMenu, i) => {
              return (
                !subMenu.subMenues ? 
                <Menu.Item key={subMenu.nodeId}>
                  <NavLink activeClassName="active" to={subMenu.nodeUrl}>{subMenu.className}</NavLink>
                </Menu.Item>
                : (<SubMenu key={subMenu.nodeId} title={subMenu.className}>
                    {
                      subMenu.subMenues.map((subMenu, i) => {
                        return (
                          <Menu.Item onClick={()=>currentKeyChange(subMenu.nodeId)} key={subMenu.nodeId}>
                            <NavLink activeClassName="active" to={subMenu.nodeUrl}>{subMenu.className}
                            </NavLink>
                          </Menu.Item>)
                      })
                    }
                  </SubMenu>)
              )
            })
          }
          
        </SubMenu>)
    )
  });

  return (
    <div className="components-nav"> 
      <Menu
        theme={"dark"}
        onClick={(e)=>handleClick(e)}
        defaultOpenKeys={openKey}
        selectedKeys={current}
        mode="inline"
        >
        { showMenu }
      </Menu>
    </div>
  );
}
export default Nav;