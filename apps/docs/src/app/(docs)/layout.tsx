import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import GlobalHeader from "@/components/global-header";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <GlobalHeader />
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions()}
        sidebar={{
          collapsible: false,
        }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
