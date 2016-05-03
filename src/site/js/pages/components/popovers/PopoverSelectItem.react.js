import React from 'react';
import classNames from 'classnames';

export default class PopoverSelect extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        subtitle: React.PropTypes.string.isRequired,
        hasBorder: React.PropTypes.bool.isRequired,
        onSelectToggle: React.PropTypes.func.isRequired,
        activeItem: React.PropTypes.string,
    }

    click = () => {
        this.props.onSelectToggle(this.props.title);
    }
    render() {
        const { title, subtitle, hasBorder, activeItem } = this.props;
        const togglePopoverItemClass = classNames(
            'popover-select-item',
            'paddingLeftRight-m',
            'paddingTopBottom-s', {
                ['is-active']: activeItem === title,
                ['has-border']: hasBorder,
            }
        );

        return (
            <div className={togglePopoverItemClass} onClick={this.click}>
                <div className="inline">
                    <div className="verticalAlign-middle marginRight-m">
                        <div className="select-toggle"></div>
                    </div>

                    <div className="verticalAlign-middle">
                        <div className="marginBottom-xxs">
                            <span className="popover-select-title fontWeight-5">{title}</span>
                        </div>

                        <span className="popover-select-subtitle">{subtitle}</span>
                    </div>
                </div>
            </div>
        );
    }
}
