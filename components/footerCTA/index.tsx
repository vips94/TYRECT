import React, { FC } from "react";
import styles from "./footerCTA.module.scss";
import LottieVideo from "../LottieVideo";
import Button from "../elements/button";
import { cloudBgVideo } from "@/public/LottieFiles/CloudBg";

type FooterCTAProps = {
  title: string;
  clickProps: any;
  imageName: string;
  isAnimatedImage?: boolean;
  animationData?: any;
  isTextDark?: boolean;
  isShowCloud?: boolean;
};

const FooterCTA: FC<FooterCTAProps> = (props) => {
  const {
    title,
    clickProps,
    imageName,
    isAnimatedImage = false,
    animationData = {},
    isTextDark = false,
    isShowCloud = false,
  } = props;
  return (
    <section className={styles["footerCTA-section"]}>
      {
        isShowCloud && (
            <LottieVideo 
                animationData = {cloudBgVideo.cloud2Faster}
                wrapperClass = {styles['hero-lottie']}
            />
        )
      }
      <div className={styles["footerCTA-content"]}>
        <div className={`${styles["content-text"]}`}>
          <h1
            className={`${styles["heading-one"]} ${
              isTextDark ? styles["text-dark"] : ""
            }`}
          >
            {title}
          </h1>
          <Button linkProps={{
                path: '/contact',
                target: '_self'
            }}>
                { `Let's Connect`}
            </Button>
        </div>
        {imageName &&
          (isAnimatedImage ? (
            <LottieVideo
              animationData={animationData}
              wrapperClass={styles["hero-image"]}
            />
          ) : (
            <img src={imageName} alt="more" className={styles["hero-image"]} />
          ))}
      </div>
    </section>
  );
};

export default FooterCTA;
