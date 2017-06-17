import React from 'react';
import ContestsPreview from './ContestsPreview';
import PropTypes from 'prop-types';

const ContestList = ({contests, onContestClick}) => {
    return (
        <div>
            <div>
                {contests.map(contest =>
                    <ContestsPreview
                        key={contest.id}
                        id={contest.id}
                        contest={contest}
                        onContestClick={onContestClick}
                    />
                )}
            </div>
        </div>
    );
}

ContestList.propTypes = {
    contests: PropTypes.array.isRequired,
    onContestClick: PropTypes.func.isRequired
}

export default ContestList;