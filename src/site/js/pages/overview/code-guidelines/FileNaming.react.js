import React from 'react';
import SectionTitle from '~/components/SectionTitle.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionCode from '~/components/SectionCode.react';
import { fileNamingCode } from '~/components/CodeSnippets';

export default function FileNaming() {
    return (
        <div>
            <section className="marginBottom-xl">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <SectionTitle sectionTitle={"File naming"} />

                    <SectionDescription>
                        All folder names should be plural. All component filenames should be singular.
                    </SectionDescription>
                </div>

                <SectionCode codeType="language-css" code={fileNamingCode} topBorder="true" />
            </section>
        </div>
    );
}
