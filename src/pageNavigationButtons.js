import { getNextPage, getPagesByName, getPrevPage } from "./queries";
import { renderEpisodeBox, renderFilteredEpisodeBox } from "./renderEpisodeBoxContent";

export function nextPage(currentPage) {
    getNextPage(currentPage).then(nextPage => {
        const queryPage = nextPage.data.data.episodes.info.next;
        if (queryPage) {
            reloadPage(queryPage);
        };
    });
}

export function prevPage(currentPage) {
    getPrevPage(currentPage).then(prevPage => {
        const queryPage = prevPage.data.data.episodes.info.prev;
        if (queryPage) {
            reloadPage(queryPage);
        };
    });       
}

export function setNavigationOnClick(currentPage) {
    document.getElementById('next').onclick = () => nextPage(currentPage);
    document.getElementById('prev').onclick = () => prevPage(currentPage);
}

function reloadPage(newPage) {
    const episodeBoxDivs = ['episodeButtonList', 'episodeCard', 'episodeNavigationBar', 'searchBar'];
    episodeBoxDivs.forEach(div => {
        document.getElementById(div).remove();
    });
    renderEpisodeBox(newPage);
}

export function filteredNextPage(inputValue, currentPage) {
    if (currentPage == 1 ) {
        getPagesByName(inputValue)
        .then(query => isSinglePage(query))
        .then(condition => {
            if (!condition) {
                reloadFilteredPage(inputValue, 2);
            }
        });     
    };  
}

export function filteredPrevPage(inputValue, currentPage) {
    if (currentPage == 2) {
        reloadFilteredPage(inputValue, 1);
    };       
}

function reloadFilteredPage(inputValue, newPage) {
    const episodeBoxDivs = ['episodeButtonList', 'episodeCard', 'episodeNavigationBar', 'searchBar'];
    episodeBoxDivs.forEach(div => {
        document.getElementById(div).remove();
    });
    renderFilteredEpisodeBox(inputValue, newPage);
}

export function setFilteredNavigationOnClick(inputValue, currentPage) {
    document.getElementById('next').onclick = () => filteredNextPage(inputValue, currentPage);
    document.getElementById('prev').onclick = () => filteredPrevPage(inputValue, currentPage);
}

function isSinglePage(query) {
    const numberOfPages = query.data.data.episodes.info.pages;
    if (numberOfPages == 1) {
        return true;
    } else {
        return false;
    }
}