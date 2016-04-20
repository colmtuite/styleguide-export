import React from 'react';

import OrderedList from '~/pages/components/lists/OrderedList.react';
import PageTitle from '~/components/PageTitle';
import UnorderedList from '~/pages/components/lists/UnorderedList.react';

export default function Lists() {
    return (
        <div>
            <PageTitle title="Lists" />
            <OrderedList />
            <UnorderedList />
        </div>
    );
}
