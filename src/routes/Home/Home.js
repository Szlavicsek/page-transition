import React, {Component} from 'react';
import * as help from "../../JsModules/helper";


class Home extends Component {
    componentDidMount() {
        help.makeLeadTransparent(500 + this.props.scrollDuration);
    }

    render() {
        return (
            <></>
        );
    }
}

export default Home;