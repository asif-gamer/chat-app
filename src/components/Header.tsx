// @import dependencies
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// @import json

// @import components

//@import Utils

const Header = () => {
  const navigate = useNavigate();

  // State variables

  const [isDropdownModalOpen, setIsDropdownModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <>
      <div className="gradient-border z-10 border-b-[2px] fixed top-0 left-0  flex flex-row items-center justify-between w-full h-[60px] bg-[#141517] py-3 px-10">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img className="h-8 w-8" src="/src/assets/logo.svg" />
        </div>
        {/* Search and add icons*/}
        <div className="flex flex-row  gap-[10px] w-[616px] h-8 ms-[190px]">
          {/* search bar */}
          <div
            style={{
              boxShadow: false
                ? "0px 0px 8px 2px #2A85FF99"
                : "0px 8px 64px 0px #0000001A",
              width: true ? "616px" : "532px",
            }}
            className={`${
              false ? "border-typo-blue border-[2px]" : ""
            } flex flex-row h-9 bg-[#2B2E30] space-x-5 items-center py-2.5 px-6  rounded-[18px]`}
          >
            <img className="h-5 w-5" src="/src/assets/search-icon.svg" />
            <input className="outline-none bg-transparent w-full text-typo-secondary" />
          </div>
          {/* add icon */}
          {!isDropdownModalOpen && (
            <div
              onClick={() => navigate("/")}
              className="h-9 flex items-center justify-center w-[72px] rounded-[18px] bg-[#2B2E30] py-2 px-4 cursor-pointer"
            >
              <img className="h-5 w-5" src="/src/assets/plus.svg" />
            </div>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex flex-row items-center justify-end w-[224px] h-9 gap-[32px]">
          <div className="flex flex-row items-center gap-[8px]">
            <div className="bg-[#2b2e30] h-[32px] w-[32px] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/chat.svg"
                alt="chat"
                className="h-[24px] w-[24px] "
              />
            </div>
            <div className="bg-[#2b2e30] h-[32px] w-[32px] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/group.svg"
                alt="chat"
                className="h-[24px] w-[24px]"
              />
            </div>
            <div className="bg-[#2b2e30] h-[32px] w-[32px] rounded-full flex items-center justify-center">
              <img
                src="/src/assets/notification.svg"
                alt="chat"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
          <img
            src="/src/assets/profilePicture.svg"
            alt="profile"
            className="h-[32px] w-[32px] rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Search modal open */}
      {isDropdownModalOpen && (
        <div
          onClick={() => {
            setIsDropdownModalOpen(false);
          }}
          className="fixed z-10 bg-opacity-[60%] backdrop-blur-3xl bg-black inset-0 flex justify-center items-start mt-[60px]"
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className="flex flex-col rounded-[16px] bg-gradient-to-tl from-[#252525] from-[70%] to-gray-600 mt-4 ms-[49px]"
          >
            <div className="w-[616px] h-[324px] flex flex-col bg-[#252525]  bg-opacity-[100%]  rounded-[16px] mt-[1px] ml-[1px] gap-[16px] bg-[url('/assets/svg/Noise1.svg')] bg-no-repeat">
              <div className="flex flex-col px-[24px] py-[24px] gap-[20px]">
                <div className="flex flex-row items-center justify-between">
                  <h5 className="text-[14px] font-semibold text-typo-secondary">
                    Recent
                  </h5>
                </div>
                <div className="flex flex-col h-[240px] overflow-y-scroll">
                  {/* render */}

                  <div className="h-full w-full flex items-center justify-center">
                    <h5 className="text-sm font-semibold text-typo-light">
                      No recent searches.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isProfileModalOpen && (
        <div
          onClick={() => setIsProfileModalOpen(false)}
          className="fixed z-10 inset-0 bg-opacity-[10%]  bg-black flex justify-end items-start mt-[60px]"
        >
          <div className="bg-gradient-to-tl from-[#252525] me-[30px] from-[70%] to-gray-600 rounded-[16px] mt-3">
            <div className="bg-[#252525] bg-opacity-[100%] ml-[1px] mt-[1px]  rounded-[16px]">
              <div className="flex flex-col rounded-[16px] bg-[url('/assets/svg/Noise.svg')] bg-no-repeat bg-cover bg-center">
                <div className="w-[274px] h-[426px] flex flex-col py-[12px] px-[8px]">
                  {/* Avatar and Name name */}
                  <div
                    onClick={() => {
                      navigate("/");
                    }}
                    className="flex flex-row w-full h-[70px] items-center cursor-pointer hover:bg-[#2B2E30] py-[12px] px-[16px] gap-4 border-b-[1px] border-[#373A3D] rounded-lg mb-[2px]"
                  >
                    <img
                      src={"/src/assets/profilePicture.svg"}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col items-start gap-[4px]">
                      <h5 className="typo-semibold truncate w-40">Asif</h5>
                      <h5 className="typo-normal truncate w-40">@asif</h5>
                    </div>
                  </div>

                  {/* Web download */}
                  {/* <div className="w-full h-[48px] bg-[url('/assets/svg/webAppDownload.svg')] bg-no-repeat bg-cover bg-center rounded-lg mb-2"></div> */}

                  {/* nav buttons */}
                  <div className="flex flex-col w-full h-[320px] gap-[2px] cursor-pointer">
                    <div
                      className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                      onClick={() => navigate("/")}
                    >
                      <img
                        src="/assets/svg/themesIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Themes
                      </h5>
                    </div>
                    <div
                      onClick={() => navigate("/")}
                      className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                    >
                      <img
                        src="/assets/svg/walletIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Wallets
                      </h5>
                    </div>
                    {/* <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                      <img
                        src="/assets/svg/dashboardIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Dashboard
                      </h5>
                    </div> */}
                    <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                      <img
                        src="/assets/svg/heartIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Saved
                      </h5>
                    </div>
                    <div
                      onClick={() => navigate("/")}
                      className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                    >
                      <img
                        src="/assets/svg/draftIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Draft
                      </h5>
                    </div>
                    <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                      <img
                        src="/assets/svg/feedbackIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Give Feedback
                      </h5>
                    </div>
                    <div className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]">
                      <img
                        src="/assets/svg/helpAndSupport.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Help Center
                      </h5>
                    </div>
                    <div
                      onClick={() => navigate("/")}
                      className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                    >
                      <img
                        src="/assets/svg/settingsIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Settings
                      </h5>
                    </div>
                    <div
                      onClick={() => navigate("/")}
                      className="flex flex-row items-center py-2 px-3 gap-[14px] hover:bg-[#2B2E30] rounded-[8px]"
                    >
                      <img
                        src="/assets/svg/logoutIcon.svg"
                        className="h-6 w-6"
                      />
                      <h5 className="text-[14px] font-semibold text-typo-secondary">
                        Logout
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
