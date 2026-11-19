import React from "react";
import { styled } from "@mui/material/styles";
import { Link, LinkProps } from "@mui/material";
import { CC_BY_NAME, CC_BY_SHORT_NAME, CC_BY_URL } from "../../constants/licence";

const Icon = styled("img")({
  height: 24,
  width: 24,
  margin: "0 2px",
  verticalAlign: "text-bottom",
});

type CCLicenceLinkProps = Omit<LinkProps, "href" | "target" | "rel">;

/** Link to the CC BY 4.0 licence deed, marked up as recommended by Creative Commons. */
export const CCLicenceLink: React.FC<CCLicenceLinkProps> = ({ children, ...props }: CCLicenceLinkProps) => (
  <Link href={CC_BY_URL} target="_blank" rel="license noopener noreferrer" {...props}>
    {children ?? CC_BY_SHORT_NAME}
  </Link>
);

/** The official CC + BY icons, linking to the licence deed. */
export const CCLicenceIcons: React.FC = () => (
  <CCLicenceLink color="inherit" aria-label={`${CC_BY_NAME} licence`}>
    <Icon src="/images/cc/cc.svg" alt="" aria-hidden="true" />
    <Icon src="/images/cc/by.svg" alt="" aria-hidden="true" />
  </CCLicenceLink>
);
