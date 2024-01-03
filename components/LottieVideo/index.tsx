import React,{FC} from 'react';
import Lottie from "lottie-react";

type LottieVideoProps = {
    animationData: any,
    wrapperClass: any,
}

const LottieVideo:FC<LottieVideoProps> = (props) => {
    const {animationData , wrapperClass} = props;
    return (
        <div className={wrapperClass ? wrapperClass : ''}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </div>
    );
};

export default LottieVideo;
