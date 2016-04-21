import React from 'react';
import classNames from 'classnames';

export default class PopoverWithSeparator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }
    render() {
        const { active } = this.state;
        const togglePopoverClass = classNames('popover popover--s popover--top has-caret', { ['is-visible']: active });

        return (
            <div className="display-inlineBlock position-relative">
                <div className={togglePopoverClass}>
                    <div className="popover-list">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Google+</a>
                        <div className="popover-separator"></div>
                        <a href="#">Write a Medium post</a>
                    </div>
                </div>

                <button className="button button--m button--flat button--stateful bg-marvel" onClick={this.click}>
                    Click me!
                </button>
            </div>
        );
    }
}
