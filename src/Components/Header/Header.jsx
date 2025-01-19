import { HeaderPicture } from './HeaderPicture/HeaderPicture';
import { ScrollIndicator } from './HeaderScroll/HeaderScroll';
import { HeaderTitle } from './HeaderTitle/HeaderTitle';

export const Header = () => {
  return (
    <div className="relative w-full h-screen">
      <HeaderPicture />
      <HeaderTitle />
      <div className="absolute bottom-20 left-20">
        <ScrollIndicator />
      </div>
    </div>
  );
};
