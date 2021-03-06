import styled from "styled-components";

let FooterStyled = styled("footer")`
    width: 100%;
    background-color: ${ props => props.title ?
                                    ( (props.title.toLowerCase() === "student") || props.renderAsStudent === true || window.location.pathname === "/student") ? 
                                        "#B41A1F": "#1E6C93"
                                    : "#B41A1F" 
                        };
    margin-top: 0.1%;

    ul {
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    a {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* margin: 0% 0.5%; */
    }

    a:hover, a:focus, a:target {
        cursor: pointer;
        color: white;
    }
`; //end Footer

const AppButtonsSection = styled("section")`
    padding: 0.5% 0%;
`;


const MobileStoreImgLink = styled("a")`
    padding:  1% 0%;
`;

const MobileStoreImg = styled("img")`
    max-width: 35%;

    transition: transform .2s,margin .2s;

    :hover, :active, :target {
        transform: scale(1.1);
    }
`;
export { FooterStyled, AppButtonsSection, MobileStoreImgLink, MobileStoreImg };