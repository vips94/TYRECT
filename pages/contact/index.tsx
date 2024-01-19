import React, { useState, useRef, useEffect } from "react";
import styles from "./contact.module.scss";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import Button from "@/components/elements/button";
import { useRouter } from "next/router";
import { message } from "antd";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as any;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as any;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_ID as any;

const Contact = () => {
  const router = useRouter();
  const [messageApi,contextHolder] = message.useMessage();
  const [status, setStatus] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("") as any;
  const [enteredEmail, setEnteredEmail] = useState("") as any;
  const [enteredMessage, setEnteredMessage] = useState("") as any;

  const userNameChangeHandler = (e: any) => {
    setEnteredUserName(e.target.value);
  };

  const emailChangeHandler = (e: any) => {
    setEnteredEmail(e.target.value);
  };

  const messageChangedHandler = (e: any) => {
    setEnteredMessage(e.target.value);
  };

  let field = "";

  const submitHandler = async (e: any) => {
    e.preventDefault();
    console.log(serviceId,templateId,publicKey)
    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )
      .then((res) => {
        setEnteredUserName("");
        setEnteredEmail("");
        setEnteredMessage("");
        messageApi.open({
          type: "success",
          content: "Message is Successfully Sent",
          duration: 5,
        });
        setTimeout(()=>{
          router.push('/')
        },5000)
        
      })
      .catch((err) => {
        console.log(err);
        setStatus("Something went wrong");
      });
  };

  return (
    <>
    {contextHolder}
    <div className={styles["contact-section"]}>
      <div className={styles["container"]}>
        <div className={styles["form-container"]}>
          <h1>Contact Us</h1>
          <form className={styles.form} onSubmit={submitHandler} name="Form">
            <p className={styles.status} style={{ color: "red" }}>
              {status}
            </p>
            <input
              className={styles.name}
              value={enteredUserName}
              type="text"
              name="from_name"
              onChange={userNameChangeHandler}
              id="userName"
              placeholder="Name *"
              required
            ></input>
            <input
              className={styles.email}
              value={enteredEmail}
              onChange={emailChangeHandler}
              type="email"
              name="reply_to"
              id="email"
              placeholder="Email *"
              required
            ></input>
            <textarea
              className={styles.message}
              value={enteredMessage}
              name="message"
              onChange={messageChangedHandler}
              id="message"
              placeholder="Message *"
              required
            ></textarea>
            <Button htmlType="submit">Send Message</Button>
          </form>
          {/* <Form
            ref={formRef}
            // form={form}
            name="horizontal_login"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="user_name"
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
              name="user_email"
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
          </Form> */}
        </div>
        <img
          src="./images/footerCTA/Footer_Cta2.svg"
          alt="more"
          className={styles["hero-image"]}
        />
      </div>
    </div>
    </>
    
  );
};

export default Contact;
