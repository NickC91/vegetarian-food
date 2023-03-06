import styled from "styled-components";
import { space, layout, background, border, compose, typography, shadow, color } from 'styled-system'

const InputWrapper = styled("input")(
    {
        background: "var(white)",
        border: "2px solid",
        borderColor: "var(--gree-300)",
        color: "var(--grey-900)",
        height: "48px",
        cursor: "text",
        borderRadius: "100px",
        paddingLeft: "20px",
        paddingRight: "20px",
        appearance: "none",
        outline: "none",
        fontSize: "16px",
        lineHeight: "20px",
        "&::placeholder": {
            color: "var(--grey-900)",
            lineHeight: "20px",
        },
    },
    compose(layout, space, border, typography, shadow, color, background)
);

export default InputWrapper;