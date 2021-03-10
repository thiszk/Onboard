import { renderEpisodeButtons } from './renderEpisodeButtons';

const RaMQuery = `query RaM {
    episodes {
      info {
        count
      }
      results {
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
    axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: RaMQuery } })
    .then(renderEpisodeButtons)
    .catch(erro => console.log(erro));
}

export default RaMQuery; 