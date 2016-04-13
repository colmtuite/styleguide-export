//
// Typography
// -------------------------

export const fontFamilyCode = '<p class="fontFamily-faktSoft">...</p>';

export const fontSizesCode = `<p class="fontSize-xxl">...</p>
<p class="fontSize-xl">...</p>
<p class="fontSize-m">...</p>
<p class="fontSize-s">...</p>
<p class="fontSize-xs">...</p>`;

export const fontWeightCode = `<p class="fontWeight-5">...</p>
<p class="fontWeight-4">...</p>
<p class="fontWeight-3">...</p>`;

export const typeTagsCode = `<strong class="fontWeight-5">...</strong>
<small class="fontSize-s fontWeight-3">...</small>`;

export const alignmentClassesCode = `<p class="textAlign-left">...</p>
<p class="textAlign-center">...</p>
<p class="textAlign-right">...</p>`;

export const transformationClassesCode = `<p class="textTransform-lowercase">...</p>
<p class="textTransform-uppercase">...</p>
<p class="textTransform-capitalize">...</p>`;

//
// Lists
// -------------------------

export const orderedListCode = `<ol class="list list--ordered">
    <li>...</li>
    <li>...</li>
</ol>`;

export const unorderedListCode = `<ul class="list list--unordered">
    <li>...</li>
    <li>...</li>
</ul>`;

//
// Avatars
// -------------------------

export const basicAvatarsCode = `<div class="avatar avatar--m" title="Dean Blacc" style="...">
<div class="avatar-img" style="..."></div>
<div class="avatar-initials">...</div>`;

export const avatarSizesCode = `<div class="avatar avatar--xs" title="Dean Blacc" style="...">
    <div class="avatar-img" style="..."></div>
    <div class="avatar-initials">...</div>
</div>

<div class="avatar avatar--s" title="Dean Blacc" style="...">
    <div class="avatar-img" style="..."></div>
    <div class="avatar-initials">...</div>
</div>

<div class="avatar avatar--m" title="Dean Blacc" style="...">
    <div class="avatar-img" style="..."></div>
    <div class="avatar-initials">...</div>
</div>

<div class="avatar avatar--l" title="Dean Blacc" style="...">
    <div class="avatar-img" style="..."></div>
    <div class="avatar-initials">...</div>
</div>`;

export const avatarsWithIconsCode = `<div class="avatar avatar--m" title="Dean Blacc" style="...">
    <div class="avatar-img" style="..."></div>
    <div class="avatar-initials">...</div>
    <div class="avatar-team" style="..."></div>
</div>`;

export const customAvatarSizesCode = `<div style="width: 200px; height: 200px;">
    <div class="avatar avatar--custom" title="Dean Blacc" style="...">
        <div class="avatar-img" style="..."></div>
        <div class="display-table posPinTL width-100 height-100">
            <div class="display-tableCell verticalAlign-middle">
                <div class="avatar-initials">...</div>
            </div>
        </div>
    </div>
</div>`;

//
// Buttons
// -------------------------

export const buttonSizesCode = `<button class="button button--xl button--flat bg-marvel">...</button>
<button class="button button--l button--flat bg-marvel">...</button>
<button class="button button--m button--flat bg-marvel">...</button>
<button class="button button--s button--flat bg-marvel">...</button>`;

export const flatButtonCode = `<button class="button button--m button--flat bg-marvel">...</button>
<button class="button button--m button--flat bg-positive">...</button>`;

export const ghostButtonCode = '<button class="button button--m button--ghost bg-marvel--hover" type="button">...</button>';

export const outlinedButtonCode = '<button class="button button--m button--outlined bg-white bg-marvel--hover" type="button">...</button>';

export const ghostButtonReversedCode = '<button class="button button--m button--ghost bg-white--hover is-reversed" type="button">...</button>';

export const statefulButtonsCode = `<button class="button button--m button--ghost bg-negative--hover is-sad">...</button>

<!-- Add classes "has-succeeded" and "has-responded" on click -->
<button class="button button--m button--flat button--stateful bg-positive">
    <span>Response</span>
</button>

<!-- Add class "is-loading" on click until the server responds,
then "is-delayed", "has-succeeded" and "has-responded" -->
<button class="button button--m button--flat button--stateful bg-positive">
    <span>Response</span>
</button>

<!-- Add class "is-loading" on click until the server responds,
then "is-delayed", "has-failed" and "has-responded" -->
<button class="button button--m button--flat button--stateful bg-marvel">
    <span>Response</span>
</button>`;

export const buttonWithIconCode = `<button class="button button--xl">
    <span class="display-inlineBlock marginRight-xs">
        <svg class="verticalAlign-middle">...</svg>
    </span>

    <span class="display-inlineBlock">...</span>
</button>`;

export const buttonWithLoneIconCode = `<button class="button button--xl">
    <span class="display-inlineBlock marginRight-xs">
        <svg class="verticalAlign-middle">...</svg>
    </span>

    <span class="display-inlineBlock">...</span>
</button>`;

export const disabledButtonCode = '<button class="button button--m button--flat bg-marvel is-disabled" disabled>Button</button>';

export const buttonWithLogoCode = `<button class="button button--xl">
    <span class="display-inlineBlock marginRight-xs">
        <svg class="verticalAlign-middle">...</svg>
    </span>

    <span class="display-inlineBlock">...</span>
</button>`;

export const buttonWaitingCode = '<button class="button button--m button--flat bg-marvel is-disabled" disabled>Button</button>';

export const buttonGroupCode = `<div class="buttonGroup">
    <div>
        <button class="button button--m button--ghost bg-marvel--hover"></button>
    </div>

    <div>
        <button class="button button--m button--ghost bg-marvel--hover"></button>
    </div>

    <div>
        <button class="button button--m button--ghost bg-marvel--hover"></button>
    </div>

    <div>
        <button class="button button--m button--ghost bg-marvel--hover"></button>
    </div>
</div>`;

//
// Layout code snippets
// -------------------------

export const pageWrapCode = `<div class="pageWrap pageWrap--s">...</div>
<div class="pageWrap pageWrap--m">...</div>
<div class="pageWrap pageWrap--l">...</div>`;

export const gridCode = `<div class="grid grid--m grid--1">
    <div>...</div>
</div>

<div class="grid grid--m grid--2">
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--m grid--3">
    <div>...</div>
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--m grid--4">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--m grid--5">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--m grid--6">
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--m grid--6-4">
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--m grid--7-3">
    <div>...</div>
    <div>...</div>
</div>`;

export const gridSizeCode = `<div class="grid grid--m grid--2">
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--l grid--2">
    <div>...</div>
    <div>...</div>
</div>

<div class="grid grid--xl grid--2">
    <div>...</div>
    <div>...</div>
</div>`;
