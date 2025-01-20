import { HeaderPicture } from './HeaderPicture/HeaderPicture';
import { ScrollIndicator } from './HeaderScroll/HeaderScroll';
import { HeaderTitle } from './HeaderTitle/HeaderTitle';

export const Header = () => (
  <div className="relative w-full h-screen">
    <HeaderPicture />
    <HeaderTitle />
    <div className="absolute bottom-10 left-10 md:bottom-2 md:left-14 lg:bottom-5 lg:left-20 hidden md:block">
      <ScrollIndicator />
    </div>
  </div>
);
