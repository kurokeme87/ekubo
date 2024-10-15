import React, { useState } from "react";
import { useStarknetkitConnectModal } from "starknetkit";
import { useConnect } from "@starknet-react/core";
const App_Home = () => {
  const { connect, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors,
  });
  const connectWallet = async () => {
    const { connector } = await starknetkitConnectModal();
    await connect({ connector });
  };
  return (
    <div className="w-full h-full ">
      <div className="chakra-container font-slussen css-o4ipt">
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "scale(1.1)",
            filter: "blur(50px)",
            backgroundColor: "rgba(102, 28, 196, 0.075)",
            zIndex: -2,
          }}
        ></div>
        <div className="chakra-card css-13pv6sx">
          <div className="chakra-card__header css-nl7d5g">
            <div className="css-193m7l6">
              <a className="chakra-badge css-1e3a5yi" href="/">
                <p className="chakra-text  font-slussen css-1eoz3uu">Swap</p>
              </a>
              <a className="chakra-badge css-1bml7cm" href="/dca">
                <p className="chakra-text  font-slussen css-sz2zha">DCA</p>
              </a>
            </div>
            <button
              type="button"
              className="chakra-button chakra-menu__menu-button css-1u0pjmm"
              id="menu-button-:r3:"
              aria-expanded="false"
              aria-haspopup="menu"
              aria-controls="menu-list-:r3:"
            >
              <span aria-hidden="true" focusable="false" className="css-xl71ch">
                <div className="css-128qqae">
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-ybhvm9"
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g>
                        <line
                          x1="2"
                          y1="7"
                          x2="22"
                          y2="7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></line>
                        <line
                          x1="2"
                          y1="17"
                          x2="22"
                          y2="17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></line>
                        <circle
                          className="circle-right"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="#FFFFFF"
                          cy="7"
                          r="3"
                          cx="8"
                        ></circle>
                        <circle
                          className="circle-left"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          fill="#FFFFFF"
                          cy="17"
                          r="3"
                          cx="16"
                        ></circle>
                      </g>
                    </g>
                  </svg>
                </div>
              </span>
            </button>
            <div
              className="css-r6z5ec"
              style={{
                visibility: "hidden",
                position: "absolute",
                minWidth: "max-content",
                inset: "0px auto auto 0px",
              }}
            >
              <div
                className="chakra-menu__menu-list css-1ewg1wc"
                tabIndex="-1"
                role="menu"
                id="menu-list-:r3:"
                aria-orientation="vertical"
                style={{
                  transformOrigin: "var(--popper-transform-origin)",
                  opacity: 0,
                  visibility: "hidden",
                  transform: "scale(0.8) translateZ(0px)",
                }}
              >
                <div className="chakra-menu__group" role="group">
                  <div className="css-1ns8q35">
                    <div className="css-n35hu2">
                      <p className="chakra-text  font-slussen css-sz2zha">
                        Slippage tolerance
                      </p>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon css-hy6p0n"
                        id="popover-trigger-:r5:"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="popover-content-:r5:"
                      >
                        <g stroke="currentColor" strokeWidth="1.5">
                          <path
                            strokeLinecap="round"
                            fill="none"
                            d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="round"
                            d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
                          ></path>
                          <circle
                            fill="none"
                            strokeMiterlimit="10"
                            cx="12"
                            cy="12"
                            r="11.25"
                          ></circle>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div
                    role="group"
                    className="chakra-button__group css-1i179p9"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      data-active=""
                      className="chakra-menu__menuitem chakra-button css-nr3gk0"
                      id="menu-list-:r3:-menuitem-:r6:"
                      role="menuitem"
                      tabIndex="-1"
                      data-index="0"
                    >
                      Auto
                    </button>
                    <button
                      type="button"
                      className="chakra-menu__menuitem chakra-button css-nr3gk0"
                      id="menu-list-:r3:-menuitem-:r7:"
                      role="menuitem"
                      tabIndex="-1"
                      data-index="1"
                    >
                      Low
                    </button>
                    <button
                      type="button"
                      className="chakra-menu__menuitem chakra-button css-nr3gk0"
                      id="menu-list-:r3:-menuitem-:r8:"
                      role="menuitem"
                      tabIndex="-1"
                      data-index="2"
                    >
                      Medium
                    </button>
                    <button
                      type="button"
                      className="chakra-menu__menuitem chakra-button css-nr3gk0"
                      id="menu-list-:r3:-menuitem-:r9:"
                      role="menuitem"
                      tabIndex="-1"
                      data-index="3"
                    >
                      High
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chakra-stack chakra-card__body css-short2">
            <div className="css-1p4mu0g">
              <h2 className="chakra-heading  font-slussenExtended css-cdj5o1">
                From
              </h2>
              <div className="css-9eizb5">
                <div className="css-1ohwri0">
                  <input
                    type="number"
                    inputMode="decimal"
                    step="0.1"
                    min="0"
                    placeholder="0"
                    className="chakra-input css-rvbhi6"
                    value="1"
                  />
                </div>
                <div className="css-3y82xo">
                  <button type="button" className="chakra-button css-1e6r2y5">
                    <div className="css-1k9efnl">
                      <img
                        src="https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo"
                        className="chakra-image css-lq8flc"
                        style={{
                          border: "2px solid rgb(255, 255, 255)",
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="css-0">ETH</div>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon css-onkibi"
                      >
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="css-vl80cq">
                <div className="css-70qvj9">≈ $2,672.46</div>
              </div>
            </div>
            <div className="css-1brmgfm">
              <button
                type="button"
                className="chakra-button css-iozr48"
                aria-label="Switch input and output tokens"
              >
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="chakra-icon css-jwyrlm"
                  aria-hidden="true"
                >
                  <g fill="currentColor">
                    <path d="M10.319,4.936a7.239,7.239,0,0,1,7.1,2.252,1.25,1.25,0,1,0,1.872-1.657A9.737,9.737,0,0,0,9.743,2.5,10.269,10.269,0,0,0,2.378,9.61a.249.249,0,0,1-.271.178l-1.033-.13A.491.491,0,0,0,.6,9.877a.5.5,0,0,0-.019.526l2.476,4.342a.5.5,0,0,0,.373.248.43.43,0,0,0,.062,0,.5.5,0,0,0,.359-.152l3.477-3.593a.5.5,0,0,0-.3-.844L5.15,10.172a.25.25,0,0,1-.2-.333A7.7,7.7,0,0,1,10.319,4.936Z"></path>
                    <path d="M23.406,14.1a.5.5,0,0,0,.015-.526l-2.5-4.329A.5.5,0,0,0,20.546,9a.489.489,0,0,0-.421.151l-3.456,3.614a.5.5,0,0,0,.3.842l1.848.221a.249.249,0,0,1,.183.117.253.253,0,0,1,.023.216,7.688,7.688,0,0,1-5.369,4.9,7.243,7.243,0,0,1-7.1-2.253,1.25,1.25,0,1,0-1.872,1.656,9.74,9.74,0,0,0,9.549,3.03,10.261,10.261,0,0,0,7.369-7.12.251.251,0,0,1,.27-.179l1.058.127a.422.422,0,0,0,.06,0A.5.5,0,0,0,23.406,14.1Z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="css-1p4mu0g">
              <h2 className="chakra-heading font-slussenExtended css-cdj5o1">
                To
              </h2>
              <div className="css-9eizb5">
                <div className="css-1ohwri0">
                  <input
                    type="number"
                    inputMode="decimal"
                    step="100"
                    min="0"
                    placeholder="0"
                    className="chakra-input css-rvbhi6"
                    value="2672.06"
                  />
                </div>
                <div className="css-3y82xo">
                  <button type="button" className="chakra-button css-1e6r2y5">
                    <div className="css-1k9efnl">
                      <img
                        src="https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e5aaa970-a998-47e8-bd43-4a3b56b87200/logo"
                        className="chakra-image css-lq8flc"
                        style={{
                          border: "2px solid rgb(255, 255, 255)",
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="css-0">USDC</div>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="chakra-icon css-onkibi"
                      >
                        <path
                          fill="currentColor"
                          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="css-1fw1gf0 font-slussen">
                <div className="css-70qvj9">≈ $2,672.06</div>
                <span className="chakra-text  font-slussen css-178tap0">
                  -$0.40
                  <span className="chakra-text  font-slussen css-178tap0">
                    (0.015%)
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="chakra-stack chakra-card__footer css-1jwww6f">
            <div className="chakra-stack css-1pi0xfo">
              <div className="css-9z0f4l">
                <div className="css-14oqdsi">
                  <p className="chakra-text  font-slussen  css-o2d62p">Price</p>
                  <button
                    type="button"
                    className="chakra-button css-1whoiw1"
                    aria-label="Inverse quote token"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      focusable="false"
                      className="chakra-icon css-199kfe"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        fill="currentColor"
                        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="css-18u67se">
                  <p className="chakra-text  font-slussen css-14dd3th">
                    <span>1 ETH ≈ 2,672.06 USDC</span>
                  </p>
                </div>
              </div>
              <div className="css-1lekzkb">
                <p className="chakra-text  font-slussen css-z5y18l">
                  Min received
                </p>
                <div className="css-70qvj9">
                  <p
                    className="chakra-text  font-slussen css-1r31898"
                    id="popover-trigger-:rm:"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="popover-content-:rm:"
                  >
                    2,666.43 USDC
                  </p>
                </div>
              </div>
              <div className="css-1lekzkb">
                <div className="css-14oqdsi">
                  <p className="chakra-text  font-slussen css-z5y18l">
                    Price impact
                  </p>
                </div>
                <div
                  id="popover-trigger-:ro:"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="popover-content-:ro:"
                  className="css-1pkyyq"
                >
                  Low
                </div>
              </div>
            </div>
          </div>
          <div className="css-1ayfwcb">
            <button
              onClick={() => {
                connectWallet();
              }}
              type="button"
              className="chakra-button css-12bjnzv"
            >
              <div className="css-1lads1q">
                <div className="css-15axsv5">
                  <p className="chakra-text   css-1eoz3uu font-slussen">
                    Connect wallet
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App_Home;
