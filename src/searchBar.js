import { isNull } from 'lodash';
import { getEpisodeByName } from './queries';
import { renderFilteredEpisodeBox } from './renderEpisodeBoxContent';

const blank = '';

export function filterEpisode() {
    const inputValue = document.getElementById('searchInput').value;
    if (inputValue != blank) {
        const input = getEpisodeByName(inputValue, 1).then(query=>checkInput(query, inputValue));        
    } 
}

export function reloadFilteredPage(inputValue, newPage) {
    const episodeBoxDivs = ['episodeButtonList', 'episodeCard', 'episodeNavigationBar', 'searchBar'];
    episodeBoxDivs.forEach(div => {
        document.getElementById(div).remove();
    });
    renderFilteredEpisodeBox(inputValue, newPage);
}

export function episodeNotFound() {  
    alert('Episode Not Found');
}

function checkInput(query, inputValue) {
    const result = query.data.data.episodes;
    if (isNull(result)) { 
        alert('Episode Not Found');
    }
    else { 
        reloadFilteredPage(inputValue, 1);
    }
}