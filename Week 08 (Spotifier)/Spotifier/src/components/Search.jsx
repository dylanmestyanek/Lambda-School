import React, {useRef, useCallback} from 'react';

const Search = props => {
    const timer = useRef;

    const triggerSearchEvent = useCallback( () =>{
        let searchField = document.querySelector(`#${props.type}Search`);
        
        if(searchField.value === ''){
            // Emptied Search.. do nothing
        }else{
            props.changeEvent(searchField);
        }
        
        clearInterval(timer.current);
    }, [props, timer]);

    const searchChange = e =>{
        clearInterval(timer.current);
        timer.current = setInterval(triggerSearchEvent, props.eventTimer);
    };

    return (
        <div className="dashboard-search">
            <label htmlFor={`${props.type}Search`}><i className="search-icon fas fa-search fa-1x"></i> </label>
            <input 
                type="text" 
                name={`${props.type}Search`} 
                id={`${props.type}Search`} 
                placeholder={props.placeholder}  
                onChange={searchChange} 
                autoComplete="off"/>
        </div>
    );
};

export default Search;