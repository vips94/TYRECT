import React from "react";
import styles from "./embeded.module.scss";
import HeroSection from "@/components/heroSection";
import WowFaster from "@/components/wowFaster";
import FAQ from "@/components/faq";
import FooterCTA from "@/components/footerCTA";
import { embededPage } from "@/constant/embededPage";
import { useCaseAnimationData } from "@/public/LottieFiles/UseCase";
import WhyBuildSoftwareWithUs from "@/components/whyBuildSoftwareWithUs";

const Embedded = () => {

  return (
    <div className={styles["embeded-section"]}>
        <HeroSection
            title={embededPage?.hero?.title}
            subTitle={embededPage?.hero?.subTitle}
            tagProps={{
            text: embededPage?.hero?.tag,
            color: "black",
            }}
            backgroundProps={{ type: "lottie" }}
            linkProps={{
            label: embededPage?.hero?.btnLabel,
            href: "/contact",
            }}
            isTextDark={true}
            isAnimatedImage={false}
            imageName='/images/homePage/industryUseCases/IOT.svg'
        />
        <WhyBuildSoftwareWithUs data={embededPage}/>
        <FAQ />
        <FooterCTA
          title={embededPage?.footerCTA?.title}
          clickProps={{
          label: embededPage?.footerCTA?.btnName
          }}
          imageName={embededPage?.footerCTA?.imageName}
          isTextDark={embededPage?.footerCTA?.isTextDark}
          isShowCloud={embededPage?.footerCTA?.isShowCloud}
        />
    </div>
  );
};

export default Embedded;
