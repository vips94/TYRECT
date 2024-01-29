import React, {FC} from "react";
import styles from "./buildSoftware.module.scss";
import BuildItem from "./buildItem";
import LottieVideo from "../LottieVideo";
import { cloudBgVideo } from "@/public/LottieFiles/CloudBg";

type WhyBuildSoftwareWithUsProps = {
  data: any;
}

const WhyBuildSoftwareWithUs:FC<WhyBuildSoftwareWithUsProps> = (props) => {
  const {data} = props;
  return (
    <section className={styles["why-build-section"]}>
      {
        <LottieVideo 
            animationData = {cloudBgVideo.cloud2Faster}
            wrapperClass = {styles['hero-lottie']}
        />
      }
      <div className={styles["why-build-content"]}>
        <div className={styles["title-section"]}>
          <h1 className={styles.title}>{data?.whyBuild?.title}</h1>
        </div>
        <div className={styles["list-block"]}>
          {data?.whyBuildItem?.map((item:any) => {
            return (
              <BuildItem
                title={item?.title}
                subTitle={item?.subTitle}
                isTextDark={item?.isTextDark}
                number={item?.number}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBuildSoftwareWithUs;
