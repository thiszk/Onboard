import { renderEpisodeBox } from './renderEpisodeBoxContent';
import { renderCard} from './renderEpisodeCard';
import { setTitleDescription } from './setDescription';

export const seriesInfo = `query seriesInfo{
    episodes{
      info{
        count
      }
    }
  }`;
  
export const buttonsInfo = `query buttonInfo($page: Int) {
      episodes(page: $page) {
      results {
        id
        episode
      }
    }
  }`;

export const cardInfo = `query cardInfo($page: Int) {
  episodes(page: $page) {
  results {
    id
    episode
    name
    air_date
    characters{name}
  }
}
}`;

export function getSeriesInfo() {
    axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: seriesInfo } })
    .then(setTitleDescription)
    .catch(erro => console.log(erro));
}

export function getButtonInfo(episodesPage) {
  axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: buttonsInfo, variables: { page: episodesPage } } })
  .then(renderEpisodeBox)
  .catch(erro => console.log(erro));
}

export function getCardInfo(episodesPage, episodeIndex) {
  axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: cardInfo, variables: { page: episodesPage } } })
  .then(query =>renderCard(query, episodeIndex))
  .catch(erro => console.log(erro));
}