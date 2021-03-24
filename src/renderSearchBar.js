import { renderElementIntoTarget } from './genericFunctions';
import { filterEpisode } from './searchBar';

const blank = '';

export function renderSearchBox() {
    renderSearchDiv();
    renderElementIntoTarget({
        elementId: 'searchButton',
        elementType: 'button', 
        content: blank,
        elementClass: 'searchButton', 
        targetId: 'searchBar' 
    });
    renderElementIntoTarget({
        elementId: 'searchInput',
        elementType: 'input', 
        content: blank,
        elementClass: 'searchInput', 
        targetId: 'searchBar' 
    });
    setOnClickFilterAttribute();
}

function renderSearchDiv() {
    renderElementIntoTarget({
        elementId: 'searchBar',
        elementType: 'div', 
        content: blank,
        elementClass: 'searchBar', 
        targetId: 'episodeBox' 
    });
}

function setOnClickFilterAttribute() {
    document.getElementById('searchButton').onclick = () => filterEpisode();
}