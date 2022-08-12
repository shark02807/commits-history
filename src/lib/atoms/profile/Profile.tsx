import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IProfile
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

const Profile = ({ src, alt, className }: IProfile) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full h-10 w-10 ring-2 ring-white ${className}`}
      role="profile"
    />
  );
};

export default Profile;
