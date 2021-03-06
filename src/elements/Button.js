import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, src, width, height, bg, margin, padding, font_size, font_weight, _disabled, _onClick, align, seller_nav_button, seller_tab_button, flex_grow, color, border, hover_color, hover_border, tab_active_button } = props;
    const styles = { width, height, margin, padding, font_size, font_weight, bg, align, flex_grow, color, border, hover_color, hover_border };
    if (seller_nav_button) {
        return (
            <SellerBtn {...styles} onClick={_onClick}>
                <img src={src} alt="shopping-bag_icon" />
                {children}
            </SellerBtn>
        )
    }
    if (seller_tab_button) {
        return (
            <SellerTabBtn disabled={_disabled}>
                {children}
                <p>1</p>
            </SellerTabBtn>
        )
    }
    if (tab_active_button) {
        return (
            <TabBtn {...styles} disabled={_disabled} onClick={_onClick}>
                {children}
                <div></div>
            </TabBtn>
        )
    }
    return (
        <Btn {...styles} disabled={_disabled} onClick={_onClick}>{children}</Btn>
    )
}

Button.defaultProps = {
    children: null,
    width: "100%",
    margin: false,
    padding: false,
    _disabled: false,
    _onClick: () => { },
};

const Btn = styled.button`
    cursor: pointer;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.bg ? "white" : props.disabled ? "#c4c4c4" : "#21BF48"};
    color:${(props) => props.color || "white"};
    border-radius: 5px;
    border: ${(props) => props.border || "none"};
    font-size: ${(props) => props.font_size};
    font-weight: ${(props) => props.font_weight};
    ${(props) => props.margin ? `margin:${props.margin};` : ""}
    ${(props) => props.padding ? `padding:${props.margin};` : ""}
    align-self: ${(props) => props.align};
    flex-grow: ${(props) => props.flex_grow};
    &:hover {
        border: ${(props) => props.hover_border};
        color: ${(props) => props.hover_color};
    }
`

const TabBtn = styled.button`
    width: 320px;
    height: 60px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.disabled ? "#767676" : "#21BF48"};
    div {
        width: 100%;
        height: 6px;
        margin-top: 12px;
        background-color: ${(props) => props.disabled ? "#E0E0E0;" : "#21BF48"};
    }
`

const SellerBtn = styled.button`
    width: 168px;
    height: 54px;
    border-radius: 5px;
    background-color: #21BF48;
    color: #ffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const SellerTabBtn = styled.button`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 15px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    color: black;
    background-color: ${(props) => props.disabled ? "#FFFF" : "#21BF48"};
    &:hover {
        background-color: #EFFFF3;
    }
    p{
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: #EB5757;
        color: #FFFF;
        line-height: 21px;
    }
`

export default Button;