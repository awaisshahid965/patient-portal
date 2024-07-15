import React, { FC } from 'react'
import { IconProps } from './icon.types'

const MedflowLogo: FC<IconProps> = ({ width = 211, height = 48 }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 220 56" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter
                    x="-3.3%"
                    y="-10.4%"
                    width="106.6%"
                    height="129.2%"
                    filterUnits="objectBoundingBox"
                    id="filter-1"
                >
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                        result="shadowMatrixOuter1"
                    ></feColorMatrix>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <polygon
                    id="path-2"
                    points="-1.23332595e-15 0 43.3357855 0 43.3357855 34.1117039 -1.23332595e-15 34.1117039"
                ></polygon>
            </defs>
            <g id="Provider-Portal-screens" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="1-Log-In-Screen-" transform="translate(-50, -25)">
                    <g id="Group-26" filter="url(#filter-1)" transform="translate(54, 27)">
                        <g id="MedFlow" transform="translate(57.9022, 9.6067)" fillRule="nonzero">
                            <polygon
                                id="Path"
                                fill="#5890FF"
                                points="0 27.3163548 3.86177157 27.3163548 3.86177157 7.15563557 3.99428334 7.15563557 12.2289433 27.3163548 15.3713653 27.3163548 23.6060253 7.15563557 23.738537 7.15563557 23.738537 27.3163548 27.6003086 27.3163548 27.6003086 0 22.7163034 0 13.8569451 21.8076512 13.7433635 21.8076512 4.90293548 0 0 0"
                            ></polygon>
                            <path
                                d="M41.1107633,27.7138901 C45.9379778,27.7138901 49.0046787,24.8364917 49.6483073,21.6751395 L49.6861678,21.4669067 L45.805466,21.4669067 L45.7486752,21.6183487 C45.2375584,23.1138387 43.6284869,24.3632354 41.2054146,24.3632354 C37.9494111,24.3632354 35.8860135,22.1673261 35.8102925,18.4002057 L49.9133309,18.4002057 L49.9133309,17.0182973 C49.9133309,11.0363374 46.4869551,7.0231238 40.9025305,7.0231238 C35.3181059,7.0231238 31.7213579,11.1877794 31.7213579,17.4158326 L31.7213579,17.4347628 C31.7213579,23.7196068 35.2613152,27.7138901 41.1107633,27.7138901 Z M40.9214608,10.3737785 C43.5906264,10.3737785 45.5215122,12.058571 45.8622567,15.5038771 L35.8670833,15.5038771 C36.2267581,12.1721526 38.2712254,10.3737785 40.9214608,10.3737785 Z"
                                id="Shape"
                                fill="#5890FF"
                            ></path>
                            <path
                                d="M60.9817829,27.7138901 C63.8402511,27.7138901 66.0361604,26.2751909 67.2287663,23.9467698 L67.3044874,23.9467698 L67.3044874,27.3163548 L71.4123522,27.3163548 L71.4123522,0 L67.3044874,0 L67.3044874,10.7902441 L67.2287663,10.7902441 C66.0361604,8.44289276 63.7645301,7.0231238 60.9439224,7.0231238 C55.9463357,7.0231238 52.6524717,10.9984769 52.6524717,17.3401116 L52.6524717,17.3590418 C52.6524717,23.7006765 55.9084752,27.7138901 60.9817829,27.7138901 Z M62.0608073,24.1928631 C58.8237341,24.1928631 56.8360576,21.5994185 56.8360576,17.3590418 L56.8360576,17.3401116 C56.8360576,13.1375955 58.8426643,10.5252206 62.0608073,10.5252206 C65.1275083,10.5252206 67.3234176,13.2133165 67.3234176,17.3401116 L67.3234176,17.3590418 C67.3234176,21.5047672 65.1464385,24.1928631 62.0608073,24.1928631 Z"
                                id="Shape"
                                fill="#5890FF"
                            ></path>
                            <polygon
                                id="Path"
                                fill="#FFFFFF"
                                points="76.5556352 27.3163548 80.7960118 27.3163548 80.7960118 15.8824821 92.5327685 15.8824821 92.5327685 12.3046643 80.7960118 12.3046643 80.7960118 3.65353879 93.6117929 3.65353879 93.6117929 0 76.5556352 0"
                            ></polygon>
                            <polygon
                                id="Path"
                                fill="#FFFFFF"
                                points="97.4299582 27.3163548 101.518893 27.3163548 101.518893 0 97.4299582 0"
                            ></polygon>
                            <path
                                d="M114.745394,27.7138901 C120.4434,27.7138901 124.19159,23.7763975 124.19159,17.3590418 L124.19159,17.3211813 C124.19159,10.9416861 120.405539,7.0231238 114.726463,7.0231238 C109.066318,7.0231238 105.299198,10.9606164 105.299198,17.3211813 L105.299198,17.3590418 C105.299198,23.7574673 109.028457,27.7138901 114.745394,27.7138901 Z M114.764324,24.2875144 C111.565111,24.2875144 109.482783,21.7697907 109.482783,17.3590418 L109.482783,17.3211813 C109.482783,12.9672232 111.584041,10.4494996 114.726463,10.4494996 C117.925676,10.4494996 120.008004,12.9672232 120.008004,17.3211813 L120.008004,17.3590418 C120.008004,21.7508605 117.963537,24.2875144 114.764324,24.2875144 Z"
                                id="Shape"
                                fill="#FFFFFF"
                            ></path>
                            <polygon
                                id="Path"
                                fill="#FFFFFF"
                                points="131.663294 27.3163548 135.88474 27.3163548 140.030466 12.3993156 140.125117 12.3993156 144.308703 27.3163548 148.56801 27.3163548 154.019922 7.40172885 149.968848 7.40172885 146.33424 23.0759782 146.239589 23.0759782 142.074933 7.40172885 138.13744 7.40172885 133.991715 23.0759782 133.915994 23.0759782 130.281385 7.40172885 126.192451 7.40172885"
                            ></polygon>
                        </g>
                        <g id="Group-11">
                            <g id="Group-3" transform="translate(0, 13.2849)" fill="#FFFFFF">
                                <path
                                    d="M5.71310362,28.8492689 C4.44225546,28.8492689 3.41199244,27.8190059 3.41199244,26.5481577 C3.41199244,25.2773096 4.44225546,24.2470465 5.71310362,24.2470465 C6.98395178,24.2470465 8.0142148,25.2773096 8.0142148,26.5481577 C8.0142148,27.8190059 6.98395178,28.8492689 5.71310362,28.8492689 M43.3061189,4.03234027 C43.3051667,2.59485992 42.9041386,1.25101099 42.2376098,0 C41.5875856,0.586545305 40.8255211,1.05121107 39.9869644,1.3574969 C40.0052146,1.40161475 40.0217191,1.44970004 40.0358432,1.50476801 C40.2673826,2.41711892 40.6385756,3.33502424 40.6519062,4.25483392 C40.7169721,8.80198831 40.6995154,13.3507297 40.6798369,17.8986775 C40.6679346,20.6873069 39.420415,22.8686016 37.0655054,24.2846578 C33.196306,26.6110019 29.2728321,28.8505385 25.331108,31.0527812 C22.8362273,32.4466198 20.2689808,32.3664777 17.7742588,30.9840653 C15.8805237,29.9347586 14.0274151,28.8121337 12.1379647,27.7545748 C11.68536,27.5011351 11.4952406,27.2153213 11.5284083,26.6917788 C11.5355497,26.5767232 11.5404693,26.4610329 11.544278,26.3453425 L11.4244616,26.4819809 C11.3890721,23.3573894 8.84610616,20.8350541 5.71310362,20.8350541 C2.55772475,20.8350541 0,23.3927789 0,26.5481577 C0,29.7035366 2.55772475,32.2612613 5.71310362,32.2612613 C7.51923785,32.2612613 9.12827,31.4223873 10.1751962,30.1140866 L10.2166162,30.2796079 C10.3272283,30.1567761 10.4367294,30.0309292 10.543374,29.8985756 C10.8723536,30.0799666 11.1488043,30.2273965 11.4204941,30.3832372 C13.1839388,31.3946153 14.9172309,32.463283 16.7157477,33.4083256 C19.897629,35.0802019 23.1961529,35.1919248 26.3558166,33.4878329 C30.4909927,31.2576595 34.5650704,28.9040195 38.5742408,26.4543676 C41.5302959,24.6482334 43.2082027,21.8842021 43.282473,18.3863544 C43.3845154,13.6036932 43.3092929,8.81706455 43.3061189,4.03234027"
                                    id="Fill-1"
                                ></path>
                            </g>
                            <g id="Group-6">
                                <mask id="mask-3" fill="white">
                                    <use href="#path-2"></use>
                                </mask>
                                <g id="Clip-5"></g>
                                <path
                                    d="M37.6227454,10.4680245 C36.3517385,10.4680245 35.3216342,9.43776152 35.3216342,8.16691336 C35.3216342,6.8959065 36.3517385,5.86580218 37.6227454,5.86580218 C38.8935935,5.86580218 39.9238566,6.8959065 39.9238566,8.16691336 C39.9238566,9.43776152 38.8935935,10.4680245 37.6227454,10.4680245 M37.6227454,2.45380974 C35.8166112,2.45380974 34.2074203,3.29268379 33.1606528,4.60098452 L33.1190741,4.43546321 C33.008462,4.55829494 32.8989609,4.68414192 32.792475,4.81649548 C32.4634954,4.63510444 32.1870447,4.48751593 31.9151962,4.33183386 C30.1519102,3.32045582 28.4184594,2.25178805 26.6199426,1.30674549 C23.4380613,-0.3651308 20.1396961,-0.476853715 16.9800324,1.22723814 C12.8448563,3.45725291 8.77061993,5.81089291 4.76144947,8.26070348 C1.80539444,10.0668377 0.127646345,12.8307103 0.053375998,16.3287167 C-0.0486663805,21.1112192 0.0263974531,25.8978478 0.0295713995,30.6827308 C0.0303648862,31.8918457 0.314750488,33.0346251 0.801475177,34.1117039 C1.49291941,33.5246825 2.2997366,33.0698559 3.18383939,32.7865812 C2.96166313,32.0140427 2.69505163,31.237854 2.68394282,30.4602372 C2.61887692,25.9129241 2.63617493,21.3643414 2.65585339,16.8163935 C2.66775569,14.0277642 3.91543404,11.8463108 6.27034362,10.4304133 C10.139543,8.10406922 14.0628583,5.8645326 18.0047411,3.66228986 C20.4996217,2.26845127 23.0667096,2.34859342 25.5614315,3.7308471 C27.4553253,4.7801538 29.3082753,5.90277866 31.1977256,6.96033762 C31.650489,7.21393594 31.8404497,7.49959112 31.807282,8.02313359 C31.8002993,8.13818915 31.795221,8.25387949 31.791571,8.36972854 L31.9112287,8.23293145 C31.9467769,11.357523 34.4895841,13.880017 37.6227454,13.880017 C40.7779656,13.880017 43.335849,11.3221335 43.335849,8.16691336 C43.335849,5.01153449 40.7779656,2.45380974 37.6227454,2.45380974"
                                    id="Fill-4"
                                    fill="#5890FF"
                                    mask="url(#mask-3)"
                                ></path>
                            </g>
                            <path
                                d="M20.9152023,36.5797805 L21.218949,36.5797805 C23.5357712,36.5797805 25.4312521,34.6842997 25.4312521,32.3674775 L25.4312521,30.2787033 C25.4312521,29.3544501 26.1804621,28.60524 27.1047153,28.60524 L29.5108841,28.60524 C31.8277063,28.60524 33.7231872,26.7097592 33.7231872,24.392937 L33.7231872,24.0891903 C33.7231872,21.7723681 31.8277063,19.8768873 29.5108841,19.8768873 L23.9125187,19.8768873 C23.7879413,19.8510196 23.6589204,19.8372129 23.5268842,19.8372129 L22.1154302,19.8372129 C19.1385858,19.8372129 16.7028993,22.2728995 16.7028993,25.2497438 L16.7028993,32.3674775 C16.7028993,34.6842997 18.5983801,36.5797805 20.9152023,36.5797805"
                                id="Fill-7"
                                fill="#FFFFFF"
                            ></path>
                            <path
                                d="M21.3379879,11.8229982 L21.0342412,11.8229982 C18.717419,11.8229982 16.8219382,13.718479 16.8219382,16.0353012 L16.8219382,18.1240753 C16.8219382,19.0483286 16.0727281,19.7975386 15.1484749,19.7975386 L12.7423061,19.7975386 C10.4254839,19.7975386 8.53000305,21.6930194 8.53000305,24.0098417 L8.53000305,24.3135883 C8.53000305,26.6304105 10.4254839,28.5258914 12.7423061,28.5258914 L18.3406715,28.5258914 C18.4652489,28.551759 18.5942699,28.5655657 18.726306,28.5655657 L20.13776,28.5655657 C23.1146044,28.5655657 25.5502909,26.1298792 25.5502909,23.1530348 L25.5502909,16.0353012 C25.5502909,13.718479 23.6548101,11.8229982 21.3379879,11.8229982"
                                id="Fill-9"
                                fill="#5890FF"
                            ></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default MedflowLogo