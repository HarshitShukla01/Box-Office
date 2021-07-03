import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/Config'
import ShowGrid from '../components/show/ShowGrid'
import ActorGrid from '../components/actor/ActorGrid'
import { useLastQuery } from '../misc/custom-hooks'
import {SearchInput,RadioInputsWrapper,SearchButtonWrapper} from './Home.styled'
import CustomRadio from '../components/CustomRadio'

const Home = () => {
	const [intake, setIntake] =  useLastQuery();
    const [result, setResult] = useState(null);
    const [serachOption, setSearchOption] = useState('shows')
    
    const isShowsSearch = serachOption === 'shows';
    const onInputChange = (ev) =>{
        setIntake(ev.target.value);
    }
    
    const onSearch = () =>{
    	//http://api.tvmaze.com/search/shows?q=men
    	apiGet(`/search/${serachOption}?q=${intake}`)
    	.then((res) => {setResult(res);});
    }
    
    const onEnterKey = (ev)=>{
      if(ev.keyCode===13){
      	onSearch();
      }
    }

    const renderResults= () =>{
       if(result && result.length===0){
          return <div>No Result</div>
       }

       if(result && result.length>0){     
         
        if(result[0].show)
       	 	 return  <ShowGrid data={result}/> 
       	else
       	    return <ActorGrid data={result}/>
       	 
       }

       return null;
    }

    const onRadioChange = (ev)=>{
      setSearchOption(ev.target.value);
    }	
    return (
		<MainPageLayout>
		   <SearchInput type="text" onChange={onInputChange} onKeyDown={onEnterKey} value={intake}/>
		   <RadioInputsWrapper>
		      <div>   
		         <CustomRadio  label="Shows" type="radio" id="shows-search" checked={isShowsSearch} value="shows" onChange={onRadioChange}/>
		      </div>
		      <div>
		         <CustomRadio label="Actors" type="radio" id="actors-search" checked={!isShowsSearch} value="people" onChange={onRadioChange} />
		      </div>
		   </RadioInputsWrapper>
           <SearchButtonWrapper>
		   <button type="button" onClick={onSearch}>Search</button>
           </SearchButtonWrapper>
		   {renderResults()}
		</MainPageLayout>
	)
}

export default Home