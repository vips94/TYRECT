import React from "react";
import styles from "./network.module.scss";
import HeroSection from "@/components/heroSection";
import WowFaster from "@/components/wowFaster";
import FAQ from "@/components/faq";
import FooterCTA from "@/components/footerCTA";
import { networkPage } from "@/constant/networkPage";
import { useCaseAnimationData } from "@/public/LottieFiles/UseCase";
import WhyBuildSoftwareWithUs from "@/components/whyBuildSoftwareWithUs";

const Network = () => {

  return (
    <div className={styles["network-section"]}>
        <HeroSection
            title={networkPage?.hero?.title}
            subTitle={networkPage?.hero?.subTitle}
            tagProps={{
            text: networkPage?.hero?.tag,
            color: "black",
            }}
            backgroundProps={{ type: "lottie" }}
            linkProps={{
            label: networkPage?.hero?.btnLabel,
            href: "/contact",
            }}
            isTextDark={true}
            isAnimatedImage={false}
            imageName='/images/homePage/industryUseCases/Security.svg'
        />
        <WhyBuildSoftwareWithUs  data={networkPage} />
        <WowFaster data={networkPage} />
        <FAQ />
        <FooterCTA
          title={networkPage?.footerCTA?.title}
          clickProps={{
          label: networkPage?.footerCTA?.btnName
          }}
          imageName={networkPage?.footerCTA?.imageName}
          isTextDark={networkPage?.footerCTA?.isTextDark}
          isShowCloud={networkPage?.footerCTA?.isShowCloud}
        />
    </div>
  );
};

export default Network;
