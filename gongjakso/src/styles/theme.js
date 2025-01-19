const windowSize = {};
const fontSize = {
    xs: '0.5rem',
    sm: '0.75rem',
    base: '1rem',
    md: '1.25rem',
    lg: '1.5rem',

    // 추가한 사이즈
    m: '1.125rem',
    mdd: '1.35rem',
    l: '1.75rem',
    ll: '2rem',
    xl: '2.25rem',
    xlg: '2.5rem',
    xxlg: '2.8rem',
};
const mobileFontSize = {
    xs: `${(0.5 * 0.6).toFixed(3)}rem`, // 0.255rem
    sm: `${(0.75 * 0.6).toFixed(3)}rem`, // 0.382rem
    base: `${(1 * 0.6).toFixed(3)}rem`, // 0.509rem
    md: `${(1.25 * 0.6).toFixed(3)}rem`, // 0.636rem
    lg: `${(1.5 * 0.6).toFixed(3)}rem`, // 0.764rem

    // 추가한 사이즈
    m: `${(1.125 * 0.6).toFixed(3)}rem`, // 0.573rem
    mdd: `${(1.35 * 0.6).toFixed(3)}rem`, // 0.687rem
    l: `${(1.75 * 0.6).toFixed(3)}rem`, // 0.891rem
    ll: `${(2 * 0.6).toFixed(3)}rem`, // 1.018rem
    xl: `${(2.25 * 0.6).toFixed(3)}rem`, // 1.145rem
    xlg: `${(2.5 * 0.6).toFixed(3)}rem`, // 1.273rem
    xxlg: `${(2.8 * 0.6).toFixed(3)}rem`, // 1.425rem
};
const tabletFontSize = {
    xs: `${((0.5 + 0.255) / 2).toFixed(3)}rem`, // 0.377rem
    sm: `${((0.75 + 0.382) / 2).toFixed(3)}rem`, // 0.566rem
    base: `${((1 + 0.509) / 2).toFixed(3)}rem`, // 0.754rem
    md: `${((1.25 + 0.636) / 2).toFixed(3)}rem`, // 0.943rem
    lg: `${((1.5 + 0.764) / 2).toFixed(3)}rem`, // 1.132rem

    // 추가한 사이즈
    m: `${((1.125 + 0.573) / 2).toFixed(3)}rem`, // 0.849rem
    mdd: `${((1.35 + 0.687) / 2).toFixed(3)}rem`, // 1.019rem
    l: `${((1.75 + 0.891) / 2).toFixed(3)}rem`, // 1.321rem
    ll: `${((2 + 1.018) / 2).toFixed(3)}rem`, // 1.509rem
    xl: `${((2.25 + 1.145) / 2).toFixed(3)}rem`, // 1.698rem
    xlg: `${((2.5 + 1.273) / 2).toFixed(3)}rem`, // 1.887rem
    xxlg: `${((2.8 + 1.425) / 2).toFixed(3)}rem`, // 2.113rem
};

const colorSystem = {
    Main1: '#0150F1',
    Main2: '#00A3FF',
    Light1: '#7CD0FF',
    Light2: '#C3E9FF',
    Grey: '#D9D9D9',
    LightGrey: '#949494',
    Green: '#00EFAF',
    Navy: '#000B6E',
    Purple: '#9556FF',
    Pink: '#E789FF',
    LimeGreen: '#24DA5E',
    border: '#dbdbdb',
    borderline: '#969696',
    box1: '#0054FF',
    box2: '#EB5959',
};

const defaultfont = {
    mainFont: '#000000',
    subFont: '#8C8C8C',
    subFont2: '#C4C4C4',
    mainFont2: '#FFFFFF',
    greyFont: '#b2b2b2',
};

const repo = {
    open: 'red',
    close: 'blue',
};

const theme = {
    pc: { windowSize, repo, fontSize, ...colorSystem, ...defaultfont },
    tablet: {
        windowSize,
        repo,
        fontSize: tabletFontSize,
        ...colorSystem,
        ...defaultfont,
    },
    mobile: {
        windowSize,
        repo,
        fontSize: mobileFontSize,
        ...colorSystem,
        ...defaultfont,
    },
    // repo,
    // // fontSize,
    // ...colorSystem,
    // ...defaultfont,
};

export default theme;

// ${({ theme }) => theme.Pink}
// ${({ theme }) => theme.fontSize.xlg}
