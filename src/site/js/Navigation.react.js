import React from 'react';

import NavigationMenu from '~/NavigationMenu.react';

const menus = [
    {
        title: 'Overview',
        items: [
           { title: 'Introduction', url: '/overview/introduction' },
           { title: 'Code Guidelines', url: '/overview/code-guidelines' },
        ],
    }, {
        title: 'Design',
        items: [
            { title: 'Colors', url: '/design/colors' },
            { title: 'Typography', url: '/design/typography' },
            { title: 'Animation', url: '/design/animation' },
            { title: 'Border Radius', url: '/design/border-radius' },
            { title: 'Box Shadow', url: '/design/box-shadow' },
            { title: 'Layout', url: '/design/layout' },
            { title: 'Icons', url: '/design/icons', disabled: true },
        ],
    }, {
        title: 'Components',
        items: [
            { title: 'Avatars', url: '/components/avatars' },
            { title: 'Buttons', url: '/components/buttons' },
            { title: 'Cards', url: '/components/cards' },
            { title: 'Form elements', url: '/components/form-elements' },
            { title: 'Grid', url: '/components/grid' },
            { title: 'Links', url: '/components/links' },
            { title: 'Lists', url: '/components/lists' },
            { title: 'Modals', url: '/components/modals' },
            { title: 'Popovers', url: '/components/popovers' },
        ],
    }, {
        title: 'Utility',
        items: [
            { title: 'Center elements', url: '/utility/center-elements' },
            { title: 'Hide elements', url: '/utility/hide-elements' },
            { title: 'Layout', url: '/utility/layout' },
            { title: 'Text manipulation', url: '/utility/text-manipulation' },
        ],
    },
];

export default class Navigation extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object,
    };

    constructor(props) {
        super(props);

        this.state = {
            openSection: menus[0].title,
        };
    }

    componentWillMount() {
        const router = this.context.router;

        for (const menu of menus) {
            const containsActiveRoute = menu.items.some(item => router.isActive(item.url));
            if (containsActiveRoute) {
                this.state = {
                    openSection: menu.title,
                };
            }
        }
    }

    toggleActive = (title) => {
        this.setState({
            openSection: title,
        });
    }

    render() {
        return (
            <div className="position-relative bg-white">
                {
                    menus.map(({ title, items }, i) => {
                        let activeState = title === this.state.openSection;

                        return (
                            <NavigationMenu title={title} items={items} key={i} onToggleActive={this.toggleActive} isActive={activeState} />
                        );
                    })
                }
            </div>
        );
    }
}
