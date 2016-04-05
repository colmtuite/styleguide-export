import React from 'react';
import { Link } from 'react-router';

const overviewLinks = [
    { title: 'Introduction', url: '/overview/introduction' },
    { title: 'Code Guidelines', url: '/overview/code-guidelines' },
    { title: 'Naming Convention', url: '/overview/naming-convention' },
    { title: 'Rules', url: '/overview/rules' },
];

const designLinks = [
    { title: 'Colors', url: '/design/colors' },
    { title: 'Typography', url: '/design/typography' },
];

const componentsLinks = [
    { title: 'Avatars', url: '/components/avatars' },
    { title: 'Buttons', url: '/components/buttons' },
    { title: 'Cards', url: '/components/cards' },
    { title: 'Form elements', url: '/components/form-elements' },
    { title: 'Layout', url: '/components/layout' },
    { title: 'Links', url: '/components/links' },
    { title: 'Lists', url: '/components/lists' },
    { title: 'Modals', url: '/components/modals' },
    { title: 'Popovers', url: '/components/popovers' },
    { title: 'Tables', url: '/components/tables' },
];

const overviewMenu = overviewLinks.map(({ title, url }) => <NavigationSubLink subLinkTitle={ title } url={ url } key={ url } />);
const designMenu = designLinks.map(({ title, url }) => <NavigationSubLink subLinkTitle={ title } url={ url } key={ url } />);
const componentsMenu = componentsLinks.map(({ title, url }) => <NavigationSubLink subLinkTitle={ title } url={ url } key={ url } />);

function NavigationLink({ linkTitle, linkSublinks }) {
    return (
        <dl className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
            <dt className="position-relative">
                <span className="link link--dark display-block padding-m fontSize-xl cursor-pointer">
                    <span className="display-block padding-xs userSelect-none">{ linkTitle }</span>
                </span>

                <div className="posPinTR height-100">
                    <div className="display-table height-100">
                        <div className="display-tableCell verticalAlign-middle padding-m">
                            <svg className="display-block fill-smoke--d" width={8} height={4} viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg"><path d="M7.027 1.577c-.346.354-.658.654-.937.9s-.572.492-.88.738l-.63.492-.284.208c-.083.056-.181.085-.293.085-.112 0-.21-.028-.293-.085l-.279-.2c-.147-.108-.359-.273-.634-.496-.276-.223-.559-.463-.851-.719-.292-.256-.607-.556-.947-.9-.34-.344-.638-.679-.894-1.008-.07-.067-.106-.144-.106-.231 0-.097.045-.182.135-.254.09-.072.195-.108.317-.108h7.094c.179 0 .311.062.394.185.083.128.08.251-.01.369-.256.328-.558.669-.904 1.023z" /></svg>
                        </div>
                    </div>
                </div>
            </dt>

            <dd className="paddingLeftRight-l paddingBottom-l">
                { linkSublinks }
            </dd>
        </dl>
    );
}

NavigationLink.propTypes = {
    linkTitle: React.PropTypes.string.isRequired,
    linkSublinks: React.PropTypes.string.isRequired,
};

function NavigationSubLink({ subLinkTitle, url }) {
    return (
         <Link className="padding-s display-block fontSize-m link link--light" to={url}>
            { subLinkTitle }
         </Link>
    );
}

NavigationSubLink.propTypes = {
    subLinkTitle: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
};

export default function Navigation() {
    return (
        <div>
            <NavigationLink linkTitle={ "Design" } linkSublinks={ designMenu } />
            <NavigationLink linkTitle={ "Components" } linkSublinks={ componentsMenu } />
        </div>
    );
}
