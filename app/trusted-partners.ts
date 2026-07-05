export type TrustedPartner = {
  id: string;
  name: string;
  logo: string;
  href: string;
  logoClassName: string;
};

export const TRUSTED_PARTNERS: TrustedPartner[] = [
  {
    id: "dmcc",
    name: "DMCC",
    logo: "/dmcc-logo.svg",
    href: "https://dmcc.ae",
    logoClassName: "h-6 w-auto opacity-80",
  },
  {
    id: "rakez",
    name: "RAKEZ",
    logo: "/rakez-logo-horizontal.svg",
    href: "https://rakez.com",
    logoClassName: "h-7 w-auto max-w-[200px] opacity-90",
  },
  {
    id: "alnser",
    name: "Al Nser Holding",
    logo: "/alnser-logo.png",
    href: "https://alnserholding.com",
    logoClassName: "h-9 w-auto max-w-[180px] opacity-90",
  },
  {
    id: "emaar",
    name: "Emaar Properties",
    logo: "/emaar-logo.svg",
    href: "https://www.emaar.com",
    logoClassName: "h-5 w-auto max-w-[160px] opacity-90",
  },
  {
    id: "damac",
    name: "DAMAC Properties",
    logo: "/damac-logo.svg",
    href: "https://www.damacproperties.com/en/",
    logoClassName: "h-8 w-auto max-w-[140px] opacity-90",
  },
  {
    id: "nakheel",
    name: "Nakheel",
    logo: "/nakheel-logo.svg",
    href: "https://www.nakheel.com",
    logoClassName: "h-5 w-auto max-w-[150px] opacity-90",
  },
];
