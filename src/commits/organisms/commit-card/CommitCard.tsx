import React from 'react';
import { Commit } from '../../../model/commit';
import Card from '../../../lib/atoms/card/Card';
import Profile from '../../../lib/atoms/profile/Profile';
import { getPassedTime } from '../../../helper/utils';
import { useCurrentTimeContext } from '../../../context/CurrentTime';

export interface ICommitCard {
  commit: Commit;
}

const CommitCard = ({ commit }: ICommitCard) => {
  const { currentTime } = useCurrentTimeContext();
  const passedTime = getPassedTime(commit.date, currentTime);

  return (
    <Card className="items-center w-full justify-between">
      <div className="grow flex items-center">
        <Profile src={commit.author_avatar} />
        <div className="mx-3 flex flex-col justify-center">
          <div className="text-base font-medium break-words">{commit.message}</div>
          <div className="text-sm">
            <span>{commit.author}</span>
            <span className="text-slate-500"> authored </span>
            <span className="text-slate-500">{passedTime}</span>
          </div>
        </div>
      </div>
      <div className="px-2 py-1 ring-1 ring-gray-300 rounded-lg bg-slate-200 text-base w-24 min-w-24 flex justify-center">
        {commit.sha.slice(-8)}
      </div>
    </Card>
  );
};

export default CommitCard;
