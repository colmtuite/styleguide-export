import React from 'react';

import ButtonGroup from '~/pages/components/buttons/ButtonGroup.react';
import ButtonSizes from '~/pages/components/buttons/ButtonSizes.react';
import ButtonWithIcon from '~/pages/components/buttons/ButtonWithIcon.react';
import ButtonWithLogo from '~/pages/components/buttons/ButtonWithLogo.react';
import ButtonWithLoneIcon from '~/pages/components/buttons/ButtonWithLoneIcon.react';
import DisabledButton from '~/pages/components/buttons/DisabledButton.react';
import FlatButton from '~/pages/components/buttons/FlatButton.react';
import GhostButton from '~/pages/components/buttons/GhostButton.react';
import GhostButtonReversed from '~/pages/components/buttons/GhostButtonReversed.react';
import OutlinedButton from '~/pages/components/buttons/OutlinedButton.react';
import PageTitle from '~/components/PageTitle';
import StatefulButtons from '~/pages/components/buttons/StatefulButtons.react';
import WaitingButton from '~/pages/components/buttons/WaitingButton';

export default function Buttons() {
    return (
        <div>
            <PageTitle title="Buttons" />
            <ButtonSizes />
            <FlatButton />
            <GhostButton />
            <OutlinedButton />
            <GhostButtonReversed />
            <StatefulButtons />
            <ButtonWithIcon />
            <ButtonWithLoneIcon />
            <DisabledButton />
            <ButtonWithLogo />
            <WaitingButton />
            <ButtonGroup />
        </div>
    );
}
