import { useState } from 'react';
import { PaginationContainer,SitePagination, PaginationButton, PaginationFirstButton, PaginationLastButton, PagePagination,PagePaginationButton } from './Pagination.styles'

type PaginationProps = {
  changePage: (page: number)=> void;
  currentPage: number;
}

export function Pagination({currentPage, changePage}: PaginationProps) {
    const [minPage, setMinPage] = useState(1)
    const PaginationButtonsArray = Array(9).fill(minPage).map((element,index) => element+index);

    return (
      
      <PaginationContainer>
        {minPage}
        <SitePagination>
          {currentPage > 1 && <PaginationFirstButton onClick={()=>changePage(currentPage-1)}>«</PaginationFirstButton>}
          {PaginationButtonsArray.map((pageNumber)=> <PaginationButton onClick={()=>changePage(pageNumber)} key={pageNumber} active={pageNumber === currentPage}>{pageNumber}</PaginationButton>)}
          <PaginationLastButton onClick={()=>changePage(currentPage+1)}>»</PaginationLastButton>
        </SitePagination>
        <PagePagination>
          <PagePaginationButton disabled={minPage===1} onClick={()=>setMinPage((prevMinPage)=>prevMinPage -9 > 0 ? prevMinPage-9 : 1)}>← Older</PagePaginationButton>
          <PagePaginationButton onClick={()=>setMinPage((prevMinPage)=>prevMinPage+9)} disabled={minPage<0}>Newer ➞</PagePaginationButton>
        </PagePagination>
      </PaginationContainer>
    )
  }
  