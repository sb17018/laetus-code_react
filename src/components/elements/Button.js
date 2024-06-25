import { forwardRef } from "react";

const Button = forwardRef((props, ref) => <button ref={ref} {...props}>
    {props.children}
</button>
);

export default Button;