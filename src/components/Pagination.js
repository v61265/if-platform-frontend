import { useState } from "react";
import styled from "styled-components";
import { H4 } from "./Text";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: ${({ theme }) => theme.space.md}px;
`;

const PaginationButton = styled(H4)`
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  padding: ${({ theme }) => theme.space.sm}px;
  margin-bottom: 12px;
  border-radius: 10px;
  & span {
    padding: 0 ${({ theme }) => theme.space.sm}px;
  }
  &:hover {
    ${({ theme }) => theme.color.backgroundIfLight}
  }
  cursor: pointer;
  ${(props) =>
    props.pageFocus &&
    `
      background: #F56F6F;
  `}
`;

export function Pagination({ totalPages, currentPage, handleClick }) {
  let startPage;
  let endPage;

  if (totalPages <= 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  let pageNums = [...Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i
  );

  return (
    <StyledPagination>
      {currentPage != 1 && (
        <PaginationButton onClick={() => handleClick("first")}>
          第一頁
        </PaginationButton>
      )}
      {currentPage != 1 && (
        <PaginationButton onClick={() => handleClick("prev")}>
          上一頁
        </PaginationButton>
      )}
      {pageNums.map((pageNum) => (
        <PaginationButton
          onClick={() => handleClick(pageNum)}
          pageFocus={currentPage === pageNum}
        >
          <span>{pageNum}</span>
        </PaginationButton>
      ))}
      {currentPage != totalPages && (
        <PaginationButton onClick={() => handleClick("next")}>
          下一頁
        </PaginationButton>
      )}
      {currentPage != totalPages && (
        <PaginationButton onClick={() => handleClick("last")}>
          最末頁
        </PaginationButton>
      )}
    </StyledPagination>
  );
}

export function MobilePagination() {
  return (
    <StyledPagination>
      <PaginationButton>第一頁</PaginationButton>
      <PaginationButton>上一頁</PaginationButton>
      <PaginationButton>下一頁</PaginationButton>
    </StyledPagination>
  );
}
