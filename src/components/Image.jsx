import {Component} from "react";
import styled from "styled-components";

const StyledImage = styled.img`
    width:${props=>props.size||'256px'};
`;   

class Image extends Component{
    render(){
        return(
            <StyledImage size={this.props.size} src={this.props.src}></StyledImage>
        )
    }
} 

export default Image;