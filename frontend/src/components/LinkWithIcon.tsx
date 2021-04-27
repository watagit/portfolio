import { FC, ReactNode } from 'react';

export interface Props {
  label: string;
  icon: ReactNode;
}

const LinkWithIcon: FC<Props> = ({ label, icon }) => {
  return (
    <div className="inline-block text-center">
      <div className="shadow p-6 rounded">{icon}</div>
      <p>{label}</p>
    </div>
  );
};

export default LinkWithIcon;
