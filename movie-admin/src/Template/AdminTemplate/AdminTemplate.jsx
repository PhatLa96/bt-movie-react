import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Fragment, useState } from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { HomeOutlined } from "@material-ui/icons";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { TOKEN } from "../../util/Settings/config";

const AdminTemplate = (props) => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const { Component, ...restRoute } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { adminLogin } = useSelector((state) => state.LoginReducer);
  console.log(adminLogin);
  const history = useHistory();
  const onCollapse = (collapsed) => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };
  const checkLogout = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem("login");
    history.push("/");
    window.location.reload();
  };

  const menu = (
    <Menu>
      <Menu.Item
        key="2"
        onClick={checkLogout}
        key="2"
        icon={<LogoutOutlined />}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo py-3">
                  <img
                    src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                    alt="cyberlearn"
                    width={200}
                    height={50}
                    className="px-2"
                  />
                </div>
                <Menu
                  theme="dark"
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  defaultOpenKeys={["sub1"]}
                >
                  <SubMenu key="sub1" icon={<HomeOutlined />} title="Dashboard">
                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <NavLink to="/admin/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                      <NavLink to="/admin/users/adduser">Add user</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                  </Menu.Item> */}
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div></div>
                      <div>
                        <BellOutlined
                          style={{ width: 100, fontSize: "23px" }}
                        />
                        <Avatar
                          className="bg-primary text-white"
                          name={adminLogin.taiKhoan}
                          size="40"
                          round={true}
                        />
                        <Dropdown.Button
                          style={{
                            marginLeft: "12px",
                            fontSize: "17px",
                            backgroundColor: "#001529",
                            border: "none",
                          }}
                          overlay={menu}
                          icon={<UserOutlined />}
                          className="bg-black text-white"
                        >
                          {adminLogin.hoTen}
                        </Dropdown.Button>
                      </div>
                    </div>
                  </Menu>
                </Header>

                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}></Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
export default AdminTemplate;
