import { React } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Section from './containers/Section';
import { 
  university_news_articles, 
  sports_articles, 
  opinion_articles,
  ac_articles,
  spectrum_articles 
} from './data/articles';
import ScrollToTop from './functions/ScrollToTop'
import Home from './containers/Home';

const App = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/uni-news" element={<Section id="uni-news" header="University News" articles={university_news_articles}/>} />
        <Route path="/a&c" element={<Section id="a&c" header="Arts and Culture" articles={ac_articles} />} />
        <Route path="/opinion" element={<Section id="opinion" header="Opinion" articles={opinion_articles} />} />
        <Route path="/sports" element={<Section id="sports" header="Sports" articles={sports_articles} />} />
        <Route path="/spectrum" element={<Section id="spectrum" header="Spectrum" articles={spectrum_articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;