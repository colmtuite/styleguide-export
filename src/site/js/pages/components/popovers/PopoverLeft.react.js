import React from 'react';
import classNames from 'classnames';

export default class PopoverLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }
    render() {
        const { active } = this.state;
        const togglePopoverClass = classNames('popover popover--s popover--left has-caret', { ['is-visible']: active });

        return (
            <div className="display-inlineBlock position-relative">
                <div className={togglePopoverClass}>
                    <div className="padding-s">
                        <div className="fontSize-m lineHeight-m">
                            I am a normal popover and I can have text and everything
                        </div>
                    </div>
                </div>

                <button className="button button--m button--flat button--stateful bg-marvel" onClick={this.click}>
                    Click me!
                </button>
            </div>
        );
    }
}
