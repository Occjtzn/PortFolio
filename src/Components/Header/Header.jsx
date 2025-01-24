import { HeaderPicture } from './HeaderPicture/HeaderPicture';
import { ScrollIndicator } from './HeaderScroll/HeaderScroll';
import { HeaderTitle } from './HeaderTitle/HeaderTitle';

export const Header = () => (
  <div className="relative w-full h-screen">
    <HeaderPicture />
    <HeaderTitle />
    <div className="absolute bottom-10 left-10 md:bottom-6 md:left-12 lg:bottom-10 lg:left-14 hidden md:block">
      <ScrollIndicator />
    </div>
  </div>
);
