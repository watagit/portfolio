import { VFC } from 'react';

export interface Props {
  companyName: string;
  role: string;
  period: string;
}

const Work: VFC<Props> = ({ companyName, role, period }) => {
  return (
    <div className="flex justify-between items-center shadow py-5 px-10">
      <p className="text-lg font-bold">{companyName}</p>
      <p className="text-xs font-normal">{role}</p>
      <p className="text-sm text-gray-400">{period}</p>
    </div>
  );
};

export default Work;
