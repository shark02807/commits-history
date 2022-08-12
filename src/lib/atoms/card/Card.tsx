import React from 'react';
import cn from 'classnames';

export interface ICard {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICard) => {
  return (
    <div className={cn('flex p-4 bg-white ring-1 ring-gray-300 rounded-lg', className)}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: ''
};

export default Card;
