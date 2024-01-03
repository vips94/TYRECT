import React, { FC } from "react";
import styles from "./wowItem.module.scss";
import LottieVideo from "@/components/LottieVideo";

type WowItemProps = {
  isLeft?: boolean;
  title: string;
  subTitle?: string;
  isTextDark?: boolean;
  imageName: string;
  isAnimatedImage?: boolean;
};

const WowItem: FC<WowItemProps> = (props) => {
  const {
    isLeft = false,
    title,
    subTitle = "",
    isTextDark = false,
    imageName,
    isAnimatedImage = false,
  } = props;
  return (
    <div
      className={`${styles["list-content"]} ${
        isLeft ? styles["reverse-order"] : ""
      }`}
    >
      <div className={`${styles["content-text"]}`}>
        <h1
          className={`${styles["heading-one"]} ${
            isTextDark ? styles["text-dark"] : ""
          }`}
        >
          {title}
        </h1>
        {subTitle && (
          <p
            className={`${styles["text-large"]} ${
              isTextDark ? styles["text-dark"] : ""
            }`}
          >
            {subTitle}
          </p>
        )}
      </div>
      {imageName &&
        (isAnimatedImage ? (
          <LottieVideo
            animationData={imageName}
            wrapperClass={styles["hero-image"]}
          />
        ) : (
          <img src={imageName} alt="more" className={styles["hero-image"]} />
        ))}
    </div>
  );
};

export default WowItem;
