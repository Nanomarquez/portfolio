import { forwardRef } from "react";
import { classes } from "~/utils/style";
import styles from "./visually-hidden.module.css";

const VisuallyHidden = forwardRef(
  (
    {
      className,
      showOnFocus,
      as: Component = "span",
      children,
      visible,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        className={classes(styles.hidden, className)}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
