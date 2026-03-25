import SiteBrand from "@/components/site-brand";
import SiteNav from "@/components/site-nav";

type SiteHeaderProps = {
  light?: boolean;
  overlay?: boolean;
};

export default function SiteHeader({
  light = false,
  overlay = false,
}: SiteHeaderProps) {
  const shell = overlay
    ? "absolute inset-x-0 top-0 z-30"
    : "sticky top-0 z-40 border-b border-[rgba(36,46,39,0.08)] bg-[rgba(251,247,241,0.84)] backdrop-blur-xl";

  return (
    <header className={shell}>
      <div className="mx-auto flex w-[min(100%-32px,1280px)] items-center justify-between py-5 sm:w-[min(100%-48px,1280px)]">
        <SiteBrand light={light} />
        <SiteNav light={light} />
      </div>
    </header>
  );
}
