import { renderEpisodeButtons } from './renderEpisodeButtons';
import { renderEpisodeCard } from './renderEpisodeCard';

export function renderEpisodeBox(RaMQuery) {
    renderEpisodeButtons(RaMQuery);
    renderEpisodeCard();
}
