import { VFC } from 'react';

export interface Props {
  name: string;
  period: string;
}

const Education: VFC<Props> = ({ name, period }) => {
  return (
    <div className="flex justify-between items-center shadow py-5 px-10">
      <div className="text-lg font-bold">{name}</div>
      <div className="text-sm text-gray-400">{period}</div>
    </div>
  );
};

export default Education;
