import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IIcon
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const Icon = ({ src, alt, ...rest }: IIcon) => {
  return <img src={src} alt={alt} {...rest} />;
};

Icon.defaultProps = {
  className: ''
};

export default Icon;
