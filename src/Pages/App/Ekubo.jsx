import React from "react";
import Navbar from "../../Components/Navbar";
import './Ekubo.css'
const Ekubo = () => {
    return (
        <div>
            <div className="chakra-container css-1lbij9q">
                <div className="css-biwd95">
                    <h2 className="chakra-heading css-2ufg4c">
                        <span className="chakra-text font-slussenExtended css-1qjme2g">$EKUBO</span> has arrived
                    </h2>
                </div>
                <div className="chakra-card css-1qgexbu">
                    <div className="chakra-card__body css-mfusuv">
                        <div role="group" className="chakra-stat__group css-hcqe98">
                            <div className="chakra-stat css-1mbo1ls">
                                <dl>
                                    <dt className="chakra-stat__label css-14go5ty">Price</dt>
                                    <dd className="chakra-stat__number css-1na2zuv">$2.34</dd>
                                    <dd className="chakra-stat__help-text css-1phhsu0">
                                        Current price of EKUBO
                                    </dd>
                                </dl>
                            </div>
                            <div className="chakra-stat css-1mbo1ls">
                                <dl>
                                    <dt className="chakra-stat__label css-14go5ty">
                                        Total supply
                                    </dt>
                                    <dd className="chakra-stat__number css-1na2zuv">
                                        10,000,000
                                    </dd>
                                    <dd className="chakra-stat__help-text css-1phhsu0">
                                        Number of tokens
                                    </dd>
                                </dl>
                            </div>
                            <div className="chakra-stat css-1mbo1ls">
                                <dl>
                                    <dt className="chakra-stat__label css-14go5ty">Delegated</dt>
                                    <dd className="chakra-stat__number css-1na2zuv">67.8%</dd>
                                    <dd className="chakra-stat__help-text css-1phhsu0">
                                        Amount currently delegated for voting
                                    </dd>
                                </dl>
                            </div>
                            <hr
                                aria-orientation="horizontal"
                                className="chakra-divider css-svjswr"
                            />
                            <div className="chakra-stat css-1mbo1ls">
                                <dl>
                                    <dt className="chakra-stat__label css-14go5ty">Airdrop</dt>
                                    <dd className="chakra-stat__number css-1na2zuv">33.3%</dd>
                                    <dd className="chakra-stat__help-text css-1phhsu0">
                                        To liquidity providers
                                    </dd>
                                </dl>
                            </div>
                            <div className="chakra-stat css-1mbo1ls">
                                <dl>
                                    <dt className="chakra-stat__label css-14go5ty">DAO</dt>
                                    <dd className="chakra-stat__number css-1na2zuv">33.3%</dd>
                                    <dd className="chakra-stat__help-text css-1phhsu0">
                                        Proceeds of DCA sale
                                    </dd>
                                </dl>
                            </div>
                            <div className="chakra-stat css-1mbo1ls">
                                <dl>
                                    <dt className="chakra-stat__label css-14go5ty">Team</dt>
                                    <dd className="chakra-stat__number css-1na2zuv">33.3%</dd>
                                    <dd className="chakra-stat__help-text css-1phhsu0">
                                        To Ekubo, Inc.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <hr
                            aria-orientation="horizontal"
                            className="chakra-divider css-evmj4r"
                        />
                        <div className="css-790np8">
                            <div className="css-1s7u3kz">Starknet</div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chakra-link chakra-text css-bm5a1m"
                                href="https://voyager.online/token/0x075afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87"
                            >
                                0x075afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87
                            </a>
                        </div>
                        <div className="css-790np8">
                            <div className="css-1s7u3kz">Ethereum</div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="chakra-link chakra-text css-bm5a1m"
                                href="https://etherscan.io/token/0x04C46E830Bb56ce22735d5d8Fc9CB90309317d0f"
                            >
                                0x04C46E830Bb56ce22735d5d8Fc9CB90309317d0f
                            </a>
                        </div>
                    </div>
                </div>
                <div className="chakra-accordion css-1ayfwcb">
                    <div className="chakra-accordion__item css-17mg6aq">
                        <button
                            type="button"
                            id="accordion-button-:r2:"
                            aria-expanded="true"
                            aria-controls="accordion-panel-:r2:"
                            className="chakra-accordion__button css-1fyfidi"
                            data-index="0"
                        >
                            Airdrop
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon chakra-accordion__icon css-j2ph2z"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className="chakra-collapse"
                            style={{
                                overflow: "hidden",
                                display: "block",
                                opacity: 1,
                                height: "auto",
                            }}
                        >
                            <div
                                role="region"
                                id="accordion-panel-:r2:"
                                aria-labelledby="accordion-button-:r2:"
                                className="chakra-accordion__panel css-mxa4qn"
                            >
                                <div className="css-sfajb0">
                                    <p className="chakra-text css-12j2za3">
                                        <span className="chakra-text css-zfx5r2">33.3%</span> of the
                                        total supply is available to claim by users of Ekubo
                                        Protocol based on points earned.
                                    </p>
                                    <p className="chakra-text css-12j2za3">
                                        A user's allocation is approximately equal to their share of
                                        total points on the leaderboard, with a few adjustments: we
                                        exponentiated each user's points, and accounts that earned
                                        less than
                                        <span className="chakra-text css-zfx5r2">1,000</span> points
                                        were excluded.
                                    </p>
                                    <div className="css-gmuwbf">
                                        <code className="chakra-code css-termar">
                                            points<sup>boost</sup> / SUM(points<sup>boost</sup>)
                                        </code>
                                    </div>
                                    <p className="chakra-text css-11jpkhn">
                                        The factor
                                        <code className="chakra-code css-1nu1pzg">boost</code> is
                                        one of three values:
                                    </p>
                                    <ul role="list" className="css-1es3m10">
                                        <li className="css-0">
                                            For volunteer moderators,
                                            <code className="chakra-code css-lqvy6z">
                                                boost = 1.01
                                            </code>
                                        </li>
                                        <li className="css-0">
                                            For active translators,
                                            <code className="chakra-code css-lqvy6z">
                                                boost = 1.001
                                            </code>
                                        </li>
                                        <li className="css-0">
                                            For everyone else,
                                            <code className="chakra-code css-lqvy6z">
                                                boost = 1.0001
                                            </code>
                                        </li>
                                    </ul>
                                    <p className="chakra-text css-zsafu1">
                                        There is no deadline to claim the airdrop.
                                    </p>
                                </div>
                                <button type="button" className="chakra-button css-12bjnzv">
                                    <div className="css-1lads1q">
                                        <div className="css-15axsv5">
                                            <p className="chakra-text css-1eoz3uu">
                                                Connect to claim
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="chakra-accordion__item css-17mg6aq">
                        <button
                            type="button"
                            id="accordion-button-:r4:"
                            aria-expanded="false"
                            aria-controls="accordion-panel-:r4:"
                            className="chakra-accordion__button css-1fyfidi"
                            data-index="1"
                        >
                            <div className="css-0">
                                Sale<span className="chakra-badge css-1jw0d1c">Completed</span>
                            </div>
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon chakra-accordion__icon css-186l2rg"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className="chakra-collapse"
                            style={{
                                overflow: "hidden",
                                display: "none",
                                opacity: 0,
                                height: 0,
                            }}
                        >
                            <div
                                role="region"
                                id="accordion-panel-:r4:"
                                aria-labelledby="accordion-button-:r4:"
                                className="chakra-accordion__panel css-mxa4qn"
                            >
                                <div className="css-0">
                                    <p className="chakra-text css-1dn3sp">
                                        <span className="chakra-text css-zfx5r2">33.3%</span> of the
                                        total supply is sold via
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="chakra-link css-spn4bz"
                                            href="https://docs.ekubo.org/user-guides/dollar-cost-average-orders"
                                        >
                                            DCA orders
                                        </a>
                                        on the following pools:
                                    </p>
                                    <div className="css-ry27lk">
                                        <a
                                            className="chakra-button css-s373cw"
                                            href="/positions/new?poolType=twamm&amp;quoteCurrency=ETH&amp;baseCurrency=EKUBO&amp;fee=17014118346046923173168730371588410570&amp;poolOnly=true"
                                        >
                                            <span className="chakra-text css-zfx5r2">
                                                EKUBO / ETH - 5%
                                            </span>
                                        </a>
                                        <a
                                            className="chakra-button css-s373cw"
                                            href="/positions/new?poolType=twamm&amp;quoteCurrency=STRK&amp;baseCurrency=EKUBO&amp;fee=17014118346046923173168730371588410570&amp;poolOnly=true"
                                        >
                                            <span className="chakra-text css-zfx5r2">
                                                EKUBO / STRK - 5%
                                            </span>
                                        </a>
                                        <a
                                            className="chakra-button css-s373cw"
                                            href="/positions/new?poolType=twamm&amp;quoteCurrency=USDC&amp;baseCurrency=EKUBO&amp;fee=17014118346046923173168730371588410570&amp;poolOnly=true"
                                        >
                                            <span className="chakra-text css-zfx5r2">
                                                EKUBO / USDC - 5%
                                            </span>
                                        </a>
                                    </div>
                                    <p className="chakra-text css-qjgj1z">
                                        The DCA orders execute over
                                        <span className="chakra-text css-zfx5r2">2 months</span>,
                                        starting 5/24/24, 3:48 AM and ending 7/23/24, 8:09 PM. The
                                        proceeds of the DCA order are owned by the
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="chakra-link css-spn4bz"
                                            href="https://voyager.online/contract/0x053499f7aa2706395060fe72d00388803fb2dcc111429891ad7b2d9dcea29acd"
                                        >
                                            Governor
                                            <svg
                                                viewBox="0 0 24 24"
                                                focusable="false"
                                                className="chakra-icon css-sv5w6l"
                                            >
                                                <g
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14L21 3"></path>
                                                </g>
                                            </svg>
                                        </a>
                                        , a.k.a. the DAO.
                                    </p>
                                    <p className="chakra-text css-qjgj1z">
                                        Buy orders placed for the same time period will get
                                        approximately the average price during the period. In
                                        addition, liquidity providers of the DCA-enabled pool can
                                        earn up to
                                        <span className="chakra-text css-zfx5r2">1.67%</span> of the
                                        total supply in fees from the DCA order.
                                    </p>
                                </div>
                                <div className="css-1wk0drq">
                                    <button
                                        className="chakra-button css-1iprljj"
                                        title="Sale has ended"
                                        disabled=""
                                        type="button"
                                    >
                                        Buy with ETH
                                    </button>
                                    <button
                                        className="chakra-button css-1iprljj"
                                        title="Sale has ended"
                                        disabled=""
                                        type="button"
                                    >
                                        Buy with STRK
                                    </button>
                                    <button
                                        className="chakra-button css-1iprljj"
                                        title="Sale has ended"
                                        disabled=""
                                        type="button"
                                    >
                                        Buy with USDC
                                    </button>
                                </div>
                                <p className="chakra-text css-1ni4hns">
                                    The sale has started. Below are some stats on the current
                                    state of the sale:
                                </p>
                                <div role="group" className="chakra-stat__group css-p4gx87">
                                    <div className="chakra-stat css-1mbo1ls">
                                        <dl>
                                            <dt className="chakra-stat__label css-14go5ty">
                                                EKUBO sold
                                            </dt>
                                            <dd className="chakra-stat__number css-1na2zuv">
                                                <span
                                                    className="chakra-text css-zfx5r2"
                                                    title="3,269,920"
                                                >
                                                    3,269,920
                                                </span>
                                            </dd>
                                            <dd className="chakra-stat__help-text css-1phhsu0">
                                                Total EKUBO sold so far
                                            </dd>
                                        </dl>
                                    </div>
                                    <div
                                        id="popover-trigger-:r7:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:r7:"
                                        className="chakra-stat css-1mbo1ls"
                                    >
                                        <dl>
                                            <dt className="chakra-stat__label css-14go5ty">
                                                ETH bought
                                            </dt>
                                            <dd className="chakra-stat__number css-1na2zuv">
                                                <span
                                                    className="chakra-text css-zfx5r2"
                                                    title="343.675"
                                                >
                                                    343.675
                                                </span>
                                            </dd>
                                            <dd className="chakra-stat__help-text css-1phhsu0">
                                                Total ETH purchased with EKUBO
                                            </dd>
                                        </dl>
                                    </div>
                                    <div
                                        id="popover-trigger-:r9:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:r9:"
                                        className="chakra-stat css-1mbo1ls"
                                    >
                                        <dl>
                                            <dt className="chakra-stat__label css-14go5ty">
                                                USDC bought
                                            </dt>
                                            <dd className="chakra-stat__number css-1na2zuv">
                                                <span
                                                    className="chakra-text css-zfx5r2"
                                                    title="1,204,770"
                                                >
                                                    1,204,770
                                                </span>
                                            </dd>
                                            <dd className="chakra-stat__help-text css-1phhsu0">
                                                Total USDC purchased with EKUBO
                                            </dd>
                                        </dl>
                                    </div>
                                    <div
                                        id="popover-trigger-:rb:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:rb:"
                                        className="chakra-stat css-1mbo1ls"
                                    >
                                        <dl>
                                            <dt className="chakra-stat__label css-14go5ty">
                                                STRK bought
                                            </dt>
                                            <dd className="chakra-stat__number css-1na2zuv">
                                                <span
                                                    className="chakra-text css-zfx5r2"
                                                    title="1,549,920"
                                                >
                                                    1,549,920
                                                </span>
                                            </dd>
                                            <dd className="chakra-stat__help-text css-1phhsu0">
                                                Total STRK purchased with EKUBO
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chakra-accordion__item css-17mg6aq">
                        <button
                            type="button"
                            id="accordion-button-:rc:"
                            aria-expanded="false"
                            aria-controls="accordion-panel-:rc:"
                            className="chakra-accordion__button css-1fyfidi"
                            data-index="2"
                        >
                            Team
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon chakra-accordion__icon css-186l2rg"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className="chakra-collapse"
                            style={{
                                overflow: "hidden",
                                display: "none",
                                opacity: 0,
                                height: 0,
                            }}
                        >
                            <div
                                role="region"
                                id="accordion-panel-:rc:"
                                aria-labelledby="accordion-button-:rc:"
                                className="chakra-accordion__panel css-mxa4qn"
                            >
                                <p className="chakra-text css-1dn3sp">
                                    <span className="chakra-text css-zfx5r2">33.3%</span> of the
                                    total supply will be kept by Ekubo, Inc., the corporation that
                                    developed the first version of Ekubo Protocol.
                                </p>
                                <p className="chakra-text css-qjgj1z">
                                    There is no vesting schedule for these tokens. These tokens
                                    act as an incentive to continue the development of Ekubo
                                    Protocol and related tooling. We plan to sell tokens only when
                                    necessary in order to fund operations.
                                </p>
                                <p className="chakra-text css-qjgj1z">
                                    You can at any time inspect the balance of tokens in our
                                    company wallet. The tokens that are not apportioned to be sold
                                    are delegated in order to vote in proposals.
                                </p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="chakra-link chakra-button css-1txorch"
                                    href="https://voyager.online/contract/0x07be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    View company wallet
                                    <svg
                                        viewBox="0 0 24 24"
                                        focusable="false"
                                        className="chakra-icon css-1q2a7ix"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14L21 3"></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="chakra-accordion__item css-17mg6aq">
                        <button
                            type="button"
                            id="accordion-button-:re:"
                            aria-expanded="false"
                            aria-controls="accordion-panel-:re:"
                            className="chakra-accordion__button css-1fyfidi"
                            data-index="3"
                        >
                            Decentralization
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon chakra-accordion__icon css-186l2rg"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className="chakra-collapse"
                            style={{
                                overflow: "hidden",
                                display: "none",
                                opacity: 0,
                                height: 0,
                            }}
                        >
                            <div
                                role="region"
                                id="accordion-panel-:re:"
                                aria-labelledby="accordion-button-:re:"
                                className="chakra-accordion__panel css-mxa4qn"
                            >
                                <p className="chakra-text css-1dn3sp">
                                    Protocol ownership has been transferred to the
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x053499f7aa2706395060fe72d00388803fb2dcc111429891ad7b2d9dcea29acd"
                                    >
                                        Governor
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-sv5w6l"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <path d="M15 3h6v6"></path>
                                                <path d="M10 14L21 3"></path>
                                            </g>
                                        </svg>
                                    </a>{" "}
                                    contract. In order to vote on a proposal, users must first
                                    stake their EKUBO tokens in the
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x02a3ed03046e1042e193651e3da6d3c973e3d45c624442be936a374380a78bb5"
                                    >
                                        Staker
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-sv5w6l"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <path d="M15 3h6v6"></path>
                                                <path d="M10 14L21 3"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    .
                                </p>
                                <p className="chakra-text css-qjgj1z">
                                    The quorum for passing a proposal has been initialized at
                                    <span className="chakra-text css-zfx5r2">50%</span> of the
                                    total supply. The quorum is greater than the amount allocated
                                    to the team, thus broader participation in Ekubo Protocol
                                    governance is required to make updates to the protocol.
                                </p>
                                <p className="chakra-text css-qjgj1z">
                                    You can use our <a href="/governance">governance page</a> to
                                    delegate the voting rights of your EKUBO tokens as well as
                                    vote on proposals.
                                </p>
                                <p className="chakra-text css-qjgj1z">
                                    The source code for the core contracts of Ekubo Protocol will
                                    be made available with the next proposal to update the
                                    contracts, estimated in Q3 2024.
                                </p>
                                <div className="css-vvzsgp">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link chakra-button css-1h7sffj"
                                        href="https://github.com/EkuboProtocol/governance"
                                    >
                                        Source code
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-1q2a7ix"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <path d="M15 3h6v6"></path>
                                                <path d="M10 14L21 3"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link chakra-button css-1h7sffj"
                                        href="https://voyager.online/contract/0x02a3ed03046e1042e193651e3da6d3c973e3d45c624442be936a374380a78bb5"
                                    >
                                        Staker
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-1q2a7ix"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <path d="M15 3h6v6"></path>
                                                <path d="M10 14L21 3"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link chakra-button css-1h7sffj"
                                        href="https://voyager.online/contract/0x053499f7aa2706395060fe72d00388803fb2dcc111429891ad7b2d9dcea29acd"
                                    >
                                        Governor
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-1q2a7ix"
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <path d="M15 3h6v6"></path>
                                                <path d="M10 14L21 3"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a className="chakra-button css-s373cw" href="/governance">
                                        Proposals
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-1q2a7ix"
                                        >
                                            <g fill="currentColor">
                                                <path d="M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"></path>
                                                <path d="M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link chakra-button css-1t1b4jo"
                                        aria-label="Join Discord"
                                        href="https://discord.ekubo.org"
                                    >
                                        <svg
                                            viewBox="0 -28.5 256 256"
                                            focusable="false"
                                            className="chakra-icon css-onkibi"
                                            aria-hidden="true"
                                        >
                                            <g>
                                                <path
                                                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                        </svg>
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chakra-link chakra-button css-17g0q9k"
                                        aria-label="Follow on X"
                                        href="https://x.com/EkuboProtocol"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            focusable="false"
                                            className="chakra-icon css-onkibi"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chakra-accordion__item css-17mg6aq">
                        <button
                            type="button"
                            id="accordion-button-:rg:"
                            aria-expanded="false"
                            aria-controls="accordion-panel-:rg:"
                            className="chakra-accordion__button css-1fyfidi"
                            data-index="4"
                        >
                            Disclaimer
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon chakra-accordion__icon css-186l2rg"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className="chakra-collapse"
                            style={{
                                overflow: "hidden",
                                display: "none",
                                opacity: 0,
                                height: 0,
                            }}
                        >
                            <div
                                role="region"
                                id="accordion-panel-:rg:"
                                aria-labelledby="accordion-button-:rg:"
                                className="chakra-accordion__panel css-mxa4qn"
                            >
                                <p className="chakra-text css-1dn3sp">
                                    The EKUBO token serves only to decentralize the ownership role
                                    of the on-chain instance of the core Ekubo Protocol. Ekubo,
                                    Inc., is not in any way obligated to provide any service,
                                    maintenance, or development for Ekubo Protocol and related
                                    tools or services.
                                    <br />
                                    The governance infrastructure is a security feature: it
                                    protects users of the core contracts from malicious upgrades
                                    by requiring a decentralized and interested majority of
                                    stakeholders to come to consensus on the validity of the
                                    changes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ekubo;
