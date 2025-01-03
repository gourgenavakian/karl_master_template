import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Wrapper;