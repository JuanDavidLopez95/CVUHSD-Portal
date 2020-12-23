import React, { useState, useEffect } from 'react';
import { faTasks, faFilter } from '@fortawesome/free-solid-svg-icons';

import isDev from 'isdev';
import ReactLoading from 'react-loading';

import RequestRectangle from './RequestRectangle/RequestRectangle.js';

import { Container, CloseButton, ReqRectContainer, InnerContainer, ModalTitle, RequestTypeTitle, FilterButton, TitleFilterContainer, FilterText, FAIconStyled } from './ViewRequestsModalStyledComponents.js';

const ViewRequestsModal = ({ districtPosition, fullName, email, site, toggleModal, modalIsOpen, itUID, notify }) => {
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

    const bodyOpenClassName="change-password-modal-body--open",
            htmlOpenClassName="change-password-modal-html--open",
            overlayClassName="change-password-modal-overlay",
            portalClassName="change-password-modal",
            contentClassName="change-password-modal-content",
            parentSelectorID="chat-page-main-container";

        
        useEffect(() => {

        }, [ site, districtPosition ]); //end useEffect()

  return (
      <Container
        isOpen                      =   { modalIsOpen }
        onAfterOpen                 =   { afterOpenModal }
        onAfterClose                =   { onClose }
        shouldCloseOnEsc            =   { true }
        shouldReturnFocusAfterClose =   { true }
        //onRequestClose              =   { onClose }

        contentLabel                =   { "Support Request Modal" }

        portalClassName             =   { portalClassName }
        overlayClassName            =   { overlayClassName }
        bodyOpenClassName           =   { bodyOpenClassName }
        htmlOpenClassName           =   "change-password-modal-html--open"
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
                    color               =   "white"
                    icon                =   { faTasks }
                />
            </div>

            <TitleFilterContainer className="title-filter-container">
                <RequestTypeTitle
                    className           =   "request-type-title"
                    districtPosition    =   { districtPosition.toLowerCase() }
                >
                    All Requests
                </RequestTypeTitle>

                <FilterButton
                    className           =   "filter-button"
                    districtPosition    =   { districtPosition.toLowerCase() }
                >
                    <FAIconStyled
                            className           =   "view-request-icon"
                            districtPosition    =   { districtPosition.toLowerCase() }
                            color               =   "white"
                            icon                =   { faTasks, faFilter }
                    />
                    <FilterText
                            clasName="filter-text"
                            districtPosition    =   { districtPosition.toLowerCase() }
                    >
                        Filter
                    </FilterText>
                </FilterButton>
            </TitleFilterContainer>
     
            <ReqRectContainer className="req-rect-container">
                <RequestRectangle
                    districtPosition    =   { districtPosition.toLowerCase() }
                />
                <RequestRectangle
                    districtPosition    =   { districtPosition.toLowerCase() }
                />
                <RequestRectangle
                    districtPosition    =   { districtPosition.toLowerCase() }
                />

                <RequestRectangle
                    districtPosition    =   { districtPosition.toLowerCase() }
                />
                <RequestRectangle
                    districtPosition    =   { districtPosition.toLowerCase() }
                />
                <RequestRectangle
                    districtPosition    =   { districtPosition.toLowerCase() }
                />
                </ReqRectContainer>


        </InnerContainer>
      </Container>
  ); //end return statement
}; //end TransferToITModal()

export default ViewRequestsModal;