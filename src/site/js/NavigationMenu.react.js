import React from 'react';

import { Link } from 'react-router';

export default class NavigationMenu extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object,
    };

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        items: React.PropTypes.arrayOf(React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
        })),
    };

    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    componentWillMount() {
        const router = this.context.router;
        const containsActiveRoute = this.props.items.some(item => router.isActive(item.url));
        this.setState({ active: containsActiveRoute });
    }

    toggleActive = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const { title, items } = this.props;
        const menuItems = items.map((item, i) => <NavigationMenuItem title={item.title} url={item.url} key={i} />);
        return (
            <dl className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
                <dt
                    onClick={this.toggleActive}
                    className="position-relative">
                    <span className="link link--dark display-block padding-m fontSize-xl cursor-pointer">
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
                                    viewBox="0 0 8 4">
                                    <path d="M7.76,1L4.46,3.84a0.73,0.73,0,0,1-.92,0L0.24,1A0.56,0.56,0,0,1,.1.24,0.55,0.55,0,0,1,.7,0H7.3A0.55,0.55,0,0,1,8,.41,0.56,0.56,0,0,1,7.76,1Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </dt>

                <dd
                    style={{ display: this.state.active ? 'block' : 'none' }}
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
    };

    const { title, url } = props;
    return (
        <Link
            activeClassName="is-active"
            className="paddingLeftRight-m paddingTopBottom-s display-block fontSize-m link link--light"
            to={url}>
            {title}
        </Link>
    );
}
