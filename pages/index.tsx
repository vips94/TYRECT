"use client";
import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import HeroSection from "@/components/heroSection";
import { useCaseAnimationData } from "@/public/LottieFiles/UseCase";
import IndustryUseCases from "@/components/industryUseCases";
import WowFaster from "@/components/wowFaster";
import WhyBuildSoftwareWithUs from "@/components/whyBuildSoftwareWithUs";
import FAQ from "@/components/faq";
import { homePage } from "@/constant/homePage";
import FooterCTA from "@/components/footerCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>TYRECT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tablogo.png" />
      </Head>
      <main className={`${styles.main}`}>
        <HeroSection
          title={homePage?.hero?.title}
          subTitle={homePage?.hero?.subTitle}
          tagProps={{
            text: homePage?.hero?.tag,
            color: "black",
          }}
          backgroundProps={{ type: "lottie" }}
          linkProps={{
            label: homePage?.hero?.btnLabel,
            href: "/contact",
          }}
          isTextDark={true}
          isAnimatedImage={true}
          imageName={useCaseAnimationData?.gaming}
        />
        <IndustryUseCases />
        <WowFaster data={homePage}/>
        <WhyBuildSoftwareWithUs data={homePage}/>
        <FAQ />
        <FooterCTA
          title={homePage?.footerCTA?.title}
          clickProps={{
            label: homePage?.footerCTA?.btnName
          }}
          imageName={homePage?.footerCTA?.imageName}
          isTextDark={homePage?.footerCTA?.isTextDark}
          isShowCloud={homePage?.footerCTA?.isShowCloud}
        />
      </main>
    </>
  );
}
