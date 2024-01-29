import React, {FC} from "react";
import { homePage } from "@/constant/homePage";
import styles from "./wowFaster.module.scss";
import WowItem from "./wowItem";

type WowFasterProps = {
  data: any;
}

const WowFaster:FC<WowFasterProps> = (props) => {
  const {data} = props;
  return (
    <section className={styles["wow-faster-section"]}>
      <div className={styles["wow-faster-content"]}>
        <div className={styles["title-section"]}>
          <h1 className={styles.title}>{data?.wowFaster?.title}</h1>
        </div>
        <div className={styles["list-block"]}>
          {data?.wowItem?.map((item:any) => {
            return (
              <WowItem
                title={item?.title}
                subTitle={item?.subTitle}
                isTextDark={item?.isTextDark}
                imageName={item?.imageName}
                isAnimatedImage={item?.isAnimatedImage}
                isLeft={item?.isLeft}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WowFaster;
