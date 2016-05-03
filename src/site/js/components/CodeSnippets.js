//
// Typography
// -------------------------

export const fontFamilyCode = '<p class="fontFamily-faktSoft">...</p>';

export const fontSizesCode = `<p class="fontSize-xxl">...</p>
<p class="fontSize-xl">...</p>
<p class="fontSize-m">...</p>
<p class="fontSize-s">...</p>
<p class="fontSize-xs">...</p>`;

export const fontWeightCode = `<p class="fontWeight-3">...</p>
<p class="fontWeight-4">...</p>
<p class="fontWeight-5">...</p>`;

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
// Modals
// -------------------------

export const modalsCode = `<!-- Standard modal -->
<div class="modal-container">
    <div class="display-table width-100 height-100">
        <div class="modal-icon-wrapper">
            <div class="modal-icon modal-icon--light modal-iconClose modal-iconClose--outside">
            </div>
        </div>

        <div class="display-tableCell verticalAlign-middle padding-m">
            <div class="modal modal--s">...</div>
        </div>
    </div>
</div>

<!-- Modal with subtext animating in -->
<div class="modal-container">
    <div class="display-table width-100 height-100">
        <div class="modal-icon-wrapper">
            <div class="modal-icon modal-icon--light modal-iconClose modal-iconClose--outside">
            </div>
        </div>

        <div class="display-tableCell verticalAlign-middle padding-m">
            <div class="modal modal--s">...</div>
            <div class="modal-subtext modal-subtext--after textAlign-center">...</div>
        </div>
    </div>
</div>

<!-- Modal with title animating in -->
<div class="modal-container">
    <div class="display-table width-100 height-100">
        <div class="modal-icon-wrapper">
            <div class="modal-icon modal-icon--light modal-iconClose modal-iconClose--outside">
            </div>
        </div>

        <div class="display-tableCell verticalAlign-middle padding-m">
            <div class="modal-subtext modal-subtext--before">...</div>
            <div class="modal modal--s">...</div>
        </div>
    </div>
</div>`;

//
// Popovers
// -------------------------

export const basicPopoversCode = `<!-- Top popover -->
<div class="popover popover--s popover--top has-caret">
    <div class="padding-s">
        <span class="fontSize-m lineHeight-m">...</span>
    </div>
</div>

<!-- Right popover -->
<div class="popover popover--s popover--right has-caret">
    <div class="padding-s">
        <span class="fontSize-m lineHeight-m">...</span>
    </div>
</div>

<!-- Bottom popover -->
<div class="popover popover--s popover--bottom has-caret">
    <div class="padding-s">
        <span class="fontSize-m lineHeight-m">...</span>
    </div>
</div>

<!-- Left popover -->
<div class="popover popover--s popover--left has-caret">
    <div class="padding-s">
        <span class="fontSize-m lineHeight-m">...</span>
    </div>
</div>`;

export const popoverWithLinks = `<div class="popover popover--s popover--top has-caret">
    <div class="popover-list">
        <a href="#">...</a>
        <a href="#">...</a>
        <a href="#">...</a>
        <a href="#">...</a>
        <div class="popover-separator"></div>
        <a href="#">...</a>
    </div>
</div>`;

export const popoverOnHover = `<div className="popover-trigger position-relative display-inlineBlock">
    <div className="popover popover--s popover--top has-caret">
        <div class="popover-list">
            <a href="#">...</a>
            <a href="#">...</a>
            <a href="#">...</a>
            <a href="#">...</a>
            <div class="popover-separator"></div>
            <a href="#">...</a>
        </div>
    </div>

    <button className="button button--flat button--m bg-positive">
        Hover over me!
    </button>
</div>
`;

//
// Avatars
// -------------------------

export const basicAvatarsCode = `<div class="avatar avatar--m" title="Dean Blacc" style="background-color: (...)">
    <div class="avatar-img" style="background-image: (...)"></div>
    <div class="avatar-initials">...</div>
</div>`;

export const avatarSizesCode = `<!-- Extra small -->
<div class="avatar avatar--xs" title="Dean Blacc" style="background-color: (...)">
    <div class="avatar-img" style="background-image: (...)"></div>
    <div class="avatar-initials">...</div>
</div>

<!-- Small -->
<div class="avatar avatar--s" title="Dean Blacc" style="background-color: (...)">
    <div class="avatar-img" style="background-image: (...)"></div>
    <div class="avatar-initials">...</div>
</div>

<!-- Medium -->
<div class="avatar avatar--m" title="Dean Blacc" style="background-color: (...)">
    <div class="avatar-img" style="background-image: (...)"></div>
    <div class="avatar-initials">...</div>
</div>

<!-- Large -->
<div class="avatar avatar--l" title="Dean Blacc" style="background-color: (...)">
    <div class="avatar-img" style="background-image: (...)"></div>
    <div class="avatar-initials">...</div>
</div>`;

export const avatarsWithIconsCode = `<div class="avatar avatar--m" title="Dean Blacc" style="background-color: (...)">
    <div class="avatar-img" style="background-image: (...)"></div>
    <div class="avatar-initials">...</div>
    <div class="avatar-team" style="background-image: (...)"></div>
</div>`;

export const customAvatarSizesCode = `<div style="width: 200px; height: 200px">
    <div class="avatar avatar--custom" title="Dean Blacc" style="background-color: (...)">
        <div class="avatar-img" style="background-image: (...)"></div>
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

export const statefulButtonsCode = `<!-- Add class "is-sad" to activate the sad face on hover -->
<button class="button button--m button--ghost bg-negative--hover is-sad">...</button>

<!-- Add class "is-loading" on click until the server responds,
then "is-delayed", "has-succeeded" and "has-responded" -->
<button class="button button--m button--flat button--stateful bg-positive">
    <span>...</span>
</button>

<!-- Add class "is-loading" on click until the server responds,
then "is-delayed", "has-failed" and "has-responded" -->
<button class="button button--m button--flat button--stateful bg-marvel">
    <span>...</span>
</button>`;

export const buttonWithIconCode = `<div class="uiIcon uiIcon--m">
    <span class="button button--m button--ghost bg-marvel--hover" role="button">...</span>
    <svg class="svgIcon">...</svg>
</div>`;

export const buttonWithLoneIconCode = `<span class="uiIcon uiIcon--m button button--m button--ghost bg-marvel--hover" role="button">
    <svg class="svgIcon">...</svg>
</span>`;

export const disabledButtonCode = '<button class="button button--m button--flat bg-marvel is-disabled" disabled>Button</button>';

export const buttonWithLogoCode = `<button class="button button--xl">
    <span class="display-inlineBlock marginRight-xs">
        <svg class="verticalAlign-middle">...</svg>
    </span>

    <span class="display-inlineBlock">...</span>
</button>`;

export const buttonWaitingCode = '<button class="button button--m button--flat bg-marvel is-disabled" disabled>...</button>';

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
// Cards
// -------------------------

export const projectCardCode = `<div class="position-relative borderWidth-1 borderStyle-solid borderColor-smoke borderRadius-m bg-snow hideChildren" style="width: 260px;">
    <div class="display-table textAlign-center" style="height: 200px;">
        <div class="display-tableCell verticalAlign-middle">
            <a class="button button--m button--flat bg-marvel hideChildren-child">...</a>
        </div>
    </div>

    <div class="bg-white padding-s textAlign-center borderWidth-0 borderTopWidth-1 borderStyle-solid borderColor-smoke borderRadiusBottom-m">
        <span class="display-block fontSize-m lineHeight-s">...</span>

        <span class="display-block fontSize-xs lineHeight-xs c-silver">...</span>

        <a class="link link--light">
            <svg>...</svg>
        </a>
    </div>
</div>`;

//
// Form elements
// -------------------------

export const inputSizesCode = `<input class="input input--xl" type="text">
<input class="input input--l" type="text">
<input class="input input--m" type="text">
<input class="input input--s" type="text">`;

export const inputStyleCode = '<input class="input input--m input--default" type="text">';

export const inputWithIconCode = `<div class="uiIcon uiIcon--m">
    <input class="input input--m input--default" type="text" placeholder="...">
    <svg class="svgIcon">...</svg>
</div>`;

// Important save dis
// Is the future
// Need to save it
// The whole world depends on this input implementation
export const inputWithIconCodeFuture = `<label class="componentIcon componentIcon--m componentIcon--input">
    <input class="input input--default" type="text" placeholder="Placeholder text">

    <div class="componentIconContainer">
        <div class="height-100 display-table">
            <div class="display-tableCell verticalAlign-middle">
                <svg class="svgIcon fill-smoke--d display-block"></svg>
            </div>
        </div>
    </div>
</label>`;
// ---------------

export const disabledInputCode = '<input class="input input--m input-default is-disabled" type="text" disabled>';

export const textareaCode = '<textarea class="textarea textarea--m textarea--default"></textarea>';

export const textareaWithIconCode = `<div class="uiIcon uiIcon--m uiIcon--textarea">
    <textarea class="textarea textarea--m textarea--default" placeholder="..."></textarea>
    <svg>...</svg>
</div>`;

export const growingTextarea = '<textarea class="textarea textarea--growing textarea--invisible"></textarea>';

export const inputWithContextCode = `<div class="inputGroup inputGroup--m">
    <div>
        <input class="input input--m input--default" type="text">
    </div>

    <div>
        <div class="inputGroup-context">@marvelapp.com</div>
    </div>
</div>`;

export const selectMenuCode = `<div class="select select--default select--m">
    <select></select>
</div>`;

export const checkboxCode = `<label className="form-control checkbox">
    <input type="checkbox" />

    <span className="form-control-indicator">
        <svg>...</svg>
    </span>

    Check this custom checkbox
</label>`;

//
// Links
// -------------------------

export const blueLinkCode = '<a class="link link--blue" href="#">...</a>';

export const lightLinkCode = '<a class="link link--light" href="#">...</a>';

export const lightLinkReversedCode = '<a class="link link--lightReversed" href="#">...</a>';

export const negativeLinkCode = '<a class="link link--negative" href="#">Negative link</a>';

export const snowBackgroundLinkCode = '<a class="padding-s link link--snowBg" href="#">...</a>';

export const colourfulLinksCode = `<a class="link link--blue" href="#">...</a>
<a class="link link--green" href="#">...</a>
<a class="link link--orange" href="#">...</a>
<a class="link link--pink" href="#">...</a>
<a class="link link--purple" href="#">...</a>
<a class="link link--red" href="#">...</a>`;

//
// Layout
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

//
// Border Radius
// -------------------------

export const uniformBorderRadiusCode = `<div class="borderRadius-s"></div>
<div class="borderRadius-m"></div>
<div class="borderRadius-l"></div>
<div class="borderRadius-circle"></div>`;

export const unequalBorderRadiusCode = `<div class="borderRadiusTopLeft-l"></div>
<div class="borderRadiusTopRight-l"></div>
<div class="borderRadiusBottomRight-l"></div>
<div class="borderRadiusBottomLeft-l"></div>`;


export const distantBoxShadowCode = `<div class="boxShadow-distant"></div>
<div class="boxShadow-close"></div>
<div class="boxShadow-subtle"></div>`;

export const raiseBoxShadowCode = `<div class="boxShadow-raise"></div>
<div class="boxShadow-depress"></div>
<div class="boxShadow-smokeDepress"></div>`;

export const embossBoxShadowCode = `<div class="boxShadow-emboss"></div>
<div class="boxShadow-deboss"></div>
<div class="boxShadow-raise"></div>
<div class="boxShadow-depress"></div>`;

export const hoverBoxShadowCode = `<div class="boxShadow-deboss--hover"></div>
<div class="boxShadow-emboss--hover"></div>
<div class="boxShadow-raise--hover"></div>`;


export const spacingCode = `<!-- Margin classes -->
<div class="margin-xxs"></div>
<div class="margin-xs"></div>
<div class="margin-s"></div>
<div class="margin-m"></div>
<div class="margin-l"></div>
<div class="margin-xl"></div>

<!-- Padding classes -->
<div class="padding-xxs"></div>
<div class="padding-xs"></div>
<div class="padding-s"></div>
<div class="padding-m"></div>
<div class="padding-l"></div>
<div class="padding-xl"></div>`;

export const individualSpacingCode = `<!-- Margin classes -->
<div class="marginTop-m"></div>
<div class="marginRight-m"></div>
<div class="marginBottom-m"></div>
<div class="marginLeft-m"></div>

<!-- Padding classes -->
<div class="paddingTop-m"></div>
<div class="paddingRight-m"></div>
<div class="paddingBottom-m"></div>
<div class="paddingLeft-m"></div>`;


export const transitionsCode = `<div class="scaleUp--hover transitionTimingFunction-cb--scaleUp"></div>
<div class="animation--spin"></div>
<div class="animation--rotate"></div>
<div class="animation--bounce"></div>`;

export const timingCode = `<div class="transitionDuration-s"></div>
<div class="transitionDuration-m"></div>
<div class="transitionDuration-l"></div>
<div class="transitionDuration-xl"></div>
<div class="transitionDuration-xxl"></div>`;

export const easingCode = `<!-- No curve. Good for color/opacity fades -->
<div class="transitionTimingFunction-linear"></div>

<!-- Slight curve. Good for subtle transitions -->
<div class="transitionTimingFunction-ease"></div>

<!-- Starts fast and decelerates as it progresses -->
<div class="transitionTimingFunction-cb--scaleIn"></div>

<!-- Starts slow and accelerates as it progresses  -->
<div class="transitionTimingFunction-cb--scaleOut"></div>

<!-- Springy feel. Good for drawing focus -->
<div class="transitionTimingFunction-cb--scaleUp"></div>`;

//
// Scrollbar
// -------------------------

export const scrollbarCode = `<div class="antiscroll-wrap">
    <div class="antiscroll-inner">
        <div>...</div>
    </div>
</div>`;

//
// Hide elements
// -------------------------

export const hideElementsCompletelyCode = '<div class="hidden"></div>';

export const hideElementsVisuallyCode = '<div class="visuallyHidden"></div>';

export const hideChildrenCode = `<div class="hideChildren">
    <div class="hideChildren-child"></div>
</div>`;

//
// Text manipulation
// -------------------------

export const truncateTextCode = '<p class="truncateText">...</p>';

//
// Center elements
// -------------------------

export const horizontallyCenterElementsCode = '<div class="centered"></div>';

export const verticallyCenterElementsCode = `<div style="height: 300px">
    <div class="verticallyCenter">...</div>
</div>`;

//
// Positioning
// -------------------------

export const clearfixCode = '<div class="cf">...</div>';

export const inlineCode = `<!-- Basic example without margins -->
<div class="inline">
    <div>
        <div class="bg-smoke"></div>
    </div>

    <div>
        <div class="bg-silver"></div>
    </div>

    <div>
        <div class="bg-steel"></div>
    </div>
</div>

<!--  Example with margins -->
<div class="inline">
    <div class="marginRight-m">
        <div class="bg-smoke"></div>
    </div>

    <div class="marginRight-m">
        <div class="bg-silver"></div>
    </div>

    <div class="marginRight-m">
        <div class="bg-steel"></div>
    </div>
</div>`;

export const pinCode = `<!-- Absolutely pin an element to its closest relative parent -->
<div class="position-relative">
    <div class="posPinTL"></div>
    <div class="posPinTR"></div>
    <div class="posPinBL"></div>
    <div class="posPinBR"></div>
</div>

<!-- Fix an element to a viewport corner -->
<div class="posFixTL"></div>
<div class="posFixTR"></div>
<div class="posFixBL"></div>
<div class="posFixBR"></div>`;
