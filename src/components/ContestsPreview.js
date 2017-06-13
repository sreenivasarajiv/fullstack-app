import React from 'react';

const ContestsPreview = ({ contest }) => {
    return (
        <div>
            <div>
                {contest.categoryName}
            </div>
            <div>
                {contest.contestsName}
            </div>
        </div>
    )
}

export default ContestsPreview;