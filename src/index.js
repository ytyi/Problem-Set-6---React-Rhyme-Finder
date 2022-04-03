import React, {createRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// class Ps6 extends React.Component{
//   state={
//     savedWordsArray:[],
//     wordlist:{},
//     isloading: 1,
//     rors:0,
//     noresult:0
//   }

//   AddToSavedWords=(word) =>{
//     // You'll need to finish this...
//     console.log("add word")
  
// }


// groupBy=(objects, property)=> {
//   // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
//   // value for property (obj[property])
//   if(typeof property !== 'function') {
//       const propName = property;
//       property = (obj) => obj[propName];
//   }

//   const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
//   for(const object of objects) {
//       const groupName = property(object);
//       //Make sure that the group exists
//       if(!groupedObjects.has(groupName)) {
//           groupedObjects.set(groupName, []);
//       }
//       groupedObjects.get(groupName).push(object);
//   }

//   // Create an object with the results. Sort the keys so that they are in a sensible "order"
//   const result = {};
//   for(const key of Array.from(groupedObjects.keys()).sort()) {
//       result[key] = groupedObjects.get(key);
//   }
//   return result;
// }

// datamuseRequest=(url, callback)=> {
//   fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//           // This invokes the callback that updates the page.
//           this.setState({
//             isloading:1
//           })


//           callback(data);
//       }, (err) => {
//           console.error(err);
//       });
// }

// getDatamuseRhymeUrl(rel_rhy) {
//   return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': this.wordInput.value})).toString()}`;
// }

// getDatamuseSimilarToUrl(ml) {
//   return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': this.wordInput.value})).toString()}`;
// }

// addToSavedWords=(word)=> {
//   // You'll need to finish this...
//   console.log("add word")
//   let savedWordsArray = [...this.state.savedWordsArray];
//   savedWordsArray.push(word);
//   this.setState({
//     savedWordsArray:savedWordsArray
//   })
//   this.savedWords.innerHTML=savedWordsArray.join(',');
// }


// srb_func=()=>{
//   console.log('clicked show rhymes button');
    
   
//   console.log(this.wordInput.value)
//   this.datamuseRequest(this.getDatamuseRhymeUrl(this.wordInput.value),(data)=>{
//       if(data.length==0){
//           this.outputDescription.innerHTML='(no results)';
//           this.wordOutput.innerHTML='';        
//       }
//       else{
//           const wordlist=this.groupBy(data,'numSyllables');
//           console.log(wordlist);
//           this.outputDescription.innerHTML='Words that rhyme with '+ this.wordInput.value;
  
//           for(let [key,group] of Object.entries(wordlist)){

//               this.wordOutput.innerHTML+='<h3>Syllables ' +key+' </h3>';
   
//               let ul = document.createElement("ul"); 
//               for(let i in group){
//                   const cur=group[i]['word']
//                   // console.log(cur);
//                   let wordlist=this.state.wordlist
//                   wordlist.push(cur)
//                   this.setState({
//                     wordlist:wordlist
//                   })
//                   // ul.innerHTML+=`<li>${cur} <button class='btn btn-outline-success' onClick='${this.addToSavedWords(cur)}'>(save)</button></li>`



//                   // const li = document.createElement('li');
//                   // li.innerHTML=cur;
//                   // let save_button = document.createElement("button");
//                   // save_button.innerHTML = "(save)";
                  
//                   // save_button.classList='btn btn-outline-success';
//                   // save_button.id=cur;
//                   // save_button.addEventListener("click",()=>{
//                   //     console.log("rhym event");
//                   //     this.addToSavedWords(this.id);
//                   // });

                  
//                   // // console.log('yes');
                 
//                   // li.appendChild(save_button);
//                   // ul.appendChild(li);
                  
//               }
//               this.wordOutput.appendChild(ul);
              
//           }   
//           }
//       });
// }






// sB=(e)=>{
//   let isloading=-1*this.state.isloading

//   this.setState({
//     isloading:isloading
//   })}




//   render(){
//     return(
//       <div>
//     <h1 className="row">Rhyme Finder (579 Problem Set 5)</h1>
//     <div className="row">
//         <div  className="col">Saved words: <span id="saved_words" ref={(e)=>{this.savedWords=e}}></span></div>
//     </div>
//     <div className="row">
//         <div className="input-group col">
//             <input ref={(e)=>{this.wordInput=e}} className="form-control" type="text" placeholder="Enter a word" id="word_input" />
//             <button ref={(e)=>{this.showRhymesButton=e}} onClick={this.srb_func} id="show_rhymes" type="button" className="btn btn-primary" >Show rhyming words</button>
//             <button ref={(e)=>{this.showSynonymsButton=e}} id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>
//         </div>
//     </div>
//     {
//         if(this.state.rors===1)
//           return <h2></h2>

//     }
//     <div className="row">
//         {
//           this.state.isloading===1 ? <h2>isloading</h2>:
//             <h2></h2>
//           }
        
      

//         {/* <h2 ref={(e)=>{this.outputDescription=e}} className="col" id="output_description"></h2> */}
//     </div>
//     <div className="output row">
//         <output ref={(e)=>{this.wordOutput=e}} id = "word_output" className="col"></output>
//     </div>
// </div>
//     )
    
//   }
// }


// ReactDOM.render(
//     <Ps6 />,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
