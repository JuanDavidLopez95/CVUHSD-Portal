import React, { useState, useEffect } from 'react';
import isDev from 'isdev';
import ReactLoading from 'react-loading';

import { faTasks, faFilter } from '@fortawesome/free-solid-svg-icons';

import { SkeletonTheme } from 'react-loading-skeleton';

import RequestRectangle from './RequestRectangle/RequestRectangle.js';

import FilterPane from './FilterPane/FilterPane.js';

import { Container, CloseButton, ReqRectContainer, InnerContainer, ModalTitle, RequestTypeTitle, FilterButton, TitleFilterContainer, FilterText, FAIconStyled } from './ViewRequestsModalStyledComponents.js';

const ViewRequestsModal = ({ districtPosition, renderAsStudent, fullName, email, site, toggleModal, modalIsOpen, itUID, notify }) => {
    let [ isLoading, setIsLoading ]                         = useState(false);
    let [ changePasswordResult, setChangePasswordResult ]   = useState(null);

    let [ serverMessage, setServerMessage ]                 = useState("");

    let [ submitEnabled, setSubmitEnabled ]                 = useState(false);

    let [ showFilterPane, setShowFilterPane ]               =   useState(false);
    let [ requestsType, setRequestsType ]                   =   useState(false);

    const afterOpenModal = async () => {
        setSubmitEnabled(true);
        setIsLoading(false);
        setServerMessage("");
    }; //afterOpenModal()

    const onClose = () => {
        setChangePasswordResult(null);
        setServerMessage("");
        toggleModal(false);
    }; //end onClose()

    const bodyOpenClassName="view-requests-modal-body--open",
            htmlOpenClassName="view-requests-modal-html--open",
            overlayClassName="view-requests-modal-overlay",
            portalClassName="view-requests-modal",
            contentClassName="view-requests-modal-content",
            parentSelectorID="chat-page-main-container";
    
    const getUserRequests = (email, requestType = "All") => {
        switch (requestType) {
                case "All":
                    requestType = "All_System";
                    break;
                
                case "Open":
                    requestType =   "Open_System";
                    break; 
                    
                case "Closed": 
                    requestType = "Closed_System";

                default:
                    requestType = "All_System"
        }

        const getUserRequests_URL = `${isDev ? "" : "/server"}/helpdesk/request/read/all/user`;
        const getUserRequests_Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": true
        };
    
        let requestsResponse = await fetch(getUserRequests_URL, {
            method: 'POST',
            headers: getUserRequests_Headers,
            body: JSON.stringify({ email, requestType } )
        })
        .then((serverResponse) => serverResponse.json()) //Parse the JSON of the response
        .then((jsonResponse) => jsonResponse)
        .catch((error) => {
            console.error(`Catching error:\t ${error}`);
        });

        return requestsResponse;
    }; //end getUserRequests

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => setIsLoading(false), 3000);
    }, [ requestsType ]); //end useEffect()

    return (
      <Container
        isOpen                      =   { modalIsOpen }
        onAfterOpen                 =   { afterOpenModal }
        onAfterClose                =   { onClose }
        shouldCloseOnEsc            =   { true }
        shouldReturnFocusAfterClose =   { true }
        //onRequestClose              =   { onClose }

        contentLabel                =   { "View Requests Modal" }

        portalClassName             =   { portalClassName }
        overlayClassName            =   { overlayClassName }
        bodyOpenClassName           =   { bodyOpenClassName }
        htmlOpenClassName           =   { htmlOpenClassName }
        className                   =   { contentClassName }

        parentSelector              =   { () => document.getElementById("cvuhsd-sso-portal")}

        shouldCloseOnOverlayClick   =   { false }
        closeTimeoutMS              =   { 300 }
      >
        <CloseButton 
            title               =   "Close modal"
            districtPosition    =   { districtPosition.toLowerCase() }
            onClick             =   { () => toggleModal(false) } 
        >
            &times;
        </CloseButton>
        <InnerContainer>
            <div>
                <ModalTitle 
                    districtPosition    =   { districtPosition.toLowerCase() }
                >
                    View Requests
                </ModalTitle>
                
                <FAIconStyled
                    districtPosition    =   { districtPosition.toLowerCase() }
                    icon                =   { faTasks }
                />
            </div>

            <TitleFilterContainer className="title-filter-container">
                <RequestTypeTitle
                    className           =   "request-type-title"
                    districtPosition    =   { districtPosition.toLowerCase() }
                >
                    {
                        requestsType ? (requestsType === "Open") ? "Open Requests" :   
                                        (requestsType === "In Progress")  ? "In Progress Requests" : 
                                        (requestsType === "Closed")  ? "Closed Requests" : "All Requests"
                                     
                        : "All Requests"
                    }
                </RequestTypeTitle>

                <FilterButton
                    className           =   "filter-button"
                    districtPosition    =   { districtPosition.toLowerCase() }
                    onClick             =   { () => setShowFilterPane(!showFilterPane) }
                >
                    <FAIconStyled
                            className           =   "view-request-icon"
                            districtPosition    =   { districtPosition.toLowerCase() }
                            color               =   "white"
                            icon                =   { faTasks, faFilter }
                    />
                    <FilterText
                            className="filter-text"
                            districtPosition    =   { districtPosition.toLowerCase() }
                    >
                        Filter
                    </FilterText>
                </FilterButton>
            </TitleFilterContainer>
     
            <FilterPane
                districtPosition    =   { districtPosition }
                renderAsStudent     =   { renderAsStudent }

                showFilterPane      =   { showFilterPane }
                setShowFilterPane   =   { setShowFilterPane }

                requestsType        =   { requestsType }
                setRequestsType     =   { setRequestsType }
            />


            <ReqRectContainer className="req-rect-container">
                <SkeletonTheme 
                    color           = {
                                        districtPosition ?
                                            ( (districtPosition === "student") || window.location.pathname === "/student") ? 
                                                " rgba(147, 30, 29, 0.21)": "rgba(30, 108, 147, 0.21);"
                                            : "rgba(147, 30, 29, 0.21)" 
                                        }
                    highlightColor  = {
                                            districtPosition ?
                                            ( (districtPosition === "student") || window.location.pathname === "/student") ? 
                                                " rgba(147, 30, 29, 0.5)": "rgba(30, 108, 147, 0.5);"
                                            : "rgba(147, 30, 29, 0.5)" 
                    }
                >
                    <RequestRectangle
                        districtPosition    =   { districtPosition.toLowerCase() }
                        isLoading           =   {   isLoading }
                    />
                    <RequestRectangle
                        districtPosition    =   { districtPosition.toLowerCase() }
                        isLoading           =   {   isLoading }
                    />
                    <RequestRectangle
                        districtPosition    =   { districtPosition.toLowerCase() }
                        isLoading           =   {   isLoading }
                    />

                    <RequestRectangle
                        districtPosition    =   { districtPosition.toLowerCase() }
                        isLoading           =   {   isLoading }
                    />
                    <RequestRectangle
                        districtPosition    =   { districtPosition.toLowerCase() }
                        isLoading           =   {   isLoading }
                    />
                    <RequestRectangle
                        districtPosition    =   { districtPosition.toLowerCase() }
                        isLoading           =   {   isLoading }
                    />                
                    </SkeletonTheme>
                </ReqRectContainer>
        </InnerContainer>
      </Container>
  ); //end return statement
}; //end TransferToITModal()

export default ViewRequestsModal;