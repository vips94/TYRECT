import React, { useRef, forwardRef } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Divider from "../divider";

let ctx = null as any;
const Footer = forwardRef((props,ref:any) => {
  const facebook = useRef(null) as any;
  const insta = useRef(null) as any;
  const linkedIn = useRef(null) as any;
  const gitHub = useRef(null) as any;

  const scrollToPage = (e:any) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={styles.footerSection}
      ref={ref}
    >
      <Divider color="#f1f6ff" className={styles['footer-divider']}/>
      <div className={styles["social-row"]}>
        <Link href={'/'} className={styles.logo}>
            <img src="./images/logo.png"/>
        </Link>
        <div className={styles.links}>
        <Link href={"#home"} className={styles.link} onClick={scrollToPage} id="mouseHover">
          Home
        </Link>
        <Link href={"#aboutMe"} className={styles.link} onClick={scrollToPage} id="mouseHover">
          About Us
        </Link>
        <Link href={"#projects"} className={styles.link} onClick={scrollToPage} id="mouseHover">
          Projects
        </Link>
      </div>
        <div className={styles.socials}>
          <a
            href={"https://www.facebook.com/profile.php?id=100005212578916"}
            target="_blank"
            className={styles.socialLink}
            // onMouseEnter={() => animateIcon(facebook, 'facebook')}
            // onMouseLeave={() => ctx.revert()}
            id="mouseHover"
          >
            <svg
              ref={facebook}
              // fill={propertyTextStroke}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="facebook"
                d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                // stroke={propertiesBorderColor}
              />
            </svg>
          </a>
          <a
            href={"https://www.instagram.com/_vipin_kumar/"}
            target="_blank"
            className={styles.socialLink}
            // onMouseEnter={() => animateIcon(insta, 'insta')}
            // onMouseLeave={() => ctx.revert()}
            id="mouseHover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // fill={propertyTextStroke}
              ref={insta}
            >
              <path
                id="insta"
                // stroke={propertiesBorderColor}
                d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
              />
            </svg>
          </a>
          <a
            href={"https://www.linkedin.com/in/vipin-kumar-878971158/"}
            target="_blank"
            className={styles.socialLink}
            // onMouseEnter={() => animateIcon(linkedIn,'linkedIn')}
            // onMouseLeave={() => ctx.revert()}
            id="mouseHover"
          >
            <svg
              viewBox="0 0 24 24"
              ref={linkedIn}
              // fill={propertyTextStroke}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="linkedIn"
                // stroke={propertiesBorderColor}
                d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
              />
            </svg>
          </a>
        </div>
      </div>
      
    </div>
  );
});

export default Footer;
