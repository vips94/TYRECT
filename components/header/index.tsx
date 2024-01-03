import React, { useState } from "react";
import { Layout, Menu } from "antd";
import styles from "./header.module.scss";
import Link from "next/link";
import { getNavItems } from "@/constant/navItems";
import Button from "../elements/button";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [currentKey, setCurrentKey] = useState("");

  const handleMenuItemClick = (e: any) => {
    setCurrentKey(e.key);
  };

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
            items={getNavItems(setCurrentKey)}
            triggerSubMenuAction="hover"
          />
          <div className={styles["desktop-button"]}>
            <Button
              linkProps={{
                path: "/contact",
                target: "_blank",
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

export default Header;
