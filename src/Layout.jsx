import {Component} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

class Layout extends Component{

    render(){
        return(
            <>
                <Header/>
                {this.props.children}
                <Footer/>
            </>
        )
    }

}

export default Layout;