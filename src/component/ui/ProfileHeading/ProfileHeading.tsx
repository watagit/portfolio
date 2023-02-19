import { biography } from "@/data/biography";

export const ProfileHeading = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Wataru Ono</h1>
      <p className="whitespace-pre-line">{biography}</p>
    </div>
  );
};
