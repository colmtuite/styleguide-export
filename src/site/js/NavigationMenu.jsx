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
                <dt onClick={this.toggleActive} className="position-relative">
                    <span className="link link--dark display-block padding-m fontSize-xl cursor-pointer">
                        <span className="display-block padding-xs userSelect-none">{title}</span>
                    </span>

                    <div className="posPinTR height-100">
                        <div className="display-table height-100">
                            <div className="display-tableCell verticalAlign-middle padding-m">
                                <svg className="display-block fill-smoke--d" width={8} height={4} viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg"><path d="M7.027 1.577c-.346.354-.658.654-.937.9s-.572.492-.88.738l-.63.492-.284.208c-.083.056-.181.085-.293.085-.112 0-.21-.028-.293-.085l-.279-.2c-.147-.108-.359-.273-.634-.496-.276-.223-.559-.463-.851-.719-.292-.256-.607-.556-.947-.9-.34-.344-.638-.679-.894-1.008-.07-.067-.106-.144-.106-.231 0-.097.045-.182.135-.254.09-.072.195-.108.317-.108h7.094c.179 0 .311.062.394.185.083.128.08.251-.01.369-.256.328-.558.669-.904 1.023z" /></svg>
                            </div>
                        </div>
                    </div>
                </dt>
                <dd style={{ display: this.state.active ? 'block' : 'none' }} className="paddingLeftRight-l paddingBottom-l">
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
         <Link activeClassName="is-active" className="padding-s display-block fontSize-m link link--light" to={url}>
            {title}
         </Link>
    );
}
