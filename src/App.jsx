import {Component} from "react";
import Layout from "./Layout";
import Global from "./styles/Global";

class App extends Component{

    render(){
        return(
            <>
            <Global/>
            <Layout>
                <h1>Teste</h1>
            </Layout>
            </>
        )
    }

}


export default App;