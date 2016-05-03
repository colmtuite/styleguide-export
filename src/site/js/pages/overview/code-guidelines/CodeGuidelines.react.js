import React from 'react';
import ClassNaming from '~/pages/overview/code-guidelines/ClassNaming.react';
import FileNaming from '~/pages/overview/code-guidelines/FileNaming.react';
import PageTitle from '~/components/PageTitle.react';
import ResponsiveClasses from '~/pages/overview/code-guidelines/ResponsiveClasses.react';
import Scales from '~/pages/overview/code-guidelines/Scales.react';

export default function CodeGuidelines() {
    return (
        <div>
            <PageTitle title="Code guidelines" />

            <div className="marginBottom-xl">
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3 marginBottom-m">The majority of the styleguide is built using single-purpose classes. Single-purpose classes are CSS classes which declare a single value for a single style property, therefore performing a single purpose. The primary benefit here is that when you see a single-purpose class in HTML, you know exactly how it affects that markup but more importantly, you can change it without affecting any other views.</p>
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3 marginBottom-m">You can use these single-purpose CSS classes anywhere you wish and as often as you wish, whether that means inside a component or directly in a view template.</p>
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3">These single-purpose classes make up about 80% of the syleguide codebase. The rest is made up of a set of reusable utility classes for performing common tasks and inline styles, for non reusable, view specific styles.</p>
            </div>

            <FileNaming />
            <ClassNaming />
            <Scales />
            <ResponsiveClasses />
        </div>
    );
}
