import TestNavbar from "@/components/test/TestNavbar";

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        nav.sticky:not([data-test-nav]) { display: none !important; }
      `}} />
      <TestNavbar />
      {children}
    </>
  );
}
