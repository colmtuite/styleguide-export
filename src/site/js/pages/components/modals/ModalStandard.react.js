import React from 'react';

export default function ModalStandard() {
    return (
        <div className="display-tableCell verticalAlign-middle">
            <div className="modal modal--s">
                <div className="marginBottom-xs">
                    <h3 className="c-slate fontSize-xl fontWeight-5 textAlign-center">
                        Good morning! Welcome back.
                    </h3>
                </div>

                <div className="marginBottom-l textAlign-center">
                    <span className="fontSize-m fontWeight-3 c-silver">
                        Log into your account here:
                    </span>
                </div>

                <form className="marginBottom-l">
                    <div className="marginBottom-m">
                        <input
                            className="width-100 input input--default input--l"
                            type="email"
                            placeholder="Email address"
                        />
                    </div>

                    <div className="marginBottom-s">
                        <input
                            className="width-100 input input--default input--l"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="marginBottom-m textAlign-right">
                        <span className="link link--light fontWeight-3">
                            Forgotten password?
                        </span>
                    </div>

                    <div>
                        <input
                            className="width-100 button button--l button--flat bg-green c-white"
                            type="submit"
                            value="Log in"
                        />
                    </div>
                </form>

                <div className="marginBottom-l textAlign-center position-relative">
                    <span className="divider c-silver fontWeight-3">
                        Or use Dropbox / Google
                    </span>
                </div>

                <div className="grid grid--m breakPointM-grid--2">
                    <div>
                        <span className="width-100 button button--flat bg-dropbox textAlign-center paddingTopBottom-xs borderRadius-m">
                            <svg
                                className="fill-white display-block centered"
                                height="30"
                                viewBox="0 0 48 46">
                                <path d="M14.1 0l-14.1 9.5 9.8 8.1 14.2-9.1-9.9-8.5zm-14.1 25.6l14.1 9.5 9.9-8.5-14.2-9-9.8 8zm24 1l9.9 8.5 14.1-9.5-9.8-8.1-14.2 9.1zm24-17.1l-14.1-9.5-9.9 8.5 14.2 9.1 9.8-8.1zm-24 18.9l-9.9 8.5-4.2-2.9v3.2l14.1 8.8 14.1-8.7v-3.2l-4.2 2.9-9.9-8.6z"></path>
                            </svg>
                        </span>
                    </div>

                    <div>
                        <span className="width-100 button button--flat bg-google textAlign-center paddingTopBottom-xs borderRadius-m">
                            <svg
                                className="fill-white display-block centered"
                                height="30"
                                viewBox="6 -3 52 46">
                                <path d="M30.8 12.1l-7.7-13.7-17.1 29.5 7.6 13.9 8.1-14zM24.1 29.1l-8.1 13.9h33.9l8.1-14-16.1.1zM41.9 26.3h16.1l-17.1-29.3h-15.7l7.8 13.7z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
