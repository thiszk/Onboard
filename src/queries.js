export const seriesInfo = `query seriesInfo{
  episodes{
    info{
      count
      pages
    }
  }
}`;

export const nextPage = `query nextPage($currentPage: Int) {
  episodes(page: $currentPage) {
    info {
      next
    }
  }
}`;  

export const prevPage = `query prevPage($currentPage: Int) {
  episodes(page: $currentPage) {
    info {
      prev
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

export const episodeByName = `query nameFilter($episodeName: String, $page: Int) {
  episodes(filter: { name: $episodeName }, page: $page) {
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

export const pagesByName = `query nameFilter($episodeName: String) {
  episodes(filter: { name: $episodeName }) {
    info{
      pages 
    }
  }
}`;

export function getSeriesInfo() {
    return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: seriesInfo } })
}

export function getNextPage(currentPage) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: nextPage, variables: {currentPage: currentPage } } })
}

export function getPrevPage(currentPage) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: prevPage, variables: { currentPage: currentPage } } })
}

export function getEpisodeByName(stringInput, currentPage) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: episodeByName, variables: { episodeName: stringInput, page: currentPage } } })
}

export function getPagesByName(stringInput) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: pagesByName, variables: { episodeName: stringInput } } })
}

export function getButtonInfo(episodesPage) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: buttonsInfo, variables: { page: episodesPage } } })
}

export function getCardInfo(episodeId) {
  return axios({ url: 'https://rickandmortyapi.com/graphql', method: 'post', data: { query: cardInfo, variables: { episodeId: episodeId } } })
}