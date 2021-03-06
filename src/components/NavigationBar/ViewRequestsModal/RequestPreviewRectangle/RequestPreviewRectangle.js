import React, { useEffect, useState } from 'react';
import { faTasks, faCircle, faCheck, faAngleDoubleRight, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { removeHTML } from './../../../../utilityFunctions.js';

import Skeleton from 'react-loading-skeleton';

//import styled components
import { Container, Divider, Content, MetaDataContainer, MetaDataIcon, FAIconStyled, SubSection, IconSubSection, TimeDateSubSection, RequestTitle, RequestDescription, DateTime, TicketTypeCircleSkeleton } from './RequestPreviewRectangleStyledComponents.js'

const RequestPreviewRectangle = ({ districtPosition, renderAsStudent, subject, description, date, time, id, status, onClick, isLoading }) => {

    let [ faIcon, setFAIcon ] = useState("Open");

    const getFAIcon = (status) => {
        let faIcon;

        switch(status) {
            case "All":
                setFAIcon(faTasks);
            break;

            case "Open":
                setFAIcon(faCircle);
            break;

            case "In Progress":
                setFAIcon(faAngleDoubleRight);
            break;

            case "Closed":
                setFAIcon(faCheck);
            break;
        }

        return faIcon;
    };

    useEffect(() => {
        getFAIcon(status);
    }, [ status ]);
    
    const truncateDescription = (description) => {
        if (description.length >= 130) {
            let truncatedDescr = description.substr(0, 129);

            let truncDescEllipses = truncatedDescr + "...";
    
            console.log("trunc", truncDescEllipses);
    
            return truncDescEllipses;
        }
        return description;
    };

    return (
        <Container 
            className           =   "request-rectangle-container" 

            districtPosition    =   { districtPosition }
            renderAsStudent     =   { renderAsStudent }

            onClick             =   { onClick }
        >
            <Divider
                className           =   "request-rectangle-divider"

                districtPosition    =   { districtPosition }
                renderAsStudent     =   { renderAsStudent }

            />

            <Content 
                className           =   "request-rectangle-content"
                districtPosition    =   { districtPosition }
                renderAsStudent     =   { renderAsStudent }    
            >
                <IconSubSection 
                    className   =   "request-rectangle-subsection-icon"
                    width       =   "6%"
                    alignItems  =   "flex-start"
                >
                    {
                        isLoading ? (
                            <TicketTypeCircleSkeleton
                                circle              =   { true }
                                width               =   { 20  }
                                height              =   { 20 }
                            />
                        ) : (
                            <FAIconStyled
                                className           =   "view-request-type-icon"

                                districtPosition    =   { districtPosition.toLowerCase() }
                                renderAsStudent     =   { renderAsStudent }
                                color               =   "white"
                                icon                =   { faIcon }
                            />
                        )
                    }   
                </IconSubSection>

                <SubSection
                    className   =   "request-rectangle-subsection"
                    width       =   "53%"
                    alignItems  =   "flex-start"

                >
                    <RequestTitle 
                            className   =   "request-rectangle-req-title"
                            districtPosition    =   { districtPosition.toLowerCase() }
                            renderAsStudent     =   { renderAsStudent }
                    >
                        {
                            isLoading ? (
                                <Skeleton
                                    width={300}
                                />
                            ) : subject || "Request Subject"
                        }  
                    </RequestTitle>
                    <RequestDescription
                            className           =   "request-rectangle-description"
                            districtPosition    =   { districtPosition.toLowerCase() }
                            renderAsStudent     =   { renderAsStudent }
                    >
                        {
                            isLoading ? (
                                <Skeleton
                                    width={200}
                                />
                            ) : truncateDescription(removeHTML(description)) || "No description available"
                        }  
                    </RequestDescription>
                </SubSection>

                <TimeDateSubSection
                    className       =   "request-rectangle-subsection-time-date"
                    width           =   "35%"
                    alignItems      =   "flex-end"
                    as              =   "aside" //Make this be a <aside/> 
                >
                   
                   <MetaDataContainer
                        className   =   {`request-preview-metadata-container`}
                   >
                        <MetaDataIcon
                            className           =   {`request-preview-metadata-icon`}
                            districtPosition    =   { districtPosition.toLowerCase() }
                            renderAsStudent     =   { renderAsStudent }
                            icon                =   { faClock }
                            fontSize            =   "1.15em"
                        />
                        <DateTime
                            className           =   "request-rectangle-date-time"
                            districtPosition    =   { districtPosition.toLowerCase() }
                            renderAsStudent     =   { renderAsStudent }
                            as                  =   "time"
                        >
                            {
                                isLoading ? (
                                    <Skeleton
                                        width={40}
                                    />
                                ) : time || "12:51"
                            }  
                        </DateTime>
                   </MetaDataContainer>


                   <MetaDataContainer
                        className   =   {`request-preview-metadata-container`}
                   >
                        <MetaDataIcon
                            className           =   {`request-preview }-metadata-icon`}
                            districtPosition    =   { districtPosition.toLowerCase() }
                            renderAsStudent     =   { renderAsStudent }
                            icon                =   { faCalendar }
                            fontSize            =   "1.15em"
                        />
                        <DateTime
                            className           =   "request-rectangle-date-time"
                            districtPosition    =   { districtPosition.toLowerCase() }
                            renderAsStudent     =   { renderAsStudent }
                        >
                            {
                                isLoading ? (
                                    <Skeleton
                                        width={80}
                                    />
                                ) : date || "12/22/2020"
                            }  
                        </DateTime>
                    </MetaDataContainer>
                </TimeDateSubSection>
            </Content>
      </Container>  
    ); //end return()
}; //end RequestRectangle()

export default RequestPreviewRectangle;