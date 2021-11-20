import response from '../response';
import IndexHead from '../src/components/common/head';
import HeaderSearch from '../src/components/headerSearch';
import SearchResults from '../src/components/searchResults';

export async function getServerSideProps(context) {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const CTX_KEY = process.env.CONTEXT_KEY;

  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data = useDummyData 
    ? response 
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CTX_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json());

  return {
    props: {
      results: data,
    }
  }
}


function Search({ results }) {  
  return (
    <>
      <IndexHead title='Google Search' />
      <HeaderSearch />
      <SearchResults results={results} />
    </>
  )
}

export default Search;
