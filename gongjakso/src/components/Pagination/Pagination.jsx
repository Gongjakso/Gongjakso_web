import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin: 8.125rem 0;
`;

const Button = styled.button`
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    margin: 0;
    color: ${props => (props['aria-current'] ? 'white' : 'black')};
    background: ${props => (props['aria-current'] ? 'black' : 'transparent')};
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        background: ${props => (props['aria-current'] ? 'black' : '#f0f0f0')};
    }

    &[disabled] {
        color: #999;
        cursor: not-allowed;
        background: transparent;
    }

    &[aria-current] {
        font-weight: bold;
        transform: none;
    }
`;

const ArrowButton = styled(Button)`
    background: transparent;
    color: black;

    &:hover {
        background: #f0f0f0;
    }

    &[disabled] {
        color: #999;
        background: transparent;
    }
`;

function Pagination({ total, page, setPage, loadPosts }) {
    const numPages = total;
    const [currentPageRange, setCurrentPageRange] = useState([1, 10]);

    const handleNextPage = () => {
        if (page + 1 > currentPageRange[1]) {
            setCurrentPageRange([
                currentPageRange[1] + 1,
                currentPageRange[1] + 10,
            ]);
        }
        setPage(page + 1);
        loadPosts(page + 1);
    };

    const handlePrevPage = () => {
        if (page - 1 < currentPageRange[0]) {
            setCurrentPageRange([
                currentPageRange[0] - 10,
                currentPageRange[0] - 1,
            ]);
        }
        setPage(page - 1);
        loadPosts(page - 1);
    };

    return (
        <Nav>
            <ArrowButton onClick={handlePrevPage} disabled={page === 1}>
                {'<'}
            </ArrowButton>
            {Array(numPages)
                .fill()
                .map((_, i) => {
                    const pageNumber = i + 1;
                    if (
                        pageNumber >= currentPageRange[0] &&
                        pageNumber <= currentPageRange[1]
                    ) {
                        return (
                            <Button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                aria-current={
                                    page === pageNumber ? 'page' : undefined
                                }
                            >
                                {pageNumber}
                            </Button>
                        );
                    }
                    return null;
                })}
            <ArrowButton onClick={handleNextPage} disabled={page === numPages}>
                {'>'}
            </ArrowButton>
        </Nav>
    );
}

export default Pagination;
