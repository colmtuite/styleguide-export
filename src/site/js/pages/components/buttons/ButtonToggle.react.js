import React from 'react';
import classNames from 'classnames';

export default class ButtonToggle extends React.Component {
    static propTypes = {
        defaultClass: React.PropTypes.string.isRequired,
        activeClass: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const { active } = this.state;
        const { defaultClass, activeClass } = this.props;
        const instantFeedbackClasses = classNames(defaultClass, { [activeClass]: active });

        return (
            <div>
                <button
                    className={instantFeedbackClasses}
                    onClick={this.click}>
                    <span>Click me!</span>
                </button>
            </div>
        );
    }
}
