import { renderEpisodeButtons } from './renderEpisodeButtons';
import { renderEpisodeCard } from './renderEpisodeCard';
import { setTitleDescription } from './setDescription';

export const seriesInfo = `query seriesInfo{
    episodes{
      info{
        count
      }
    }
  }`;
  
export const buttonsInfo = `query buttonInfo($page: page) {
      episodes(page: $page) {
      results {
        id
        episode
      }
    }
  }`;

export const cardInfo = `query cardInfo($page: page) {
      episodes(page: $page) {
      results {
        id
        episode
        name
        air_date
        characters {
          name
        }
      }
    }
  }`;

export function getSeriesInfo() {
    axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: seriesInfo } })
    .then(setTitleDescription)
    .catch(erro => console.log(erro));
}

export function getButtonInfo() {
  axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: buttonsInfo } })
  .then(renderEpisodeButtons)
  .catch(erro => console.log(erro));
}

export function getCardInfo() {
  axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: cardInfo } })
  .then(renderEpisodeCard)
  .catch(erro => console.log(erro));
}