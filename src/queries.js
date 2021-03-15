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

export const cardInfo = `query cardInfo($episodeId: ID!){
    episode(id: $episodeId){
      episode
      name
      air_date
      characters {
        name
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
  .catch(erro => console.log(erro) );
}

export function getCardInfo(episodeId) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: cardInfo, variables: { episodeId: episodeId } } })
}