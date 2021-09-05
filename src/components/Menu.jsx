import {Component} from "react";
import styled from "styled-components";

const StyledMenu = styled.ul`

    display: flex;
    flex-direction: ${props=>props.direction || 'row'};
    margin: 10px;

`;   

class Menu extends Component{
    render(){
        return(
            <StyledMenu direction = {this.props.direction}>
                {this.props.children}
            </StyledMenu>
        )
    }
} 

export default Menu;