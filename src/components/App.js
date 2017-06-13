import React from 'react';
import Header from './Header';
import ContestsPreview from './ContestsPreview';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerContent: 'Naming Contests',
            contests: []
        }
    }

    render() {

        return (
            <div>
                <div>
                    <Header message={this.state.headerContent} />
                </div>
                <div>
                    {this.state.contests.map(contest => <ContestsPreview key={contest.id} contest={contest} />)}
                </div>
            </div>
        );

    }

    componentDidMount() {

        console.log('component mounted');
        // ajax, external libraries (component is dependent on), dom manipulations
        // should come here

        axios.get('/api/contests')
            .then(resp =>
                this.setState({ contests: resp.data.contests })
            )
            .catch(console.error)

    }

    componentWillUnmount() {
        console.log('component unmounted');
    }
}

export default App;