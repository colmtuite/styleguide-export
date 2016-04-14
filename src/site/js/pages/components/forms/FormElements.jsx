import React from 'react';
import PageTitle from '~/components/PageTitle';
import InputSizes from '~/pages/components/forms/InputSizes';
import InputStyles from '~/pages/components/forms/InputStyles';
import InputWithIcon from '~/pages/components/forms/InputWithIcon';
import DisabledInput from '~/pages/components/forms/DisabledInput';
import Textarea from '~/pages/components/forms/Textarea';
import TextareaWithIcon from '~/pages/components/forms/TextareaWithIcon';
import GrowingTextarea from '~/pages/components/forms/GrowingTextarea';
import InputWithContext from '~/pages/components/forms/InputWithContext';
import SelectMenu from '~/pages/components/forms/SelectMenu';
import Checkbox from '~/pages/components/forms/Checkbox';

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
