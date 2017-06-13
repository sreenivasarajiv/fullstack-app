import React from 'react';
import Header from './Header';
import ContestsPreview from './ContestsPreview';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        headerContent: 'Naming Contests'
    }


    render() {

        return (
            <div>
                <div>
                    <Header message={this.state.headerContent} />
                </div>
                <div>
                    {this.props.contests.map(contest => <ContestsPreview contest={contest} />)}
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('component mounted');
        // ajax, external libraries (component is dependent on), dom manipulations
        // should come here
    }

    componentWillUnmount() {
        console.log('component unmounted');
    }
}

export default App;