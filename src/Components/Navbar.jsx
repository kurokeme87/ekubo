import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <div className="css-0">
        <div className="css-9v7z66">
          <div className="css-1i20ytx">
            <button
              type="button"
              className="chakra-button css-1tr9juw"
              aria-label="Toggle Navigation Menu"
            >
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-n4g5d6"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="css-9acq83">
            <div className="chakra-linkbox  css-ykxh3e">
              <Link
                to="https://app.ekubo.org"
                className="chakra-linkbox__overlay css-1hnz6hu"
              >
                <img
                  src="https://framerusercontent.com/images/FuYhbqlFZZoZXR5otCduxny1Hb4.png"
                  className="chakra-image css-v67zxb"
                />
              </Link>
            </div>
            <div className="css-czg0pa">
              <Link className="active" to="/">
                <button type="button" className="chakra-button css-wwxj02">
                  Swap
                </button>
              </Link>
              <Link to="/positions">
                <button type="button" className="chakra-button css-ev1yhc">
                  Pool
                </button>
              </Link>
              <Link to="/charts">
                <button type="button" className="chakra-button css-ev1yhc">
                  Charts
                </button>
              </Link>
              <Link to="/$EKUBO">
                <button type="button" className="chakra-button css-ev1yhc">
                  $EKUBO
                </button>
              </Link>
              <Link to="/governance">
                <button type="button" className="chakra-button css-ev1yhc">
                  Governance
                </button>
              </Link>
              <Link to="/defi-spring">
                <button type="button" className="chakra-button css-ev1yhc">
                  <div className="css-70qvj9">
                    <svg
                      viewBox="0 0 111 110"
                      focusable="false"
                      className="chakra-icon css-1h7d1je"
                    >
                      <path
                        d="M2.11688 54.999C2.11688 84.4816 26.0167 108.382 55.4992 108.382C84.9818 108.382 108.884 84.4815 108.884 54.999C108.884 25.5166 84.9818 1.6167 55.4992 1.6167C26.0167 1.6167 2.11688 25.5165 2.11688 54.999Z"
                        fill="#0C0C4F"
                        stroke="#EC796B"
                        strokeWidth="3.23374"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.2402 42.042L32.5979 37.8475C32.8738 36.9944 33.5471 36.3305 34.4035 36.0688L38.6184 34.7726C39.2019 34.5944 39.2066 33.7713 38.6279 33.5836L34.4318 32.2259C33.5803 31.9499 32.9164 31.2766 32.6531 30.4204L31.3584 26.2054C31.1803 25.6235 30.3571 25.6172 30.1695 26.1975L28.8118 30.392C28.5359 31.2435 27.8626 31.9073 27.0062 32.1707L22.7913 33.4653C22.2078 33.6452 22.2015 34.4667 22.7818 34.6544L26.9779 36.012C27.8294 36.2879 28.4933 36.9629 28.7566 37.8191L30.0512 42.0326C30.2294 42.616 31.0526 42.6223 31.2402 42.042Z"
                        fill="#FAFAFA"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M97.8629 39.6004C96.1253 37.6573 93.4129 36.5633 90.7764 36.1146C88.1187 35.6837 85.3324 35.7237 82.7086 36.1897C77.4002 37.0877 72.5776 39.2858 68.3713 41.9975C66.187 43.3283 64.3243 44.8681 62.3944 46.4363C61.4645 47.2294 60.6168 48.0741 59.7339 48.9066L57.3213 51.307C54.7 54.047 52.1162 56.5428 49.6163 58.6114C47.1062 60.6705 44.7596 62.2344 42.4469 63.3265C40.1357 64.4242 37.6627 65.0699 34.4395 65.1732C31.2444 65.2858 27.4643 64.7093 23.4209 63.7574C19.3558 62.8098 15.0869 61.4592 10.3167 60.2969C11.9811 64.9146 14.4876 68.9952 17.7057 72.7254C20.9614 76.3908 25.0269 79.7317 30.2496 81.9289C35.3968 84.1747 41.8652 84.9808 47.9134 83.7645C53.9776 82.5973 59.2993 79.7912 63.6008 76.5459C67.9134 73.2673 71.4024 69.5328 74.3439 65.6502C75.156 64.5775 75.5854 63.9771 76.173 63.1386L77.7969 60.733C78.9258 59.2449 79.9531 57.5506 81.0703 56.0762C83.2605 52.9884 85.4198 49.9042 87.9292 47.0627C89.1921 45.6215 90.5234 44.2429 92.0958 42.9182C92.8799 42.2715 93.7268 41.6386 94.6655 41.0686C95.6182 40.4537 96.624 39.9724 97.8629 39.6004Z"
                        fill="url(#paint0_linear_4664_62620)"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M97.8629 39.6004C95.9957 34.89 92.5253 30.9248 87.8673 27.9989C83.2375 25.105 76.807 23.6282 70.4351 24.8871C67.2871 25.4959 64.2373 26.6681 61.561 28.2289C58.8967 29.7837 56.5093 31.6552 54.4425 33.6629C53.4107 34.6703 52.4741 35.721 51.5437 36.7776L49.1323 39.8521L45.4077 44.8014C40.6594 51.1691 35.5461 58.6317 27.1549 60.8429C18.9172 63.0137 15.3444 61.0912 10.3167 60.2969C11.2359 62.6704 12.3747 64.9754 13.9185 67.003C15.4334 69.0718 17.2229 71.0149 19.4478 72.6805C20.572 73.4804 21.7591 74.2699 23.0774 74.9395C24.3898 75.5864 25.805 76.1558 27.3157 76.5846C30.3204 77.4081 33.7034 77.6966 36.9788 77.2536C40.2558 76.8164 43.388 75.7778 46.1258 74.3986C48.884 73.0324 51.2865 71.3685 53.4319 69.6125C57.6964 66.071 61.0136 62.1579 63.8156 58.2024C65.225 56.2248 66.5043 54.2098 67.6875 52.1943L69.0801 49.7948C69.5059 49.0934 69.9365 48.3877 70.3739 47.7304C72.1383 45.0897 73.8642 42.9724 75.9605 41.3831C78.0279 39.7527 80.9062 38.5482 84.7529 38.2683C88.5836 37.9851 93.0058 38.5083 97.8629 39.6004Z"
                        fill="#FAFAFA"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M77.1387 78.7385C77.1387 82.1982 79.9448 85.0043 83.4046 85.0043C86.8643 85.0043 89.667 82.1982 89.667 78.7385C89.667 75.2788 86.8643 72.4727 83.4046 72.4727C79.9448 72.4727 77.1387 75.2788 77.1387 78.7385Z"
                        fill="url(#paint1_linear_4664_62620)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_4664_62620"
                          x1="97.394"
                          y1="37.9475"
                          x2="-45.6771"
                          y2="112.385"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC796B"></stop>
                          <stop offset="1" stopColor="#D672EF"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4664_62620"
                          x1="89.6626"
                          y1="74.3429"
                          x2="66.8299"
                          y2="76.4834"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC796B"></stop>
                          <stop offset="1" stopColor="#D672EF"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    Rewards
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="chakra-stack  css-xnkdtk">
            <span
              className="chakra-badge css-628nms"
              id="popover-trigger-:rg:"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="popover-content-:rg:"
            >
              $0.0574
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-1uko6dt"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"></path>
                </svg>
              </svg>
            </span>
            <button type="button" className="chakra-button css-3aup2f">
              <div className="css-1lads1q">Connect wallet</div>
            </button>
            <button
              type="button"
              className="chakra-button css-1e0q8rs"
              aria-label="Settings"
            >
              <svg
                viewBox="0 0 14 14"
                focusable="false"
                className="chakra-icon css-onkibi"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M14,7.77 L14,6.17 L12.06,5.53 L11.61,4.44 L12.49,2.6 L11.36,1.47 L9.55,2.38 L8.46,1.93 L7.77,0.01 L6.17,0.01 L5.54,1.95 L4.43,2.4 L2.59,1.52 L1.46,2.65 L2.37,4.46 L1.92,5.55 L0,6.23 L0,7.82 L1.94,8.46 L2.39,9.55 L1.51,11.39 L2.64,12.52 L4.45,11.61 L5.54,12.06 L6.23,13.98 L7.82,13.98 L8.45,12.04 L9.56,11.59 L11.4,12.47 L12.53,11.34 L11.61,9.53 L12.08,8.44 L14,7.75 L14,7.77 Z M7,10 C5.34,10 4,8.66 4,7 C4,5.34 5.34,4 7,4 C8.66,4 10,5.34 10,7 C10,8.66 8.66,10 7,10 Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className="chakra-collapse"
          style={{ overflow: "hidden", display: "none", opacity: 0, height: 0 }}
        >
          <div className="chakra-stack b b css-10gynj">
            <a aria-current="page" className="css-k5e3w4 active" to="/">
              <span className="chakra-text css-1h2swkf">Swap</span>
            </a>
            <hr
              aria-orientation="horizontal"
              className="chakra-divider css-svjswr"
            />
            <a className="css-k5e3w4" href="/dca">
              <span className="chakra-text css-1h2swkf">DCA</span>
            </a>
            <hr
              aria-orientation="horizontal"
              className="chakra-divider css-svjswr"
            />
            <a className="css-k5e3w4" href="/positions">
              <span className="chakra-text css-1h2swkf">Pool</span>
            </a>
            <hr
              aria-orientation="horizontal"
              className="chakra-divider css-svjswr"
            />
            <a className="css-k5e3w4" href="/charts">
              <span className="chakra-text css-1h2swkf">Charts</span>
            </a>
            <hr
              aria-orientation="horizontal"
              className="chakra-divider css-svjswr"
            />
            <a className="css-k5e3w4" href="/$EKUBO">
              <span className="chakra-text css-1h2swkf">$EKUBO</span>
            </a>
            <hr
              aria-orientation="horizontal"
              className="chakra-divider css-svjswr"
            />
            <a className="css-k5e3w4" href="/governance">
              <span className="chakra-text css-1h2swkf">Governance</span>
            </a>
            <hr
              aria-orientation="horizontal"
              className="chakra-divider css-svjswr"
            />
            <a className="css-k5e3w4" href="/defi-spring">
              <span className="chakra-text css-1h2swkf">
                <div className="css-70qvj9">
                  <svg
                    viewBox="0 0 111 110"
                    focusable="false"
                    className="chakra-icon css-1h7d1je"
                  >
                    <path
                      d="M2.11688 54.999C2.11688 84.4816 26.0167 108.382 55.4992 108.382C84.9818 108.382 108.884 84.4815 108.884 54.999C108.884 25.5166 84.9818 1.6167 55.4992 1.6167C26.0167 1.6167 2.11688 25.5165 2.11688 54.999Z"
                      fill="#0C0C4F"
                      stroke="#EC796B"
                      strokeWidth="3.23374"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.2402 42.042L32.5979 37.8475C32.8738 36.9944 33.5471 36.3305 34.4035 36.0688L38.6184 34.7726C39.2019 34.5944 39.2066 33.7713 38.6279 33.5836L34.4318 32.2259C33.5803 31.9499 32.9164 31.2766 32.6531 30.4204L31.3584 26.2054C31.1803 25.6235 30.3571 25.6172 30.1695 26.1975L28.8118 30.392C28.5359 31.2435 27.8626 31.9073 27.0062 32.1707L22.7913 33.4653C22.2078 33.6452 22.2015 34.4667 22.7818 34.6544L26.9779 36.012C27.8294 36.2879 28.4933 36.9629 28.7566 37.8191L30.0512 42.0326C30.2294 42.616 31.0526 42.6223 31.2402 42.042Z"
                      fill="#FAFAFA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M97.8629 39.6004C96.1253 37.6573 93.4129 36.5633 90.7764 36.1146C88.1187 35.6837 85.3324 35.7237 82.7086 36.1897C77.4002 37.0877 72.5776 39.2858 68.3713 41.9975C66.187 43.3283 64.3243 44.8681 62.3944 46.4363C61.4645 47.2294 60.6168 48.0741 59.7339 48.9066L57.3213 51.307C54.7 54.047 52.1162 56.5428 49.6163 58.6114C47.1062 60.6705 44.7596 62.2344 42.4469 63.3265C40.1357 64.4242 37.6627 65.0699 34.4395 65.1732C31.2444 65.2858 27.4643 64.7093 23.4209 63.7574C19.3558 62.8098 15.0869 61.4592 10.3167 60.2969C11.9811 64.9146 14.4876 68.9952 17.7057 72.7254C20.9614 76.3908 25.0269 79.7317 30.2496 81.9289C35.3968 84.1747 41.8652 84.9808 47.9134 83.7645C53.9776 82.5973 59.2993 79.7912 63.6008 76.5459C67.9134 73.2673 71.4024 69.5328 74.3439 65.6502C75.156 64.5775 75.5854 63.9771 76.173 63.1386L77.7969 60.733C78.9258 59.2449 79.9531 57.5506 81.0703 56.0762C83.2605 52.9884 85.4198 49.9042 87.9292 47.0627C89.1921 45.6215 90.5234 44.2429 92.0958 42.9182C92.8799 42.2715 93.7268 41.6386 94.6655 41.0686C95.6182 40.4537 96.624 39.9724 97.8629 39.6004Z"
                      fill="url(#paint0_linear_4664_62620)"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M97.8629 39.6004C95.9957 34.89 92.5253 30.9248 87.8673 27.9989C83.2375 25.105 76.807 23.6282 70.4351 24.8871C67.2871 25.4959 64.2373 26.6681 61.561 28.2289C58.8967 29.7837 56.5093 31.6552 54.4425 33.6629C53.4107 34.6703 52.4741 35.721 51.5437 36.7776L49.1323 39.8521L45.4077 44.8014C40.6594 51.1691 35.5461 58.6317 27.1549 60.8429C18.9172 63.0137 15.3444 61.0912 10.3167 60.2969C11.2359 62.6704 12.3747 64.9754 13.9185 67.003C15.4334 69.0718 17.2229 71.0149 19.4478 72.6805C20.572 73.4804 21.7591 74.2699 23.0774 74.9395C24.3898 75.5864 25.805 76.1558 27.3157 76.5846C30.3204 77.4081 33.7034 77.6966 36.9788 77.2536C40.2558 76.8164 43.388 75.7778 46.1258 74.3986C48.884 73.0324 51.2865 71.3685 53.4319 69.6125C57.6964 66.071 61.0136 62.1579 63.8156 58.2024C65.225 56.2248 66.5043 54.2098 67.6875 52.1943L69.0801 49.7948C69.5059 49.0934 69.9365 48.3877 70.3739 47.7304C72.1383 45.0897 73.8642 42.9724 75.9605 41.3831C78.0279 39.7527 80.9062 38.5482 84.7529 38.2683C88.5836 37.9851 93.0058 38.5083 97.8629 39.6004Z"
                      fill="#FAFAFA"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M77.1387 78.7385C77.1387 82.1982 79.9448 85.0043 83.4046 85.0043C86.8643 85.0043 89.667 82.1982 89.667 78.7385C89.667 75.2788 86.8643 72.4727 83.4046 72.4727C79.9448 72.4727 77.1387 75.2788 77.1387 78.7385Z"
                      fill="url(#paint1_linear_4664_62620)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4664_62620"
                        x1="97.394"
                        y1="37.9475"
                        x2="-45.6771"
                        y2="112.385"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EC796B"></stop>
                        <stop offset="1" stopColor="#D672EF"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_4664_62620"
                        x1="89.6626"
                        y1="74.3429"
                        x2="66.8299"
                        y2="76.4834"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#EC796B"></stop>
                        <stop offset="1" stopColor="#D672EF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  Rewards
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Navbar
