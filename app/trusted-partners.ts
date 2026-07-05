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
    logo: "/rakez-logo.svg",
    href: "https://rakez.com",
    logoClassName: "h-8 w-auto opacity-90",
  },
  {
    id: "alnser",
    name: "Al Nser Holding",
    logo: "/alnser-logo.png",
    href: "https://alnserholding.com",
    logoClassName: "h-9 w-auto max-w-[180px] opacity-90",
  },
];
