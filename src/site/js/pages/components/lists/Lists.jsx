import React from 'react';
import PageTitle from '~/components/PageTitle';

import OrderedList from '~/pages/components/lists/OrderedList';
import UnorderedList from '~/pages/components/lists/UnorderedList';

export default function Lists() {
    return (
        <div>
            <PageTitle title="Lists" />
            <OrderedList />
            <UnorderedList />
        </div>
    );
}
