import React, { useState } from "react";
import styles from "./contact.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import Button from "@/components/elements/button";

const Contact = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <div className={styles["contact-section"]}>
      <div className={styles["container"]}>
        <div className={styles["form-container"]}>
          <h1>Contact Us</h1>
          <Form
            form={form}
            name="horizontal_login"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please input message!" }]}
            >
              <Input.TextArea allowClear showCount 
                placeholder="Message"
              />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  htmlType="submit"
                >
                  Send Message
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
        <img
          src={"./images/footerCTA/Footer_CTA2.svg"}
          alt="more"
          className={styles["hero-image"]}
        />
      </div>
    </div>
  );
};

export default Contact;
