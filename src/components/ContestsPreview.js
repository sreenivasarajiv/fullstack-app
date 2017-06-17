import React, { Component } from 'react';
import PropsType from 'prop-types';



class ContestsPreview extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        debugger
        console.log(this.props.contest.categoryName);
        this.props.onContestClick(this.props.contest.id);
    }

    render() {
        return (
            <div className="ContestPreview">
                <div className="link category-name" onClick={this.handleClick}>
                    {this.props.contest.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contest.contestsName}
                </div>
                {console.log(this.props.contest)}
            </div>
        )
    }

}

ContestsPreview.propsType = {
    contest: {
        id: PropsType.number.isRequired,
        categoryName: PropsType.string.isRequired,
        contestsName: PropsType.string.isRequired,
    },
    onContestClick: PropsType.func.isRequired

}

export default ContestsPreview;