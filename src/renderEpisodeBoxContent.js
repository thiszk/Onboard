import { renderEpisodeButtons } from './renderEpisodeButtons';
import { renderEpisodeCard } from './renderEpisodeCard';
import { getButtonInfo, getEpisodeByName } from './queries';
import { renderPageNavigationBar, renderFilteredPageNavigationBar } from './renderNavigationBar';
import { renderSearchBox } from './renderSearchBar';
import { loadState, removeLoadState } from './genericFunctions';

export function renderEpisodeBox(page) {
    const episodeBox = ['episodeBox'];
    loadState(episodeBox);
    getButtonInfo(page).then(query => renderEpisodeButtons(query))
    .finally(() => {
        removeLoadState(episodeBox);
        renderEpisodeCard();
        renderPageNavigationBar(page);
        renderSearchBox();
    });
}

export function renderFilteredEpisodeBox(inputValue, currentPage) {
    const episodeBox = ['episodeBox'];
    loadState(episodeBox);
    getEpisodeByName(inputValue, currentPage).then(filteredQuery => renderEpisodeButtons(filteredQuery))
    .finally(() => {
        removeLoadState(episodeBox);
        renderEpisodeCard();
        renderFilteredPageNavigationBar(inputValue, currentPage);
        renderSearchBox(); 
    });
}