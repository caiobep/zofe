import React from 'react'
import { InstantSearch, SearchBox, Stats } from 'react-instantsearch-dom'

const Search = () => (
  <InstantSearch
    indexName="zofe"
    appId={process.env.ALGOLIA_APP_ID}
    apiKey={process.env.ALGOLIA_SEARCH_API_KEY}
  >
    <SearchBox />
    <Stats />
    {/* <Snippet /> */}
  </InstantSearch>
)

export default Search
