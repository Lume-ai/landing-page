import Link from "next/link";

export const LogoSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 7.70073L15.6296 14.8565L15.6188 21.8692L1.65403e-07 14.7195L0 7.70073Z" fill="currentColor" />
      <path d="M31.9035 7.70073L16.2739 14.8565L16.2848 21.8692L31.9035 14.7195V7.70073Z" fill="currentColor" />
      <path d="M0.854729 7.27873L15.6208 5.54229e-05L15.6208 6.20137L6.98761 10.0739L0.854729 7.27873Z" fill="currentColor" />
      <path d="M30.8245 7.35279L16.2777 0L16.2777 6.20132L24.9108 10.0738L30.8245 7.35279Z" fill="currentColor" />
    </svg>

  );
};

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoSVG className="text-black dark:text-white" />
      <span className="text-2xl font-medium text-black dark:text-white">Lume</span>
    </Link>
  );
};
