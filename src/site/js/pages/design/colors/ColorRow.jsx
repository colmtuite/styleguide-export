import React from 'react';
import ClipboardButton from 'react-clipboard.js';

export default class ColorRow extends React.Component {
    static propTypes = {
        color: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        textColor: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            displayCopyFeedback: false,
        };
    }

    onSuccess = () => {
        this.setState({
            displayCopyFeedback: true,
        });

        setTimeout(() => {
            this.setState({
                displayCopyFeedback: false,
            });
        }, 500);
    }

    getText() {
        return '#00ffdd';
    }

    render() {
        const { color, title, textColor } = this.props;
        const { displayCopyFeedback } = this.state;

        const copyFeedbackStyle = displayCopyFeedback ? {
            opacity: '0',
            transform: 'translateY(-25px)',
        } : {};

        return (
            <div className={`width-100 bg-${color}`} style={{ height: '80px' }}>
                <div className="position-relative width-100 height-100 display-table">
                    <div className="paddingLeftRight-s display-tableCell verticalAlign-middle">
                        <div className={`fontSize-m lineHeight-m c-${textColor} textTransform-capitalize`}>{ title }</div>
                        <div className={`fontSize-s lineHeight-s textTransform-uppercase c-${textColor} opacity-70`}>#00ffdd</div>
                    </div>

                    <div className={`posPinAll overflow-hidden opacity-0 opacity-100--hover transitionDuration-l transitionTimingFunction-ease-in-out bg-${color}`}>
                        <div className="height-100 display-table">
                            <div className="width-100 display-tableCell verticalAlign-middle">
                                <div className="position-absolute paddingLeftRight-m paddingTopBottom-xxs fontSize-m fontWeight-5 c-white transitionDuration-xl transitionTimingFunction-cv-easeOutCircular"
                                    style={copyFeedbackStyle}>
                                        Copied!
                                </div>

                                <ClipboardButton className={`position-relative paddingLeftRight-m paddingTopBottom-xxs borderWidth-0 textAlign-left fontSize-m fontWeight-5 c-white bg-${color} outlineStyle-none`}
                                    option-text={this.getText}
                                    onSuccess={this.onSuccess}>
                                        Copy hex code
                                </ClipboardButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
