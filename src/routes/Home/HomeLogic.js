import React, { Component } from 'react';
import * as help from "../../JsModules/helper";

class HomeLogic extends Component {

    state = {
        canRenderSidebar: false,
        canRequest: false,
        nextButtonDisabled: false,
        currentSlideId: 0,
        textColor: "white"
    };

    handleCircleButtonClick(e) {
        setTimeout((e) => this.loadNext(e), 1)
    }

    animateCarouselButtonsPopup() {
        setTimeout(() => {
            this.setState({canRenderSidebar: true});
            Array.from(document.querySelectorAll('.circle-button')).forEach((x, i)=>{
                const delay = i * 125;
                setTimeout(() => { x.classList.add('animatedCircleButton') }, delay)
            })
        }, 1000)
        // }, 1000 + help.getScrollDuration())
    }

    initFirstAnimation(timeoutDelay, scrollTime) {
        setTimeout(function () {
            document.querySelector('.lead').style.backgroundImage = "";
            document.querySelector('.lead').style.height = "100vh";
        }, 800 + scrollTime);

        setTimeout(() => {
            document.querySelectorAll('.lead_caption_container').forEach(x => {
                x.style.visibility= "visible";
            });
            help.animateLeadTextUp(0)
        }, 350 + timeoutDelay + scrollTime);

        setTimeout(() => {
            this.animateCarouselButtonsPopup()
        }, 1350 + timeoutDelay + scrollTime);

        setTimeout(() => {
            // btn.next(5, this.loadNext.bind(this));
        }, 3350 + timeoutDelay + scrollTime);
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // ha egyből a főoldalra érkezünk
        if (!prevProps.canAnimate && this.props.canAnimate) {
            this.initFirstAnimation(0)
        }
    }

    loadNext(event) {
        if (!this.state.nextButtonDisabled) {
            // Ha már letelt a 750ms-os zár
            if (!event || Number(event.target.id) !== this.state.currentSlideId) {
                // ha magától váltott, vagy kattintva lett egy másik slide-ra mint ami éppen megy
                // btn.afterburn = -1;
                // btn.progress = -1;

                let updatedCurrentSlideId;
                const previousSlideId = this.state.currentSlideId;

                if (event) {
                    updatedCurrentSlideId = Number(event.target.id);
                } else {
                    const slides = Array.from(document.querySelectorAll(`.slideContainer`));
                    updatedCurrentSlideId = this.state.currentSlideId === slides.length-1 ? 0 : this.state.currentSlideId + 1;
                }

                this.props.changeCurrentSlideId(updatedCurrentSlideId);

                help.animateLeadTextDown(previousSlideId);

                const animateSlideUp = () => {
                    if (this.props.location.pathname === "/") {
                        setTimeout(() => {
                            help.animateLeadTextUp(updatedCurrentSlideId);
                        }, 450);

                        const $PreviousSlideContainer = document.querySelector(`#slideContainer${previousSlideId}`);
                        const $PreviousSlideMedia = document.querySelector(`#slideMedia${previousSlideId}`);

                        const $NextSlideContainer = document.querySelector(`#slideContainer${this.state.currentSlideId}`);
                        const $NextSlideMedia = document.querySelector(`#slideMedia${this.state.currentSlideId}`);

                        if ($NextSlideMedia) {
                            $NextSlideMedia.style.transition = "all ease-in 0.75s";
                            $PreviousSlideMedia.style.transition = "all ease-in 0.75s";
                            $NextSlideMedia.style.height = "100%";

                            // $NextSlideMedia.style.transform = "scale(1)";
                            // $NextSlideMedia.style.transformOrigin = "center bottom";
                            // $PreviousSlideMedia.style.transformOrigin = "center bottom";
                            // $PreviousSlideMedia.style.transform = "scale(1.2)";

                            $NextSlideContainer.style.zIndex = 0;
                            $PreviousSlideContainer.style.zIndex = -1;

                            setTimeout(function () {

                                // $frontSide_inner.style.transform = "translateY(20%)";
                                // $backSide_inner.style.transform = "translateY(0%)";
                                $PreviousSlideMedia.style.transition = "all 0s";
                                $PreviousSlideMedia.style.height = "0";


                                // $PreviousSlideMedia.style.transform = "scale(1.2)";

                                $PreviousSlideContainer.style.zIndex = -2;

                                this.setState({nextButtonDisabled: false}) // ebből esetleg még lehet egy global state egy szinttel feljebb ami pont a description fade előtt hív meg
                            }.bind(this), 2000)
                        }
                    }
                };

                let textColor;

                setTimeout(() => {
                    // help.changeHeaderTextColor(textColor);
                    this.setState({textColor: textColor})
                }, 500);



                // const $header = document.querySelector('#header');
                //
                // if ($header.classList.contains("transitioning")) {
                //     setTimeout(() => $header.className = `transitioning white-text`, 500)
                // } else {
                //     $header.className = `white-text`
                // }

                this.setState({
                    currentSlideId: updatedCurrentSlideId,
                    nextButtonDisabled: true,
                }, () => {
                    setTimeout(() => {
                        animateSlideUp()
                    }, 300)
                });
            }
        }
    }


    componentDidMount() {
        help.makeLeadTransparent(500 + this.props.scrollDuration);
        // help.animateLeadTextUp(0)
        if (!this.props.loadingScreenIsVisible) {
            // this.initFirstAnimation(650 + help.getScrollDuration())
            this.initFirstAnimation(650, 0)
        }


        const $header = document.querySelector('#header');
        if ($header.classList.contains("transitioning")) {
            setTimeout(() => $header.className = `transitioning white-text`, 500)
        } else {
            $header.className = `white-text`
        }

        setTimeout(() => {
            this.setState({canRenderSidebar: true})
        }, 1000)
    }

    render() {
        return (
            <></>
        );
    }
}

export default HomeLogic;