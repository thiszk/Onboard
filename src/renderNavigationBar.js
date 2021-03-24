import { getSeriesInfo, getPagesByName } from './queries';
import { renderElementIntoTarget } from './genericFunctions';
import { setNavigationOnClick, setFilteredNavigationOnClick } from './pageNavigationButtons';

const blank = '';

export function renderPageNavigationBar(currentPage) {
    renderElementIntoTarget({
        elementId: 'episodeNavigationBar',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeNavigationBar', 
        targetId: 'episodeBox'
    });  
    getSeriesInfo().then(query => renderPaginationButtons(query, currentPage))
}

function renderPaginationButtons(query, currentPage) {
    const RaMNumberOfPages = query.data.data.episodes.info.pages;
    renderNavigationButton('prev', '<');
    renderPageGroup(RaMNumberOfPages);
    renderNavigationButton('next', '>');
    setNavigationOnClick(currentPage);
    highlightCurrentPage(currentPage);
}

function renderNavigationButton(navigationType, symbol) {
    renderElementIntoTarget({
        elementId: navigationType,
        elementType: 'button', 
        content: symbol,
        elementClass: navigationType, 
        targetId: 'episodeNavigationBar'
    });
}

function renderPageGroup(numberOfPages) {
    renderElementIntoTarget({
        elementId: 'pageButtonGroup',
        elementType: 'div', 
        content: blank,
        elementClass: 'pageButtonGroup', 
        targetId: 'episodeNavigationBar'
    });
    for (let index = 1; index <= numberOfPages; index++) {
        renderElementIntoTarget({
            elementId: 'pageButton' + index,
            elementType: 'button', 
            content: index,
            elementClass: 'pageButton', 
            targetId: 'pageButtonGroup'
        });  
    };
}

function highlightCurrentPage(currentPage) {
    const pageId = 'pageButton' + currentPage;
    document.getElementById(pageId).classList.add('pageHighlight');
}

export function renderFilteredPageNavigationBar(inputValue, currentPage) {
    renderElementIntoTarget({
        elementId: 'episodeNavigationBar',
        elementType: 'div', 
        content: blank,
        elementClass: 'episodeNavigationBar', 
        targetId: 'episodeBox'
    });  
    getPagesByName(inputValue).then(query => renderFilteredPaginationButtons(query, inputValue, currentPage))
}

function renderFilteredPaginationButtons(query, inputValue, currentPage) {
    const RaMNumberOfPages = query.data.data.episodes.info.pages;
    renderNavigationButton('prev', '<');
    renderPageGroup(RaMNumberOfPages);
    renderNavigationButton('next', '>');
    setFilteredNavigationOnClick(inputValue, currentPage);
    highlightCurrentPage(currentPage);
}