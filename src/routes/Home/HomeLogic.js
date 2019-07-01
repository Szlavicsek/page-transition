import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import * as help from "../../JsModules/helper";
import btn from "../../JsModules/svg_circle"
import SliderProgressButton from "../../Components/Buttons/SliderProgressButton/SliderProgressButton";
import { GlobalContext } from "../../Contexts/GlobalContext";

class HomeLogic extends Component {
    
    state = {
        canRenderSidebar: false,
        canRequest: false,
        nextButtonDisabled: false,
        buttonColor: "light"
    };
    
    disableButton() {
        this.context.disableClick();
    }
    
    animateCarouselButtonsPopup() {
        this.setState({canRenderSidebar: true});
        Array.from(document.querySelectorAll('.circle-button')).forEach((x, i)=>{
            const delay = i * 125;
            setTimeout(() => { x.classList.add('animatedCircleButton') }, delay)
        })
    }
    
    initFirstAnimation(timeoutDelay, scrollTime) {
        setTimeout(() => {
            document.querySelectorAll('.lead_caption_container').forEach(x => {
                x.style.visibility= "visible";
            });
            help.animateLeadTextUp(this.context.state.currentHomePageSlideId)
        }, 350 + timeoutDelay + scrollTime);
        
        setTimeout(() => {
            this.animateCarouselButtonsPopup()
        }, 1350 + timeoutDelay + scrollTime);
        
        setTimeout(() => {
            btn.next(5, this.loadNext.bind(this), this.disableButton.bind(this));
        }, 2350 + timeoutDelay + scrollTime);
    }

    loadNext(event) {
        if (!this.state.nextButtonDisabled) {
            // Ha már letelt a 750ms-os zár
            if (!event || Number(event.target.id) !== this.context.state.currentHomePageSlideId) {
    
                // ha magától váltott, vagy kattintva lett egy másik slide-ra mint ami éppen megy
                btn.afterburn = -1;
                btn.progress = -1;

                let updatedCurrentSlideId;
                const previousSlideId = this.context.state.currentHomePageSlideId;

                if (event) {
                    updatedCurrentSlideId = Number(event.target.id);
                } else {
                    const slides = Array.from(document.querySelectorAll(`.slideContainer`));
                    updatedCurrentSlideId = this.context.state.currentHomePageSlideId === slides.length-1 ? 0 : this.context.state.currentHomePageSlideId + 1;
                }
                this.context.changeCurrentHomePageSlideId(updatedCurrentSlideId);
                help.animateLeadTextDown(previousSlideId);

                const animateSlideUp = () => {
                    if (this.props.location.pathname === "/") {
                        setTimeout(() => {
                            help.animateLeadTextUp(updatedCurrentSlideId);
                        }, 450);

                        const $PreviousSlideContainer = document.querySelector(`#slideContainer${previousSlideId}`);
                        const $PreviousSlideMedia = document.querySelector(`#slideMedia${previousSlideId}`);

                        const $NextSlideContainer = document.querySelector(`#slideContainer${this.context.state.currentHomePageSlideId}`);
                        const $NextSlideMedia = document.querySelector(`#slideMedia${this.context.state.currentHomePageSlideId}`);
    
                        if ($PreviousSlideMedia && $PreviousSlideMedia.firstElementChild && $PreviousSlideMedia.firstElementChild.tagName === "VIDEO") {
                            setTimeout(function () {
                                $PreviousSlideMedia.pause();
                            }, 300)
                            setTimeout(function () {
                                $PreviousSlideMedia.currentTime = 0;
                            }, 1000)
                        }
                        if ($NextSlideMedia) {
                            $NextSlideMedia.style.transition = "all cubic-bezier(1,.86,.34,1) .75s";
                            $PreviousSlideMedia.style.transition = "all cubic-bezier(1,.86,.34,1) .75s";
                            $NextSlideMedia.style.height = "100%";
                            
                            if ($NextSlideMedia && $NextSlideMedia.tagName === "VIDEO") {
                                $NextSlideMedia.play();
                            }
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
                                console.log("setting nextbuttondis to true")
                                this.setState({nextButtonDisabled: false}) // ebből esetleg még lehet egy global state egy szinttel feljebb ami pont a description fade előtt hív meg
                            }.bind(this), 2000)
                        }
                    }
                };

                let textColor;

                setTimeout(() => {
                    switch(updatedCurrentSlideId) {
                        case 0:
                        case 1:
                        case 2:
                            textColor = "light";
                            break;
                        case 3:
                        case 4:
                        case 5:
                            textColor = "light";
                            break;
                        default:
                            textColor = "light";
                    }

                    help.changeHeaderTextColor(textColor);
                    this.setState({buttonColor: textColor})
                }, 500);
                
                this.context.disableClick();

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
        setTimeout(function () {
            help.changeHeaderTextColor('light');
        }, 500)
        help.makeLeadTransparent(500 + help.getScrollDuration());
        setTimeout(() => {
            if (this.props.context.state.prevLocation === "/works/video") {
                this.initFirstAnimation(0, help.getScrollDuration());
                setTimeout(() => {
                    this.setState({canRenderSidebar: true})
                }, 350)
            } else if (this.props.context.state.prevLocation) {
                this.initFirstAnimation(650, help.getScrollDuration());
                setTimeout(() => {
                    this.setState({canRenderSidebar: true})
                }, 1000)
            }
        }, 50)
    }
    
    componentWillUnmount() {
        btn.stop()
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) { // ha egyből a főoldalra érkezünk
        if (!prevProps.context.state.canInitButtonPopup && this.props.context.state.canInitButtonPopup) {
            this.initFirstAnimation(0, help.getScrollDuration());
            setTimeout(() => {
                this.setState({canRenderSidebar: true})
            }, 350)
        }
    }
    


    render() {
        return (
            <>
                {this.state.canRenderSidebar ?
                    <div className="slider_button_container">
                        {Array.from(document.querySelectorAll(".slideContainer")).map((x, i) => {
                            return <SliderProgressButton textColor={this.state.buttonColor} key={i} id={i} click={(e) => this.loadNext(e)}/>
                        })}
                    </div>
                    : <></>}
            </>
        );
    }
}

HomeLogic.contextType = GlobalContext;
export default withRouter(HomeLogic);