import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router';

export default class NavigationMenu extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object,
    };

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        onClickNavigation: React.PropTypes.func.isRequired,
        onToggleActive: React.PropTypes.func.isRequired,
        isActive: React.PropTypes.bool.isRequired,
        items: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            disabled: React.PropTypes.bool,
        })),
    };

    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    toggleActive = () => {
        const title = (this.props.isActive) ? '' : this.props.title;
        this.props.onToggleActive(title);
    }

    render() {
        const { title, items } = this.props;
        const menuItems = items.map((item, i) => <NavigationMenuItem title={item.title} url={item.url} disabled={item.disabled} key={i} onClickNavigation={this.props.onClickNavigation} />);

        return (
            <dl className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                <dt
                    onClick={this.toggleActive}
                    className="position-relative">
                    <span className="link link--dark display-block padding-s fontSize-xl cursor-pointer">
                        <span className="display-block padding-xs userSelect-none">
                            {title}
                        </span>
                    </span>

                    <div className="posPinTR height-100 pointerEvents-none paddingRight-s">
                        <div className="display-table height-100">
                            <div className="display-tableCell verticalAlign-middle padding-m">
                                <svg
                                    className="display-block fill-smoke--d"
                                    width="8"
                                    height="4"
                                    viewBox="0 0 8 4"
                                    style={{ transform: this.props.isActive ? 'rotate(180deg)' : 'rotate(0)' }}>
                                    <path d="M7.76,1L4.46,3.84a0.73,0.73,0,0,1-.92,0L0.24,1A0.56,0.56,0,0,1,.1.24,0.55,0.55,0,0,1,.7,0H7.3A0.55,0.55,0,0,1,8,.41,0.56,0.56,0,0,1,7.76,1Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </dt>

                <dd
                    style={{ display: this.props.isActive ? 'block' : 'none' }}
                    className="bg-snow paddingLeftRight-l paddingTopBottom-m borderWidth-0 borderTopWidth-1 borderStyle-solid borderColor-smoke">
                    {menuItems}
                </dd>
            </dl>
        );
    }
}

function NavigationMenuItem(props) {
    NavigationMenuItem.propTypes = {
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        disabled: React.PropTypes.bool,
        onClickNavigation: React.PropTypes.func.isRequired,
    };

    let label;
    const { title, url, disabled } = props;
    const linkClass = classNames('paddingLeftRight-m paddingTopBottom-xs display-block fontSize-m lineHeight-m link link--light', { ['pointerEvents-none display-inlineBlock c-smoke--xd']: disabled });

    if (disabled) {
        label = <span className="bg-snow--d c-silver textTransform-uppercase fontWeight-4 padding-xxs borderRadius-m verticalAlign-middle" style={{ marginLeft: '-10px', fontSize: '8px', letterSpacing: '0.5px' }}>Coming Soon</span>;
    }

    return (
        <div>
            <Link
                activeClassName="is-active"
                className={linkClass}
                to={url}
                onClick={props.onClickNavigation}>
                {title}
            </Link>
            {label}
        </div>
    );
}
