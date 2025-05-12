import React, { ReactNode } from 'react';

type ChartContainerProps = {
    children: ReactNode,
    name:string,
    subtitle:string,
    className?:string
}

const ChartContainer = ({ children, name, subtitle, className }: ChartContainerProps) => {
    return (
      <div className={`flex flex-col grow border border-light-gray ${className}`}>
          <div className="flex flex-col gap-2 border-b border-light-gray bg-gray-50 p-5">
              <span className="font-semibold">{name}</span>
              <span className="text-1xl">{subtitle}</span>
          </div>
          <div className='flex grow'>
            {children}
          </div>
      </div>
    );
  };
  

export default ChartContainer;