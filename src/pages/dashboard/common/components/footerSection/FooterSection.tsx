import { Tab, Tabs, tabsClasses } from "@mui/material";

type FooterSectionProps = {
   pages: string[],
   currentPage: string,
   clickHandler: (page: string) => void,
}

function FooterSection({ pages, currentPage, clickHandler }: FooterSectionProps) {
   return (
      <section className="w-full px-4 sm:container fixed z-20 bottom-4 left-1/2 -translate-x-1/2 bg-primary">
         <Tabs
            value={currentPage}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            indicatorColor="secondary"
            sx={{
               [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
               },
               [`& .MuiTab-root.Mui-selected`]: {
                  color: "#4CB648"
               },
            }}
         >
            {
               pages.map((page, index) => (
                  <Tab
                     key={index + page}
                     value={page}
                     label={page}
                     type="submit"
                     href=""
                     onClick={() => clickHandler(page)}
                     className="!text-sm lg:!text-base"
                  />
               ))
            }
         </Tabs>
      </section>
   );
};

export default FooterSection;