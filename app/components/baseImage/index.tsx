import React, { memo } from 'react';
import { Image } from 'expo-image';
import { ImageProps } from 'expo-image';

interface IBaseImage extends ImageProps {}

const BaseImage: React.FC<IBaseImage> = ({ ...props }) => {
  return <Image {...props} />;
};

export default memo(BaseImage);
