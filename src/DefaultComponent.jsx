import {Component} from "react";
import styled from "styled-components";

const StyledDefaultComponent = styled.div``;   

class DefaultComponent extends Component{
    render(){
        return(
            <StyledDefaultComponent></StyledDefaultComponent>
        )
    }
} 

export default DefaultComponent;