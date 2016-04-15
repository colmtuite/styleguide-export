import React from 'react';

import NavigationMenu from '~/NavigationMenu';

const menus = [
    {
        title: 'Overview',
        items: [
           { title: 'Introduction', url: '/overview/introduction' },
           { title: 'Code Guidelines', url: '/overview/code-guidelines' },
           { title: 'Naming Convention', url: '/overview/naming-convention' },
        ],
    }, {
        title: 'Design',
        items: [
            { title: 'Colors', url: '/design/colors' },
            { title: 'Typography', url: '/design/typography' },
            { title: 'Border Radius', url: '/design/border-radius' },
            { title: 'Box Shadow', url: '/design/box-shadow' },
            { title: 'Transitions', url: '/design/transitions' },
        ],
    }, {
        title: 'Components',
        items: [
            { title: 'Avatars', url: '/components/avatars' },
            { title: 'Buttons', url: '/components/buttons' },
            { title: 'Cards', url: '/components/cards' },
            { title: 'Form elements', url: '/components/form-elements' },
            { title: 'Layout', url: '/components/layout' },
            { title: 'Links', url: '/components/links' },
            { title: 'Lists', url: '/components/lists' },
            { title: 'Modals', url: '/components/modals' },
            { title: 'Popovers', url: '/components/popovers' },
        ],
    }, {
        title: 'Utility',
        items: [
            { title: 'Scrollbar', url: '/utility/scrollbar' },
            { title: 'Hide elements', url: '/utility/hide-elements' },
            { title: 'Center elements', url: '/utility/center-elements' },
            { title: 'Text manipulation', url: '/utility/text-manipulation' },
            { title: 'Positioning', url: '/utility/positioning' },
        ],
    },
];

export default function Navigation() {
    return (
        <div className="position-relative bg-white">
            { menus.map(({ title, items }, i) => <NavigationMenu title={title} items={items} key={i} />) }
        </div>
    );
}
