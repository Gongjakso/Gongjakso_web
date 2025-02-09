import { styled, css } from 'styled-components';

export const IconButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 9.375rem;
    gap: 0.313rem;
    color: ${({ theme, $active, $type }) => {
        if ($active) {
            if ($type === 'project') {
                return theme.Pink;
            } else if ($type === 'contest' || 'contestList') {
                return theme.Main2;
            }
            return theme.main;
        }
    }};
`;

export const IconNameSpan = styled.span`
    font-weight: ${({ $hover, $active }) =>
        $active ? '700' : $hover ? '700' : '100'};

    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme, $hover, $active }) =>
        $active ? theme.main : $hover ? theme.main : theme.mainFont};
`;
export const ProfileIcon = styled.img`
    width: 1.875rem;
    height: auto;
    margin: 0 0.625rem;
`;
