import React from 'react';
import classNames from 'classnames';
import PopoverSelectItem from '~/pages/components/popovers/PopoverSelectItem.react';

export default class PopoverSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activePopoverSelect: 'Editor',
        };
    }

    setActiveItem = (item) => {
        this.setState({ activePopoverSelect: item });
    }

    click = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const { active } = this.state;
        const togglePopoverClass = classNames('popover popover--top has-caret', { ['is-visible']: active });

        return (
            <div className="display-inlineBlock position-relative">
                <div
                    className={togglePopoverClass}
                    style={{ width: '260px' }}>
                    <PopoverSelectItem title="Editor" subtitle="Create and edit projects" hasBorder="true" onSelectToggle={this.setActiveItem} activeItem={this.state.activePopoverSelect} />
                    <PopoverSelectItem title="Client/Reviewer" subtitle="Read and comment only" hasBorder="true" onSelectToggle={this.setActiveItem} activeItem={this.state.activePopoverSelect} />
                    <PopoverSelectItem title="Account Admin" subtitle="Add and remove people" onSelectToggle={this.setActiveItem} activeItem={this.state.activePopoverSelect} />
                </div>

                <button className="button button--m button--flat button--stateful bg-marvel" onClick={this.click}>
                    Click me!
                </button>
            </div>
        );
    }
}
