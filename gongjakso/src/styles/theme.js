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
    windowSize,
    repo,
    fontSize,
    ...colorSystem,
    ...defaultfont,
};

export default theme;

// ${({ theme }) => theme.Pink}
// ${({ theme }) => theme.fontSize.xlg}
