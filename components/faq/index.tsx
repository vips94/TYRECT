import React from "react";
import { homePage } from "@/constant/homePage";
import styles from "./faq.module.scss";
import FAQItem from "./faqItem";
import LottieVideo from "../LottieVideo";
import { cloudBgVideo } from "@/public/LottieFiles/CloudBg";

const FAQ = () => {
  return (
    <section className={styles["faq-section"]}>
      {
        <LottieVideo 
            animationData = {cloudBgVideo.cloud2Faster}
            wrapperClass = {styles['hero-lottie']}
        />
      }
      <div className={styles["faq-content"]}>
        <div className={styles["title-section"]}>
          <h1 className={styles.title}>{homePage?.faq.title}</h1>
        </div>
        <div className={styles["list-block"]}>
          {homePage?.faqItem.map((item) => {
            return (
              <FAQItem
                title={item?.title}
                content={item?.content}
                isTextDark={item?.isTextDark}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
