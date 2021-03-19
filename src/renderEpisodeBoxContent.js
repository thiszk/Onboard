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
    .then(renderEpisodeCard)
    .then(renderPageNavigationBar(page))
    .then(renderSearchBox)
    .then(removeLoadState(episodeBox));
}

export function renderFilteredEpisodeBox(inputValue, currentPage) {
    const episodeBox = ['episodeBox'];
    loadState(episodeBox);
    getEpisodeByName(inputValue, currentPage).then(filteredQuery => renderEpisodeButtons(filteredQuery))
    .then(renderEpisodeCard)
    .then(renderFilteredPageNavigationBar(inputValue, currentPage))
    .then(renderSearchBox)
    .then(removeLoadState(episodeBox));
}