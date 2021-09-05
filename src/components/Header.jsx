import {Component} from "react";
import styled from "styled-components";
import config from "../config.json";
import Image from "./Image";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
    background-color:${config.colors.secondary};
    width:100%;
    height:80px;
    position:fixed;
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    padding: 0 30px;

    & > div{
        display: flex;
        align-items: center;
    }

`;   

const HeaderFirstPart = styled.div`

    

`

const HeaderSecondPart = styled.div`

    flex-direction: row-reverse;

`

class Header extends Component{
    render(){
        return(
            <StyledHeader>

                <HeaderFirstPart id = 'header-first-part'>
                    <a href={window.location.origin}><Image src='./assets/images/logo.svg' size='120px'/></a>
                    <Menu id = 'header-menu'>
                        <MenuItem href ='#'selected={true}>Início</MenuItem>
                        <MenuItem href ='#'>Séries</MenuItem>
                        <MenuItem href ='#'>Filmes</MenuItem>
                        <MenuItem href ='#'>Infantil</MenuItem>
                        <MenuItem href ='#'>Canais</MenuItem>
                    </Menu>
                </HeaderFirstPart>
                <HeaderSecondPart id = 'header-second-part'>
                    <SearchBar/>
                </HeaderSecondPart>
            </StyledHeader>
        )
    }
} 

export default Header;