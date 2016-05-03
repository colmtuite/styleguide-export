import React from 'react';
import PageTitle from '~/components/PageTitle.react';

export default function Introduction() {
    return (
        <div>
            <PageTitle title="Introduction" />

            <div className="marginBottom-xl">
                <p className="c-slate lineHeight-xl fontSize-xl fontWeight-3">As Marvel continues to grow, both as a product and a company, one challenge we are faced with is learning how to refine the Marvel brand identity and apply it cohesively to each of our products. We created this styleguide to act as a central location where we house a live inventory of UI components, brand guidelines, brand assets, code snippets, developer guidelines and more. Anyone working on the Marvel product is encouraged to stay familiar with this styleguide and help ensure that it is kept up-to-date.</p>
            </div>

            <div className="marginBottom-l">
                <p className="c-slate lineHeight-xl fontSize-xxl fontWeight-4">Goals</p>
            </div>

            <div className="marginBottom-xl">
                <div className="grid grid--l grid--1 breakPointS-grid--3">
                    <div>
                        <div className="marginBottom-m">
                            <svg width="96px" height="96px" viewBox="0 0 96 96">
                                <g id="Page-1" stroke="none" fill="none" fill-rule="evenodd">
                                    <g id="Devices">
                                        <rect id="Rectangle-4" fill="#A0DFFF" x="28" y="27" width="66" height="46" rx="8"></rect>
                                        <rect id="Rectangle-4" fill="#C2EAFF" x="27.96993" y="25.96993" width="62" height="43"></rect>
                                        <path d="M26,34.9980749 C26,29.4762906 30.4853006,25 35.9920972,25 L86.0079028,25 C91.5263857,25 96,29.4811691 96,34.9980749 L96,65.0019251 C96,70.5237094 91.5146994,75 86.0079028,75 L35.9920972,75 C30.4736143,75 26,70.5188309 26,65.0019251 L26,34.9980749 Z M28,34.9994481 C28,30.5814749 31.571848,27 35.9940005,27 L86.0059995,27 C90.4209641,27 94,30.5903827 94,34.9994481 L94,65.0005519 C94,69.4185251 90.428152,73 86.0059995,73 L35.9940005,73 C31.5790359,73 28,69.4096173 28,65.0005519 L28,34.9994481 Z" id="Combined-Shape" fill="#1FB6FF"></path>
                                        <polygon id="Path-2" fill="#1FB6FF" transform="translate(79.001648, 81.000580) scale(-1, 1) translate(-79.001648, -81.000580) " points="71 73 71 89.0011597 87.0032959 73"></polygon>
                                        <polygon id="Path-2" fill="#A0DFFF" transform="translate(79.001648, 79.000580) scale(-1, 1) translate(-79.001648, -79.000580) " points="73 73 73 85.0011597 85.0032959 73"></polygon>
                                        <rect id="Rectangle-4" fill="#E7F7FF" x="2" y="15" width="66" height="46" rx="8"></rect>
                                        <rect id="Rectangle-4" fill="#C2EAFF" x="5.96993001" y="18.96993" width="63" height="43" rx="6"></rect>
                                        <path d="M0,22.9980749 C0,17.4762906 4.48530063,13 9.99209717,13 L60.0079028,13 C65.5263857,13 70,17.4811691 70,22.9980749 L70,53.0019251 C70,58.5237094 65.5146994,63 60.0079028,63 L9.99209717,63 C4.47361428,63 0,58.5188309 0,53.0019251 L0,22.9980749 Z M2,22.9994481 C2,18.5814749 5.57184797,15 9.99400046,15 L60.0059995,15 C64.4209641,15 68,18.5903827 68,22.9994481 L68,53.0005519 C68,57.4185251 64.428152,61 60.0059995,61 L9.99400046,61 C5.57903592,61 2,57.4096173 2,53.0005519 L2,22.9994481 Z" id="Combined-Shape" fill="#1FB6FF"></path>
                                        <polygon id="Path-2" fill="#1FB6FF" points="10 61 10 77.0011597 26.0032959 61"></polygon>
                                        <polygon id="Path-2" fill="#C2EAFF" points="12 61 12 73.0011597 24.0032959 61"></polygon>
                                        <path d="M50,42 C52.209139,42 54,40.209139 54,38 C54,35.790861 52.209139,34 50,34 C47.790861,34 46,35.790861 46,38 C46,40.209139 47.790861,42 50,42 Z" id="Oval-5" fill="#9EDAF8"></path>
                                        <ellipse id="Oval-5" fill="#9EDAF8" cx="20" cy="38" rx="4" ry="4"></ellipse>
                                        <ellipse id="Oval-5" fill="#9EDAF8" cx="35" cy="38" rx="4" ry="4"></ellipse>
                                        <polygon id="Star-1" fill="#A0DFFF" transform="translate(91.755283, 6.522542) rotate(-330.000000) translate(-91.755283, -6.522542) " points="91.7552826 9.5 88.8163563 11.045085 89.3776413 7.77254249 87 5.45491503 90.2858195 4.97745751 91.7552826 2 93.2247457 4.97745751 96.5105652 5.45491503 94.1329239 7.77254249 94.6942088 11.045085"></polygon>
                                        <polygon id="Star-1" fill="#C2EAFF" transform="translate(77.150270, 14.805211) rotate(-330.000000) translate(-77.150270, -14.805211) " points="77.1502697 17.1094685 74.9871507 18.3052112 75.4002697 15.7725874 73.6502697 13.9789733 76.0687102 13.6094685 77.1502697 11.3052112 78.2318292 13.6094685 80.6502697 13.9789733 78.9002697 15.7725874 79.3133887 18.3052112"></polygon>
                                        <polygon id="Star-1" fill="#C2EAFF" transform="translate(58.150270, 91.805211) rotate(-330.000000) translate(-58.150270, -91.805211) " points="58.1502697 94.1094685 55.9871507 95.3052112 56.4002697 92.7725874 54.6502697 90.9789733 57.0687102 90.6094685 58.1502697 88.3052112 59.2318292 90.6094685 61.6502697 90.9789733 59.9002697 92.7725874 60.3133887 95.3052112"></polygon>
                                        <polygon id="Star-1" fill="#C2EAFF" transform="translate(12.755283, 3.522542) rotate(-30.000000) translate(-12.755283, -3.522542) " points="12.7552826 6.5 9.81635632 8.04508497 10.3776413 4.77254249 8 2.45491503 11.2858195 1.97745751 12.7552826 -1 14.2247457 1.97745751 17.5105652 2.45491503 15.1329239 4.77254249 15.6942088 8.04508497"></polygon>
                                        <polygon id="Star-1" fill="#A0DFFF" transform="translate(23.755283, 80.522542) rotate(-330.000000) translate(-23.755283, -80.522542) " points="23.7552826 83.5 20.8163563 85.045085 21.3776413 81.7725425 19 79.454915 22.2858195 78.9774575 23.7552826 76 25.2247457 78.9774575 28.5105652 79.454915 26.1329239 81.7725425 26.6942088 85.045085"></polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Cohesive design language</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">Refine our visual language to be simpler, more fun and more communicative.</p>
                    </div>

                    <div>
                        <div className="marginBottom-m">
                            <svg width="96px" height="96px" viewBox="0 0 96 96">
                                <g id="Page-1" stroke="none" fill="none" fill-rule="evenodd">
                                    <g id="Devices">
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="8" y="16" width="80" height="64" rx="4"></rect>
                                        <rect id="Rectangle-4" fill="#FFFFFF" x="10" y="18" width="76" height="60" rx="1"></rect>
                                        <rect id="Rectangle-7" fill="#C2EAFF" x="10" y="68" width="76" height="10" rx="2"></rect>
                                        <rect id="Rectangle-8" fill="#3FABFB" x="10" y="68" width="76" height="2"></rect>
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="68" y="56" width="28" height="40" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#FFFFFF" x="70" y="59" width="24" height="31"></rect>
                                        <polygon id="Path-1" fill="#C2EAFF" points="56.9984945 80.0172729 58 95 44 95 44 80"></polygon>
                                        <rect id="Rectangle-12" fill="#FFFFFF" x="79" y="57" width="6" height="1" rx="3"></rect>
                                        <rect id="Rectangle-5" fill="#1FB6FF" x="34" y="94" width="26" height="2" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="1" y="61" width="44" height="33" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="0" y="92" width="46" height="4" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#FFFFFF" x="3" y="63" width="40" height="29"></rect>
                                        <rect id="Rectangle-13" fill="#1FB6FF" x="63" y="76" width="12" height="20" rx="2"></rect>
                                        <circle id="Oval-1" fill="#FFFFFF" cx="82" cy="93" r="1"></circle>
                                        <circle id="Oval-1" fill="#FFFFFF" cx="69" cy="94" r="1"></circle>
                                        <rect id="Rectangle-13" fill="#FFFFFF" x="64" y="79" width="10" height="13"></rect>
                                        <circle id="Oval-2" fill="#009EEB" cx="48" cy="74" r="1"></circle>
                                        <rect id="Rectangle-15" fill="#FFFFFF" x="67" y="77" width="4" height="1" rx="2"></rect>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Platform agnostic system</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">Develop a single, unified system that is transferrable across all platforms and devices.</p>
                    </div>

                    <div>
                        <div className="marginBottom-m">
                            <svg width="96px" height="96px" viewBox="0 0 96 96">
                                <g id="Page-1" stroke="none" fill="none" fill-rule="evenodd">
                                    <g id="Devices">
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="8" y="16" width="80" height="64" rx="4"></rect>
                                        <rect id="Rectangle-4" fill="#FFFFFF" x="10" y="18" width="76" height="60" rx="1"></rect>
                                        <rect id="Rectangle-7" fill="#C2EAFF" x="10" y="68" width="76" height="10" rx="2"></rect>
                                        <rect id="Rectangle-8" fill="#3FABFB" x="10" y="68" width="76" height="2"></rect>
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="68" y="56" width="28" height="40" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#FFFFFF" x="70" y="59" width="24" height="31"></rect>
                                        <polygon id="Path-1" fill="#C2EAFF" points="56.9984945 80.0172729 58 95 44 95 44 80"></polygon>
                                        <rect id="Rectangle-12" fill="#FFFFFF" x="79" y="57" width="6" height="1" rx="3"></rect>
                                        <rect id="Rectangle-5" fill="#1FB6FF" x="34" y="94" width="26" height="2" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="1" y="61" width="44" height="33" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#1FB6FF" x="0" y="92" width="46" height="4" rx="2"></rect>
                                        <rect id="Rectangle-2" fill="#FFFFFF" x="3" y="63" width="40" height="29"></rect>
                                        <rect id="Rectangle-13" fill="#1FB6FF" x="63" y="76" width="12" height="20" rx="2"></rect>
                                        <circle id="Oval-1" fill="#FFFFFF" cx="82" cy="93" r="1"></circle>
                                        <circle id="Oval-1" fill="#FFFFFF" cx="69" cy="94" r="1"></circle>
                                        <rect id="Rectangle-13" fill="#FFFFFF" x="64" y="79" width="10" height="13"></rect>
                                        <circle id="Oval-2" fill="#009EEB" cx="48" cy="74" r="1"></circle>
                                        <rect id="Rectangle-15" fill="#FFFFFF" x="67" y="77" width="4" height="1" rx="2"></rect>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Expedite the design process</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">By abstracting our base styles layer, now developers can churn out UIs with minimal design input.</p>
                    </div>
                </div>
            </div>

            <div className="marginBottom-l">
                <p className="c-slate lineHeight-xl fontSize-xxl fontWeight-4">Frequently asked questions</p>
            </div>

            <div>
                <div className="grid grid--l grid--1 breakPointS-grid--2">
                    <div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">What is the Marvel styleguide?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3 marginBottom-l">Our styleguide is a live inventory of UI components, design patterns, brand assets and code guidelines which the whole Marvel team work from, keeping all of our products cohesive.</p>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Do Marvel products use this styleguide?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">This styleguide is built on the exact same codebase as each of our live products. This styleguide is the central hub - new updates are pushed here first, then trickle down to our live products.</p>
                    </div>

                    <div>
                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Will this Marvel styleguide be open-sourced?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3 marginBottom-l">For the moment, we have not yet open-sourced, mainly because it is still heavily in flux. But yes, at some point in the near future we are planning to package it up and make it easily accessible to everyone.</p>

                        <p className="c-slate lineHeight-l fontSize-l marginBottom-xxs fontWeight-4">Can I use this styleguide in my own work?</p>
                        <p className="c-silver lineHeight-l fontSize-m fontWeight-3">Sure, go ahead! We are planning to open-source our styleguide soon, so feel free to use it any way you wish.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
