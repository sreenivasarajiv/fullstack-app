import React from 'react';

const ContestsPreview = ({ contest }) => {
    return (
        <div className="ContestPreview">
            <div className="category-name">
                {contest.categoryName}
            </div>
            <div className="contest-name">
                {contest.contestsName}
            </div>
        </div>
    )
}

export default ContestsPreview;