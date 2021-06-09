import React, {useState} from 'react';
import style from './style.module.scss';

const Custom = () => {
    const [MainColor, setMainColor] = useState('#fffff')
    const [text, SetText] = useState(null);
    const [textColor, setTextColor] = useState('white');
    return (
        <div className={style.Parent}>
            <div className={style.Children}>
                <div className={style.Svg}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"

                        width="100px" height="100px" viewBox="0 0 1178.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path fill={MainColor} d="M4515 12793 c-47 -12 -148 -60 -283 -136 -439 -244 -1289 -550 -1948 -702 -489 -112 -659 -208 -857 -484 -184 -254 -306 -573 -397 -1032 -8 -42
                            -29 -84 -85 -169 -90 -137 -121 -220 -139 -368 -13 -103 -17 -115 -47 -149
                            -76 -87 -108 -208 -129 -483 -16 -215 -33 -288 -160 -690 -200 -632 -347
                            -1211 -380 -1495 -13 -114 -40 -538 -40 -628 0 -40 -10 -109 -25 -169 -14 -55
                            -25 -101 -23 -102 2 -1 109 -50 238 -108 l235 -105 270 -41 c304 -46 410 -57
                            675 -72 362 -20 495 -30 532 -40 20 -6 57 -27 82 -48 24 -20 66 -48 93 -62 53
                            -27 133 -97 133 -116 0 -7 -26 -102 -59 -211 -81 -272 -101 -371 -112 -558 -5
                            -88 -15 -207 -22 -265 l-14 -105 39 -154 39 -155 -27 -81 c-14 -44 -36 -116
                            -48 -160 -15 -55 -33 -95 -55 -123 l-34 -41 26 -93 c14 -51 28 -117 32 -146 3
                            -29 21 -106 40 -170 18 -64 52 -208 75 -320 l42 -203 -36 -127 c-19 -70 -48
                            -175 -64 -235 l-29 -107 64 -233 64 -232 -21 -295 -21 -295 35 -140 c19 -77
                            42 -192 50 -256 18 -132 67 -340 97 -415 24 -60 49 -87 104 -110 36 -15 75
                            -16 375 -9 532 11 701 -11 1230 -155 366 -99 545 -137 785 -165 77 -8 170 -21
                            206 -27 83 -14 1049 -5 1224 12 505 46 836 136 1516 408 742 298 889 341 1369
                            407 155 22 199 34 215 59 7 11 21 57 32 101 16 69 18 125 18 420 0 444 -27
                            698 -97 898 -21 62 -29 100 -25 125 2 21 39 126 81 234 120 310 150 475 135
                            744 -6 110 -13 137 -75 284 -24 59 -26 72 -21 155 3 49 17 149 31 220 60 318
                            75 542 76 1171 l0 331 158 6 c220 7 305 38 449 164 82 71 142 94 398 148 709
                            150 1238 350 1271 481 8 30 -36 259 -87 454 -93 356 -379 1291 -533 1739 -92
                            267 -90 260 -91 491 -1 235 -12 283 -85 400 -86 138 -98 173 -125 364 -38 271
                            -113 616 -200 915 -109 374 -182 520 -345 681 -210 210 -491 346 -1315 637
                            -833 294 -1019 371 -1233 510 -48 31 -121 76 -162 101 -70 42 -78 44 -130 39
                            -30 -3 -104 -24 -165 -47 -348 -131 -884 -201 -1415 -186 -469 13 -723 72
                            -1186 277 -105 46 -140 54 -189 42z m4754 -9298 c0 -5 -6 1 -14 15 -8 14 -14
                            30 -14 35 0 6 6 -1 14 -15 8 -14 14 -29 14 -35z m-156 -1327 c4 -18 9 -44 12
                            -58 5 -20 2 -18 -14 10 -21 36 -28 80 -12 80 4 0 11 -15 14 -32z"/>
                        </g>
                    </svg>
                </div>
                <div className={style.text2}>
                    <div><p style={{color: textColor}}>{text}</p></div>
                </div>
                <div className={style.right}>
                    <div className={style.Info}>
                        <h1>
                            Custom Product
                        </h1>
                        <p>
                            This product is fully customized for you!
                        </p>
                    </div>
                    <div className={style.ControlPanel}>
                        <div className={style.size}>
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                        <div className={style.colors}>
                            <p>Choose color:</p>
                            <input type='color' onChange={(e) => setMainColor(e.target.value)}/>
                        </div>
                        <div className={style.text}>
                            <p>Write text:</p>
                            <input type='text' maxLength='15' onChange={(e) => SetText(e.target.value)}/>
                        </div>
                        <div className={style.colorText}>
                            <p>Choose text color:</p>
                            <input type='color' onChange={(e) => setTextColor(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Custom;