import SiteBrand from "@/components/site-brand";
import SiteNav from "@/components/site-nav";

type SiteHeaderProps = {
  light?: boolean;
  overlay?: boolean;
  hideBrandLogo?: boolean;
};

export default function SiteHeader({
  light = false,
  overlay = false,
  hideBrandLogo = false,
}: SiteHeaderProps) {
  const shell = overlay
    ? "absolute inset-x-0 top-0 z-40 bg-[linear-gradient(180deg,rgba(20,15,13,0.62)_0%,rgba(20,15,13,0)_100%)]"
    : "sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,241,232,0.78)] backdrop-blur-2xl";

  return (
    <header className={shell}>
      <div className="page-shell flex items-center justify-between py-5">
        <SiteBrand light={light} hideLogo={hideBrandLogo} />
        <SiteNav light={light} />
      </div>
    </header>
  );
}
