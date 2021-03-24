import { renderEpisodeBox } from './renderEpisodeBoxContent';
import { renderTitleDescription } from './setDescription';
const initialPage = 1;

function renderPage() {
    renderTitleDescription();
    renderEpisodeBox(initialPage);
}

renderPage();