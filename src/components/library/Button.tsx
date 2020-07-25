import React from "react";
import { Button as ReactstrapButton } from "reactstrap"; 

export type ButtonProps = {
  /** True to fill in the button, showing it as activated. Applies only to secondary buttons. */
  active?: boolean;
  /** Content displayed in button, usually text and/or an icon */
  children?: React.ReactNode;
  /** Color of the button */
  color?: "primary" | "secondary" | "tertiary" | "muted" | "link";
  /** Is the button disabled or enabled? */
  disabled?: boolean;
  /** Should this be forced to be an external link, even if it looks relative? */
  externalLink?: boolean;
  /**
   * Does this button function as a link to a URL? href also handles relative urls using Link
   * from React Router.
   **/
  href?: string;
  /** Is the button styling inactive? Distinct from `disabled`, it only affects styling */
  inactive?: boolean;
  /** true to show a loading spinner within the button */
  loading?: boolean;
  name?: string;
  /** Function to call on click */
  onClick?: React.MouseEventHandler;
};

const Button = ({
  children,
  color = "secondary",
  disabled,
  externalLink,
  href,
  inactive,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <ReactstrapButton>{children}</ReactstrapButton>
  );
}

export default Button