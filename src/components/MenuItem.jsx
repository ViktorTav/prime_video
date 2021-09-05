import {Component} from "react";
import styled from "styled-components";
import config from '../config.json';

const StyledMenuItem = styled.li`

    box-sizing:content-box;
    display: block;
    margin: 8px;
    padding: 3px 0;
    font-weight: 700;
    border-bottom: ${props=>props.selected? '1px solid white': 'none'};
    color: ${props=>props.selected? 'white': config.colors.unfocus};
    font-size:1.1rem;

    &:hover{
        color: white;
    }

`;   

class MenuItem extends Component{
    render(){
        return(

            <StyledMenuItem selected = {this.props.selected}>
                <a href={this.props.href}>
                    {this.props.children}
                </a>
            </StyledMenuItem>

        )
    }
} 

export default MenuItem;