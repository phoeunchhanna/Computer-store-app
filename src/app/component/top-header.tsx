export const TopHeader = () => { // Changed to named export
  return (
    <div className=" hidden md:flex bg-red-600 text-white text-xs">
      <div className="container mx-auto flex justify-between items-center p-2">
        <p>Mon - Sat</p>
        <p>123A Street, Poi Pet City, Cambodia Country</p>
        <div className="flex items-center space-x-2">
          <p>Call Us: (855) 883140332</p>

          <a href="#" aria-label="Facebook" className="hover:opacity-75">
            {/* <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.35c0 .732.593 1.325 1.325 1.325h11.455v-8.855h-3.03v-3.565h3.03v-2.615c0-3 1.79-4.75 4.54-4.75 1.305 0 2.405.095 2.73.135v3.155h-1.85c-1.465 0-1.75.7-1.75 1.725v2.275h3.69l-.48 3.565h-3.21v8.855h6.14c.732 0 1.325-.593 1.325-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg> */}
            <img src="logo/fb.png" alt="Facebook" className="h-5 w-5" />
          </a>

          <a href="#" aria-label="Telegram" className="hover:opacity-75">
            <img src="logo/tl.png" alt="Telegram" className="h-5 w-5" />
          </a>

          <a href="#" aria-label="WhatsApp" className="hover:opacity-75">
             <img src="logo/wp.png" alt="WhatsApp" className="h-5 w-5" />
          </a>

        </div>
      </div>
    </div>
  );
};
export default TopHeader;