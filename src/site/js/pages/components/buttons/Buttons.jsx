import React from 'react';
import PageTitle from '~/components/PageTitle';
import ButtonSizes from '~/pages/components/buttons/ButtonSizes';
import FlatButton from '~/pages/components/buttons/FlatButton';
import GhostButton from '~/pages/components/buttons/GhostButton';
import OutlinedButton from '~/pages/components/buttons/OutlinedButton';
import GhostButtonReversed from '~/pages/components/buttons/GhostButtonReversed';
import StatefulButtons from '~/pages/components/buttons/StatefulButtons';
import ButtonWithIcon from '~/pages/components/buttons/ButtonWithIcon';
import ButtonWithLoneIcon from '~/pages/components/buttons/ButtonWithLoneIcon';
import DisabledButton from '~/pages/components/buttons/DisabledButton';
import ButtonWithLogo from '~/pages/components/buttons/ButtonWithLogo';
import WaitingButton from '~/pages/components/buttons/WaitingButton';
import ButtonGroup from '~/pages/components/buttons/ButtonGroup';

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
