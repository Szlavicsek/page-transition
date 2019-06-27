import React, { Component } from 'react';
import styles from "./SliderProgressButton.module.scss";

class CircleButton extends Component {

    render() {
        return (
            <div id={this.props.id}
                onClick={(e) => this.props.click(e)}
                className={`${styles.button__wrapper}
                            ${this.props.textColor === "light" ? styles.white : styles.black}
                            ${this.props.activeSlideId === Number(this.props.id) ? styles.active : ""}`}>

                <div className="circle-button">
                    {/*innen majd le kell szedni a circle button--anim-in-t*/}
                    <div className={styles.carousel_navigation}></div>

                    <svg id={this.props.id}
                         className={`svgCircle ${styles.round_progress} ${this.props.activeSlideId === Number(this.props.id) ? "active" : ""}`}
                         xmlns="http://www.w3.org/2000/svg" width="55" height="55">

                        <path className={`circleStroke ${this.props.activeSlideId !== Number(this.props.id) ? "hidden" : ""}`}
                              fill="none"
                              strokeWidth="6"/>
                    </svg>
                </div>
            </div>
        );
    }
};

export default CircleButton;
