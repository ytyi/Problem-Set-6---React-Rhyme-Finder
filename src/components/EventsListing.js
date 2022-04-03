const EventsListing = (props) => { 
    
    const {wordInput,urlData, searchType,wordList,setWordList}=props


    const groupBy=(objects,property)=>{
         // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if(typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }

        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for(const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if(!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }

        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for(const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        return result;
    }

    const rhyme_func=()=>{

        const res=[]
        const listdata=groupBy(urlData,'numSyllables')
        console.log(listdata)
        Object.entries(listdata).forEach(([key,group])=>{
            res.push(<h3>Syllables  {key} </h3>);
            group.forEach(i=>{
                const cur=i['word']
                res.push(<li>{cur}<button className={cur} onClick={()=>{li_onclick_func(cur)}}>save</button></li>)

            })
        
        
        
        
        })
       

      
        return res

    
    }

    const li_onclick_func=(e)=>{
        setWordList((prevlist)=>{
            prevlist.push(e)
        })
    }

    const synon_func=()=>{

        const res=[]
        const listdata=groupBy(urlData,'numSyllables')
        console.log('sy: ',listdata)
        Object.entries(listdata).forEach(([key,group])=>{
            
            group.forEach(i=>{
                const cur=i['word']
                res.push(<li>{cur}<button className={cur} onClick={()=>{li_onclick_func(cur)}}>save</button></li>)

            })
        

 
        })

      
        return res

    
    }


    const test=(word)=>{
        return <li>{word}</li>
    }

    // const listItems = links.map((link) =>
    //     <li key={link.endpoint}>{link.endpoint}</li> 
    // );

    

    if(searchType===''){
        return null
    }
    else if(searchType=='rhymes') {
    if (urlData.length>0){
    return(
        <>
            <div className="row">
                <h2 className="col" id="output_description">Words with rhyme with {wordInput.current.value} </h2>
            </div>
            <div className="output row">
                <output id = "word_output" className="col"></output>
                {rhyme_func()}
            </div>
        </>
    )
    }
    else{
        return (
            <>
            <div className="row">
                <h2 className="col" id="output_description">(no results)</h2>
            </div>
            <div className="output row">
                <output id = "word_output" className="col"></output>
                
            </div>
            </>
        )

        }
    }
    else{

        if (urlData.length>0){
            return(
                <>
                    <div className="row">
                        <h2 className="col" id="output_description">Words with a similar meaning to {wordInput.current.value} </h2>
                    </div>
                    <div className="output row">
                        <output id = "word_output" className="col"></output>
                        {synon_func()}
                    </div>
                </>
            )
            }
            else{
                return (
                    <>
                    <div className="row">
                        <h2 className="col" id="output_description">(no results)</h2>
                    </div>
                    <div className="output row">
                        <output id = "word_output" className="col"></output>
                    </div>
                    </>
                )
        
                }






    }
  
}


export default EventsListing;