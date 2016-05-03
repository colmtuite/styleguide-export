import React from 'react';
import ClipboardButton from 'react-clipboard.js';
import classNames from 'classnames';

export default class ColorRow extends React.Component {
    static propTypes = {
        color: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        textColor: React.PropTypes.string.isRequired,
        hexValue: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            disabled: false,
        };
    }

    click = () => {
        if (this.state.disabled) return;

        this.setState({
            active: !this.state.active,
            disabled: true,
        });

        setTimeout(() => {
            this.setState({
                active: !this.state.active,
                disabled: false,
            });
        }, 500);
    }

    render() {
        const { color, title, textColor, hexValue } = this.props;
        const { active } = this.state;

        const copyFeedbackClass = classNames(
            'position-absolute',
            'borderRadius-m',
            'opacity-0',
            'paddingLeftRight-m',
            'fontSize-m',
            'fontWeight-5',
            `c-${textColor}`, {
                ['clickFeedback']: active,
            }
        );

        const copyFeedbackStyle = {
            content: '""',
            left: '0',
            top: '0',
        };

        return (
            <div
                className={`width-100 bg-${color}`}
                style={{ height: '80px' }}>
                <div className="position-relative width-100 height-100 display-table">
                    <div className="paddingLeftRight-s display-tableCell verticalAlign-middle">
                        <div className={`fontSize-m lineHeight-m c-${textColor} textTransform-capitalize`}>
                            {title}
                        </div>

                        <div className={`fontSize-s lineHeight-s textTransform-uppercase c-${textColor} opacity-70`}>
                            {hexValue}
                        </div>
                    </div>

                    <div className={`posPinAll overflow-hidden opacity-0 opacity-100--hover transitionDuration-l transitionTimingFunction-ease-in-out bg-${color}`}>
                        <div className="height-100 display-table">
                            <div className="width-100 display-tableCell verticalAlign-middle">
                                <div
                                    className="position-relative"
                                    onClick={this.click}>
                                    <div className={copyFeedbackClass} style={copyFeedbackStyle}>
                                        Copied!
                                    </div>

                                    <ClipboardButton
                                        className={`position-relative paddingLeftRight-m borderWidth-0 textAlign-left fontSize-m fontWeight-5 c-${textColor} bg-none outlineStyle-none`}
                                        data-clipboard-text={hexValue}>
                                            Copy hex code
                                    </ClipboardButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
