import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef, createRef } from "react";
import EventsListing from "./components/EventsListing";

function App() {
  // const [wordInput, setWordInput] = useState('');
  


  const [urlData,setUrlData]=useState([]);

  const wordInput=useRef(null);
  
  const [searchType,setSearchType]=useState('');

  const [wordList,setWordList]=useState(['apple','juice']);
  


  const getDatamuseSimilarToUrl=(e)=>{
    return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': e})).toString()}`;
  }

  const getDatamuseRhymeUrl=(e)=> {
    return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': e})).toString()}`;
  }

  const datamuseRequest=(url)=> {
  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUrlData(Object.values(data));

      }, (err) => {
          console.error(err);
      });
  }

  

  const rhymes_click_func=(e)=>{
    setSearchType('rhymes');
    console.log(wordInput.current.value);
    datamuseRequest(getDatamuseRhymeUrl(wordInput.current.value));

  }

  const synonyms_click_func=(e)=>{
    setSearchType('synonyms');
    // setWordList((e)=>e.push('apple'))
    console.log(wordInput.current.value);
    datamuseRequest(getDatamuseSimilarToUrl(wordInput.current.value));
  }

  const key_down_func=(e)=>{
    if (e.keyCode===13){
      rhymes_click_func();
  }
  }
  // setWordList(['xixi'])
  
  

  return (
    
    <main className="i-am-main">
      <h1 className="row">Rhyme Finder (579 Problem Set 5)</h1>
      
      <div className="row">
          <div className="col">Saved words: <span id="saved_words">
            {/* {wordList.json(', ')} */}
            </span></div>
          
          
          
      </div>
      <div className="row">
          <div className="input-group col">
              <input className="form-control" onKeyDown={key_down_func} ref={wordInput} type="text" placeholder="Enter a word" id="word_input" />
              <button id="show_rhymes" onClick={rhymes_click_func} type="button" className="btn btn-primary">Show rhyming words</button>
              <button id="show_synonyms" onClick={synonyms_click_func} type="button" className="btn btn-secondary">Show synonyms</button>
          </div>
      </div>
      
      <EventsListing 
      wordInput={wordInput}
      urlData={urlData} 
      searchType={searchType} 
      wordList={wordList}
      setWordList={setWordList}

      
      />
    </main>
    
  );
}

export default App;
