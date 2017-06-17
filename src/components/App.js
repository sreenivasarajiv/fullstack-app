import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url);
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerContent: 'Naming Contests',
            contests: this.props.initialContests
        }
    }

    render() {
        return (
            <div>
                <Header message={this.state.headerContent} />
                <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />
            </div>
        );
    }

    fetchContest(contestId) {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
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