import React, { useState, useEffect, useRef } from "react";
import { Layout, Menu } from "antd";
import styles from "./header.module.scss";
import Link from "next/link";
import { getNavItems , getMobileNavItem} from "@/constant/navItems";
import Button from "../elements/button";
import menuAnimation from "@/public/LottieFiles/menu.json";
import Lottie from "lottie-react";
import { arrowRight } from "../icons/svgIcons";

const { Header: AntHeader } = Layout;
let mobile = null as any;
const Header = () => {
  const [currentKey, setCurrentKey] = useState("");

  const handleMenuItemClick = (e: any) => {
    setCurrentKey(e.key);
    setShowMenu(false);
  };
  const hamburgerRef = useRef(null) as any;
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    mobile = window?.matchMedia("(max-width: 860px)");
    resizeProjectList(mobile);

    mobile.addEventListener("change", resizeProjectList);

    return () => {
      mobile.removeEventListener("change", resizeProjectList);
    };
  }, []);

  const resizeProjectList = (e: any) => {
    if (mobile.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const toggleMenu = (isTrue: boolean) => {
    setTimeout(()=>{
      setShowMenu(isTrue);
    },200)
    
    if (isTrue) {
      hamburgerRef.current.playSegments([0, 15], true, "menuAnim");
      
    } else {
      hamburgerRef.current.playSegments([16, 0], true, "menuAnim");
    }
  };

  const MobileNavBar = () => {
    return (
      <Layout className={`${styles["mobile-header"]}`}>
        <section className={styles["nav-bar"]}>
          <AntHeader>
          <Menu
              className={styles["desktop-menu"]}
              mode="inline"
              disabledOverflow
              onClick={handleMenuItemClick}
              // selectedKeys={[currentKey]}
              items={getMobileNavItem(currentKey)}
              expandIcon={arrowRight}
              forceSubMenuRender
            />
            
            {/* <div className={styles["desktop-button"]}>
              <Button
                linkProps={{
                  path: "/contact",
                  target: "_self",
                }}
              >
                {`Let's Connect`}
              </Button>
            </div> */}
          </AntHeader>
        </section>
      </Layout>
    );
  };

  const DesktopNavBar = () => {
    return (
      <Layout className={styles["desktop-header"]}>
        <section className={styles["nav-bar"]}>
          <AntHeader>
            <Link href={"/"} className={styles.logo}>
              <img src="./images/logo.png" />
            </Link>
            <Menu
              className={styles["desktop-menu"]}
              mode="horizontal"
              disabledOverflow
              // onClick={handleMenuItemClick}
              // selectedKeys={[currentKey]}
              items={getNavItems(currentKey)}
              triggerSubMenuAction="hover"
            />
            <div className={styles["desktop-button"]}>
              <Button
                linkProps={{
                  path: "/contact",
                  target: "_self",
                }}
              >
                {`Let's Connect`}
              </Button>
            </div>
          </AntHeader>
        </section>
      </Layout>
    );
  };

  return (
    <>
      {isMobile && (
        <nav className={styles['nav-section']}>
          <Link href={"/"} className={styles.logo}>
            <img src="./images/logo.png" />
          </Link>
          <Lottie
            lottieRef={hamburgerRef}
            animationData={menuAnimation}
            className={styles.breadcrumb}
            loop={false}
            autoplay={false}
            onClick={() => toggleMenu(!showMenu)}
          />
        </nav>
      )}
      {isMobile && showMenu && <MobileNavBar />}
      {!isMobile && <DesktopNavBar />}
    </>
  );
};

export default Header;
