import React from 'react';

import Checkbox from '~/pages/components/forms/Checkbox.react';
import DisabledInput from '~/pages/components/forms/DisabledInput.react';
import GrowingTextarea from '~/pages/components/forms/GrowingTextarea.react';
import InputSizes from '~/pages/components/forms/InputSizes.react';
import InputStyles from '~/pages/components/forms/InputStyles.react';
import InputWithContext from '~/pages/components/forms/InputWithContext.react';
import InputWithIcon from '~/pages/components/forms/InputWithIcon.react';
import PageTitle from '~/components/PageTitle';
import SelectMenu from '~/pages/components/forms/SelectMenu.react';
import Textarea from '~/pages/components/forms/Textarea.react';
import TextareaWithIcon from '~/pages/components/forms/TextareaWithIcon.react';

export default function FormElements() {
    return (
        <div>
            <PageTitle title="Form Elements" />
            <InputSizes />
            <InputStyles />
            <InputWithIcon />
            <DisabledInput />
            <Textarea />
            <TextareaWithIcon />
            <GrowingTextarea />
            <InputWithContext />
            <SelectMenu />
            <Checkbox />
        </div>
    );
}
