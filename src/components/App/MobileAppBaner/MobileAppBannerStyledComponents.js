import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const animationTime = "350ms";

const DarkOverlay = styled("div")`
    visibility: hidden;

    position: absolute;
    z-index: 5;

    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0;

    transition: ${animationTime} opacity ease-in-out;

    @media only screen and (max-width: 765px) {
        visibility: visible;
        opacity: 0.75;
    }

`;  

const Container = styled("div")`
    visibility: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    z-index: 6;
    bottom: -999px;

    width: 100%;
    height: 35%;
    background-color: white;

   border-top-left-radius: 10px;
   border-top-right-radius: 10px;

   box-shadow: 5px 5px 30px -11px rgba(0,0,0,0.75);

   transition: bottom ${animationTime}  ease-in-out;

    @media only screen  and (max-width: 765px) {
        visibility: visible;
        bottom: 0px;
    }
`;

let HeaderTitle = styled("h3")`
    font-size: 1.45em;
    font-weight: bold;

    color: ${ props => props.districtPosition ?
                                    ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent || window.location.pathname === "/student") ? 
                                        "#931E1D": "#1E6C93"
                                : "#931E1D"
        };


    margin-top: 15px;
    padding-bottom: 15px;

    border-bottom: 1px solid ${ props => props.districtPosition ?
                                      ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent || window.location.pathname === "/student") ? 
                                          "rgba(147,30,30, 0.5)": "rgba(30,108,147, 0.5)"
                                    : "rgba(147,30,30, 0.5)"
            };
`;

let Divider = styled("hr")`
    width: 85%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: ${ props => props.districtPosition ?
                                      ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent || window.location.pathname === "/student") ? 
                                          "#931E1D": "#1E6C93"
                                    : "#931E1D"
            };

    opacity: 0.5;
`;

const ViewOptionContainer = styled("section")`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    margin: 15px 0px;
    padding: 0px 10%;
`;

const ViewOptionLink = styled("a")`
    cursor: pointer;
    text-decoration: none;

    margin-left: auto;
`;

const ViewOptionImage = styled("img")`
    max-width: 100px;
    height: 36px;
`;

let FAIconStyled = styled(FontAwesomeIcon)`
    display: inline-block;
    font-size: ${props => props.fontSize ? props.fontSize : "2em"};

    max-width: 100px;
    height: 36px;

   color: ${ props => props.districtPosition ?
                                      ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent || window.location.pathname === "/student") ? 
                                          "#931E1D": "#1E6C93"
                                    : "#931E1D"
            };

`;

let ViewOptionText = styled("h4")`
    font-size: 1.2em;

    color: ${ props => props.districtPosition ?
                                ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent || window.location.pathname === "/student") ? 
                                    "#931E1D": "#1E6C93"
                            : "#931E1D"
    };

    margin-left: 15px;
`;

const Button = styled("h4")`
    cursor: pointer;
    color: white;

    font-size: 1.2em;

    background-color: ${ props => props.districtPosition ?
                                ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent || window.location.pathname === "/student") ? 
                                    "#931E1D": "#1E6C93"
                            : "#931E1D"
    };

    padding: 5px;

    border-radius: 10px;

    margin-left: auto;

`;
export { DarkOverlay, Container, HeaderTitle, Divider, ViewOptionContainer, ViewOptionLink, ViewOptionImage, FAIconStyled, ViewOptionText, Button };