import React from 'react';
import classNames from 'classnames';
import ModalWithTitle from '~/pages/components/modals/ModalWithTitle.react';

export default class ModalWithTitleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }
    render() {
        const { active } = this.state;
        const toggleClasses = classNames('modal-overlay', { ['is-active']: active });

        return (
            <div>
                <button className="button button--m button--flat button--stateful bg-marvel" onClick={this.click}>
                    Click me!
                </button>

                <div className={toggleClasses}>
                    <div className="modal-container">
                        <div className="display-table width-100 height-100">
                            <div className="posPinAll" onClick={this.click}></div>

                            <div className="modal-icon-wrapper">
                                <div
                                    className="modal-icon modal-icon--light modal-iconClose modal-iconClose--outside"
                                    onClick={this.click}>
                                </div>
                            </div>

                            <ModalWithTitle />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
