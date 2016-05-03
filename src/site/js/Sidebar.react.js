import React from 'react';

import classNames from 'classnames';
import Navigation from '~/Navigation.react';
import SidebarLogo from '~/components/SidebarLogo.react';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
        this.handleScroll = this.handleScroll.bind(this);
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }

    handleScroll(event) {
        let preventScroll = false;
        const node = this.refs.sidebar.getDOMNode();
        if (event.nativeEvent.wheelDelta > 0 || event.nativeEvent.detail < 0) {
            preventScroll = node.scrollTop === 0;
        } else {
            preventScroll = node.scrollHeight - node.scrollTop === node.clientHeight;
        }
        if (preventScroll) {
            event.stopPropagation();
            event.preventDefault();
        }
    }

    render() {
        const { active } = this.state;
        const toggleClasses = classNames('sidebar bg-white borderColor-smoke borderRightWidth-1 borderStyle-solid borderWidth-0 height-100 posFixTL zi-400 width-80 breakPointM-width-30 breakPointL-width-20', { ['is-open']: active });

        return (
            <aside className={toggleClasses}>
                <div
                    className="position-absolute width-20 breakPointM-display-none cursor-pointer"
                    style={{ height: '77px', right: '-20%' }}
                    onClick={this.click}>
                    <div
                        className="absolutelyCenter borderRadius-s"
                        style={{ width: '24px', height: '4px', backgroundColor: this.state.active ? 'transparent' : '#1fb6ff' }}>
                        <div
                            className="position-absolute bg-marvel borderRadius-s"
                            style={{ width: '24px', height: '4px', top: this.state.active ? '0' : '-8px', transform: this.state.active ? 'rotate(45deg)' : 'rotate(0)' }}>
                        </div>
                        <div
                            className="position-absolute bg-marvel borderRadius-s"
                            style={{ width: '24px', height: '4px', bottom: this.state.active ? '0' : '-8px', transform: this.state.active ? 'rotate(-45deg)' : 'rotate(0)' }}>
                        </div>
                    </div>
                </div>

                <div className="height-100 overflow-auto" ref="sidebar" onWheel={this.handleScroll}>
                    <div className="borderBottomWidth-1 borderColor-smoke borderStyle-solid borderWidth-0 display-none paddingTopBottom-l textAlign-center breakPointM-display-block">
                        <SidebarLogo styleguideText="true" />
                    </div>

                    <div className="posPinBL width-100 paddingBottom-l textAlign-center">
                        <div className="paddingBottom-s inline textAlign-center">
                            <div className="marginRight-m breakPointL-marginRight-l">
                                <a href="https://github.com/marvelapp/styleguide" target="blank">
                                    <svg
                                        className="fill-smoke--d fill-steel--hover scaleUp--hover cursor-pointer transitionDuration-m transitionTimingFunction-cb--scaleUp"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32">
                                        <path d="M28.948 25.981c-2.035 2.848-4.663 4.818-7.885 5.912-.375.071-.649.021-.823-.149-.174-.17-.26-.383-.26-.639v-4.495c0-1.378-.361-2.386-1.083-3.025.792-.085 1.503-.213 2.135-.383.632-.17 1.285-.447 1.958-.831.674-.383 1.236-.856 1.687-1.417.451-.561.819-1.307 1.104-2.237.285-.93.427-1.999.427-3.206 0-1.719-.549-3.182-1.646-4.389.514-1.293.458-2.741-.167-4.346-.389-.128-.951-.05-1.688.234-.736.284-1.375.597-1.917.937l-.792.511c-1.292-.369-2.625-.554-4-.554s-2.708.185-4 .554c-.222-.156-.517-.348-.885-.575-.368-.227-.948-.501-1.74-.82-.792-.32-1.389-.415-1.792-.288-.611 1.605-.66 3.054-.146 4.346-1.097 1.207-1.646 2.67-1.646 4.389 0 1.207.142 2.273.427 3.196.285.923.649 1.669 1.094 2.237.444.568 1.003 1.044 1.677 1.427.674.383 1.326.66 1.958.831.632.17 1.344.298 2.135.383-.556.511-.896 1.243-1.021 2.194-.292.142-.604.249-.937.32-.333.071-.729.107-1.188.107-.458 0-.913-.153-1.365-.458-.451-.305-.837-.749-1.156-1.332-.264-.455-.601-.824-1.01-1.108-.41-.284-.753-.455-1.031-.511l-.417-.064c-.292 0-.493.032-.604.096-.111.064-.146.146-.104.245.042.099.104.199.188.298.083.099.174.185.271.256l.146.107c.306.142.608.412.906.81.299.398.517.76.656 1.087l.208.49c.181.54.486.976.917 1.31.431.334.896.547 1.396.639.5.092.983.142 1.448.149.465.007.851-.018 1.156-.075l.479-.085c0 .54.003 1.172.01 1.896l.01 1.15c0 .256-.09.469-.271.639-.181.17-.458.22-.833.149-3.222-1.094-5.851-3.064-7.885-5.912-2.035-2.848-3.052-6.054-3.052-9.619 0-2.969.715-5.706 2.146-8.213 1.431-2.507 3.372-4.492 5.823-5.955 2.451-1.463 5.128-2.194 8.031-2.194 2.903 0 5.58.731 8.031 2.194 2.451 1.463 4.392 3.448 5.823 5.955s2.146 5.245 2.146 8.213c0 3.565-1.017 6.771-3.052 9.619z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="marginRight-m breakPointL-marginRight-l">
                                <a href="https://dribbble.com/marvelapp" target="blank">
                                    <svg
                                        className="fill-smoke--d fill-dribbble--hover scaleUp--hover cursor-pointer transitionDuration-m transitionTimingFunction-cb--scaleUp"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32">
                                        <path d="M16 0c-4.417 0-8.187 1.562-11.313 4.688-3.125 3.125-4.688 6.896-4.688 11.313 0 4.417 1.562 8.187 4.688 11.313 3.125 3.125 6.896 4.688 11.313 4.688 4.417 0 8.187-1.562 11.313-4.688 3.125-3.125 4.688-6.896 4.688-11.313 0-4.417-1.562-8.187-4.688-11.313-3.125-3.125-6.896-4.688-11.313-4.688zm0 2.375c3.458 0 6.479 1.146 9.063 3.438-.208.292-.5.635-.875 1.031-.375.396-1.156 1.01-2.344 1.844-1.188.833-2.51 1.521-3.969 2.063-1.542-2.875-3.229-5.542-5.063-8 1.042-.25 2.104-.375 3.188-.375zm-5.813 1.25c1.833 2.5 3.521 5.146 5.063 7.938-4.375 1.167-8.583 1.729-12.625 1.688.458-2.125 1.354-4.031 2.688-5.719 1.333-1.688 2.958-2.99 4.875-3.906zm-7.875 12.375v-.375c4.667.083 9.354-.562 14.063-1.938.417.75.792 1.521 1.125 2.313l-.563.125c-1.625.542-3.156 1.292-4.594 2.25-1.438.958-2.625 1.958-3.563 3-.938 1.042-1.604 1.833-2 2.375-.396.542-.698 1.021-.906 1.438-2.375-2.625-3.563-5.687-3.563-9.188zm13.688 13.688c-3.125 0-5.917-.958-8.375-2.875.125-.25.281-.531.469-.844.188-.313.583-.844 1.187-1.594.604-.75 1.271-1.448 2-2.094.729-.646 1.729-1.354 3-2.125 1.271-.771 2.615-1.406 4.031-1.906h.125c1.375 3.583 2.333 7.042 2.875 10.375-1.667.708-3.437 1.063-5.313 1.063zm7.625-2.313c-.5-3.042-1.375-6.292-2.625-9.75 2.917-.5 5.75-.313 8.5.563-.625 3.875-2.583 6.937-5.875 9.188zm-3.5-11.938c-.083-.25-.167-.479-.25-.688-.292-.667-.604-1.333-.938-2 1.5-.625 2.885-1.375 4.156-2.25s2.104-1.531 2.5-1.969c.396-.438.719-.823.969-1.156 2.042 2.5 3.083 5.333 3.125 8.5-3.25-.667-6.437-.813-9.563-.438z" />
                                    </svg>
                                </a>
                            </div>

                            <div>
                                <a href="https://twitter.com/marvelapp" target="blank">
                                    <svg
                                        className="fill-smoke--d fill-twitter--hover scaleUp--hover cursor-pointer transitionDuration-m transitionTimingFunction-cb--scaleUp"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32">
                                        <path d="M16 0c-4.417 0-8.187 1.562-11.313 4.688-3.125 3.125-4.688 6.896-4.688 11.313 0 4.417 1.562 8.187 4.688 11.313 3.125 3.125 6.896 4.688 11.313 4.688 4.417 0 8.187-1.562 11.313-4.688 3.125-3.125 4.688-6.896 4.688-11.313 0-4.417-1.562-8.187-4.688-11.313-3.125-3.125-6.896-4.688-11.313-4.688zm7.938 12.438c.042.167.063.333.063.5 0 2.833-1.021 5.406-3.063 7.719-2.042 2.313-4.771 3.469-8.188 3.469-2.167 0-4.167-.583-6-1.75.292.042.604.063.938.063 1.792 0 3.417-.562 4.875-1.688-.875-.042-1.646-.312-2.313-.813-.667-.5-1.125-1.146-1.375-1.938.25.042.5.063.75.063.333 0 .688-.042 1.063-.125-.917-.208-1.677-.667-2.281-1.375-.604-.708-.906-1.542-.906-2.5v-.063c.542.333 1.146.5 1.813.5-1.208-.792-1.813-1.875-1.813-3.25 0-.708.188-1.375.563-2 2.083 2.583 4.792 3.958 8.125 4.125-.083-.292-.125-.604-.125-.938 0-1.083.385-2.01 1.156-2.781.771-.771 1.698-1.156 2.781-1.156 1.167 0 2.125.417 2.875 1.25.917-.167 1.75-.479 2.5-.938-.292.958-.854 1.687-1.688 2.188.75-.083 1.5-.292 2.25-.625-.542.792-1.208 1.479-2 2.063z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <Navigation />
                </div>
            </aside>
        );
    }
}
