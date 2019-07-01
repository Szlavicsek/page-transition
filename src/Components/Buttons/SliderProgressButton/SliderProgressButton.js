import React, { useContext } from 'react';
import styles from "./SliderProgressButton.module.scss";
import { GlobalContext } from '../../../Contexts/GlobalContext'

const CircleButton = (props) => {
    const context = useContext(GlobalContext);
    
    return (
        <div id={props.id}
             onClick={(e) => props.click(e)}
             className={`${styles.button__wrapper}
                    ${props.textColor === "light" ? styles.white : styles.black}
                    ${context.state.currentHomePageSlideId === Number(props.id) ? styles.active : ""}`}>

            <div className="circle-button">
                {/*innen majd le kell szedni a circle button--anim-in-t*/}
                <div className={styles.carousel_navigation}></div>

                <svg id={props.id}
                     className={`svgCircle ${styles.round_progress} ${context.state.currentHomePageSlideId === Number(props.id) ? "active" : ""}`}
                     xmlns="http://www.w3.org/2000/svg" width="55" height="55">
    
                    <path className={`circleStroke ${context.state.currentHomePageSlideId !== Number(props.id) ? "hidden" : ""}`}
                          fill="none"
                          strokeWidth="6"/>
                </svg>
            </div>
        </div>
    );
};

export default CircleButton;
