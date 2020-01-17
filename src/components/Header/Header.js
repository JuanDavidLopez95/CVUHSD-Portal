import React from "react";

//Import components
import NavigationBar from "../NavigationBar.js";

import { NavigationBarHeader, DashboardHeaderContainer, DashboardHeader, 
        AddToHomeScreenButton, ToolTip, PortalHeaderText, Greeting, PositionGreeting } from "./Header_StyledComponents.js";

//Import 3rd-party APIs
import greeting from 'greeting';

const Header = ( { modifyLogInStatus, renderAsStudent,...props }) => {
    console.log("Header props:\t" + JSON.stringify(props) );

    let districtPosition = props.title;

    return ([
        <NavigationBarHeader 
            districtPosition={districtPosition}
            renderAsStudent={renderAsStudent} 
        >
            <NavigationBar
                districtPosition={districtPosition}
                modifyLogInStatus={modifyLogInStatus}
                renderAsStudent={renderAsStudent}  
            />
        </NavigationBarHeader>,

        <DashboardHeaderContainer id="back-to-top" districtPosition={districtPosition} renderAsStudent={renderAsStudent} >
            <DashboardHeader districtPosition={districtPosition} renderAsStudent={renderAsStudent} >
                <PortalHeaderText districtPosition={districtPosition} renderAsStudent={renderAsStudent} >
                    <strong>
                        {props.districtName || "District"}
                        <span>
                            <h2>
                                {props.headerTitle|| "Portal"}
                            </h2>
                        </span>
                    </strong>
                </PortalHeaderText>
                <Greeting districtPosition={districtPosition} renderAsStudent={renderAsStudent} >{ greeting.random() || "Hi"} <span> {props.fullName || "CVUHSD User"}<span>&#9786;</span></span></Greeting>
                <PositionGreeting districtPosition={districtPosition} renderAsStudent={renderAsStudent} ><span>{props.title || "User"}</span> from <span>{props.site || "CVUHSD"}</span></PositionGreeting>
                <AddToHomeScreenButton  id="addToHomeScreenButton" districtPosition={districtPosition} renderAsStudent={renderAsStudent} >Add to Home Screen</AddToHomeScreenButton>
                <ToolTip districtPosition={districtPosition} renderAsStudent={renderAsStudent}  className="tooltip" id="addToHomeScreenTooltip">
                    <p>
                        Create a shortcut to the portal app on your desktop. 
                    </p>
                    <p>
                        Be notified when a service such as Destiny is down, and 
                        conversely when it comes back up.
                    </p> 
                </ToolTip>
            </DashboardHeader>
        </DashboardHeaderContainer>
    ]);   
}; //end Header

export default Header;
