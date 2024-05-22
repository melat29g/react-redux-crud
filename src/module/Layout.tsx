import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalNav from "./GlobalNav";
import Style from "./LayoutStyle.module.css";
import "react-toastify/dist/ReactToastify.css";
import { Header, ContentSection, MainContent } from '../styles/LayoutStyles';

const Layout = () => {
  return (
    <>
      <Header className={Style.header}>
        <header>Welcome!</header>
      </Header>

      <ContentSection className={Style["content-section"]}>
        <GlobalNav />
        <MainContent className={Style["main-content"]}>
          <Outlet />
        </MainContent>
      </ContentSection>
      <ToastContainer />
    </>
  );
};

export default Layout;














/*
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalNav from './GlobalNav';
import Style from './LayoutStyle.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { Header, ContentSection, MainContent } from '../styles/LayoutStyles';

const Layout = () => {
  return (
    <>
      <Header className={Style.header}>
        <header>Welcome !</header>
      </Header>

      <ContentSection className={Style['content-section']}>
        <GlobalNav />
        <MainContent className={Style['main-content']}>
          <Outlet />
        </MainContent>
      </ContentSection>
      <ToastContainer />
    </>
  );
};

export default Layout;

*/

