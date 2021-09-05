import {Component} from "react";
import styled from "styled-components";
import Image from "./Image";
import config from "../config.json";

const StyledSearchBar = styled.div`

    display: flex;
    align-items: center;
    justify-content:center;
    padding: 3px;
    background-color: ${config.colors.search_bar};
    border:1px solid ${config.colors.unfocus}; 

    &:focus-within,&:hover{
        border: 1px solid white;
        cursor:pointer;
    }

    & > *:hover{
        cursor:pointer;
    }

`;   

const StyledLabelSearchBar = styled.label`
    margin: 0 5px;

`

const StyledInputSearchBar = styled.input`

    width: 180px;
    height: ${props=>props.size||'30px'};
    background-color: ${config.colors.search_bar};
    font-size: 1rem;

    &::placeholder{
        font-weight: 600;
    }

`

class SearchBar extends Component{
    render(){
        return(
            <StyledSearchBar>
                <StyledLabelSearchBar htmlFor = 'search-bar'>
                    <Image src = './assets/images/search.svg' size='20px'></Image>
                </StyledLabelSearchBar>
                <StyledInputSearchBar placeholder='Busca'/>
            </StyledSearchBar>
        )
    }
} 

export default SearchBar;