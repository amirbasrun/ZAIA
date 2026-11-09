import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@study/ui/components/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 transition ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 p-4 pt-0">
        {children}
      </div>
    </SidebarInset>
  </SidebarProvider>
);

export default MainLayout;
