export function Conversation() {
  return (
    <div className="relative flex-1 overflow-hidden overflow-y-auto">
      <div className="relative h-full">
        <div className="scrollbar-gutter-stable w-full h-full overflow-y-auto">
          <div className="flex flex-col pb-9 dark:bg-transparent">
            <div>
              <MockConvo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockConvo() {
  return (
    <>
      <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
        <div className="m-auto justify-center p-4 py-2 md:gap-6">
          <div
            id="1e2b67ee-3175-4374-a096-188d7aa6d057"
            aria-label="message-0-1e2b67ee-3175-4374-a096-188d7aa6d057"
            className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render"
          >
            <div className="relative flex flex-shrink-0 flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                <div
                  title="sohudfo§"
                  className="relative flex items-center justify-center"
                  style={{ width: "28.8px", height: "28.8px" }}
                >
                  <img
                    className="rounded-full"
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EInitials%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EDiceBear%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3E%E2%80%9EInitials%E2%80%9D%20(https%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear)%20by%20%E2%80%9EDiceBear%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC0%201.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%2300897b%22%20width%3D%22100%22%20height%3D%22100%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Verdana%22%20font-size%3D%2236%22%20font-weight%3D%22400%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dy%3D%2212.816%22%3ESO%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex w-11/12 flex-col user-turn">
              <h2 className="select-none font-semibold text-base">sohudfo§</h2>
              <div className="flex flex-col gap-1">
                <div className="flex max-w-full flex-grow flex-col gap-0">
                  <div
                    className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5"
                    dir="auto"
                  >
                    <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                      <p className="mb-2 whitespace-pre-wrap">hello model</p>
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex justify-start gap-3 empty:hidden lg:flex text-xs">
                  <div className="group visible flex justify-center gap-0.5 self-end focus-within:outline-none lg:justify-start">
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Read aloud"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        width="1em"
                        className="icon-md-heavy h-[18px] w-[18px]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <audio
                      controls=""
                      preload="none"
                      controlslist="nodownload nofullscreen noremoteplayback"
                      id="audio-1e2b67ee-3175-4374-a096-188d7aa6d057"
                      autoPlay=""
                      src="http://localhost:3090/"
                      style={{
                        position: "absolute",
                        overflow: "hidden",
                        display: "none",
                        height: 0,
                        width: 0,
                      }}
                    />
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none ml-0 flex items-center gap-1.5 text-xs"
                      type="button"
                      title="Copy to clipboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={19}
                        width={19}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-md-heavy"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      id="edit-1e2b67ee-3175-4374-a096-188d7aa6d057"
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Edit"
                    >
                      <svg
                        fill="none"
                        strokeWidth={2}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height={19}
                        width={19}
                        className="icon-md"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4783 6.06414 21.4783 8.93588 19.7071 10.7071L18.7073 11.7069L11.1603 19.2539C10.7182 19.696 10.1489 19.989 9.53219 20.0918L4.1644 20.9864C3.84584 21.0395 3.52125 20.9355 3.29289 20.7071C3.06453 20.4788 2.96051 20.1542 3.0136 19.8356L3.90824 14.4678C4.01103 13.8511 4.30396 13.2818 4.7461 12.8397L13.2929 4.29291ZM13 7.41422L6.16031 14.2539C6.01293 14.4013 5.91529 14.591 5.88102 14.7966L5.21655 18.7835L9.20339 18.119C9.40898 18.0847 9.59872 17.9871 9.7461 17.8397L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      aria-label="Fork"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={19}
                        height={19}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-git-fork"
                      >
                        <circle cx={12} cy={18} r={3} />
                        <circle cx={6} cy={6} r={3} />
                        <circle cx={18} cy={6} r={3} />
                        <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                        <path d="M12 12v3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
          <div
            id="04202ae4-b6b3-43b3-a179-b8984a31d010"
            aria-label="message-1-04202ae4-b6b3-43b3-a179-b8984a31d010"
            className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render"
          >
            <div className="relative flex flex-shrink-0 flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                <div
                  title="Gemini"
                  className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white"
                  style={{
                    background: "transparent",
                    width: "28.8px",
                    height: "28.8px",
                  }}
                >
                  <svg
                    width="20.16"
                    height="20.16"
                    className=""
                    viewBox="0 0 18 18"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      fill="url(#_4rif_paint0_radial_897_42)"
                      d="M9 18c0-1.245-.24-2.415-.72-3.51a8.934 8.934 0 00-1.912-2.857A8.934 8.934 0 003.51 9.72 8.646 8.646 0 000 9a8.886 8.886 0 003.51-.697 9.247 9.247 0 002.857-1.936A8.934 8.934 0 008.28 3.51C8.76 2.415 9 1.245 9 0c0 1.245.232 2.415.697 3.51a9.247 9.247 0 001.936 2.857 9.247 9.247 0 002.857 1.936A8.886 8.886 0 0018 9c-1.245 0-2.415.24-3.51.72a8.934 8.934 0 00-2.857 1.912 9.247 9.247 0 00-1.935 2.858A8.886 8.886 0 009 18z"
                    />
                    <defs>
                      <radialGradient
                        id="_4rif_paint0_radial_897_42"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(135 9 3.728) scale(25.4558 12.7279)"
                      >
                        <stop offset=".325" stopColor="#FFDDB7" />
                        <stop offset=".706" stopColor="#076EFF" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex w-11/12 flex-col agent-turn">
              <h2 className="select-none font-semibold text-base">Gemini</h2>
              <div className="flex flex-col gap-1">
                <div className="flex max-w-full flex-grow flex-col gap-0">
                  <div className="mb-5">
                    <button
                      type="button"
                      className="group mt-3 flex w-fit items-center justify-center rounded-xl bg-surface-tertiary px-3 py-2 text-xs leading-[18px] animate-thinking-appear"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-atom mr-1.5 text-text-secondary"
                      >
                        <circle cx={12} cy={12} r={1} />
                        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                      </svg>
                      Thoughts
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down icon-sm ml-1.5 transform-gpu text-text-primary transition-transform duration-200 rotate-180"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="grid transition-all duration-300 ease-out mb-8"
                    style={{ gridTemplateRows: "1fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="relative pl-3 text-text-secondary">
                        <div className="absolute left-0 h-[calc(100%)] border-l-2 border-border-medium dark:border-border-heavy" />
                        <p className="whitespace-pre-wrap leading-[26px]">
                          **Processing a Simple Greeting** I've registered the
                          user's initial greeting. I'm focusing on the first
                          step: responding in a friendly and useful way. I've
                          identified the need to acknowledge the "hello" and
                          then concisely explain my purpose as an AI. I'm
                          working on the best phrasing to be both welcoming and
                          informative. **Defining the Response Strategy** I'm
                          now prioritizing the response. I've narrowed it down
                          to acknowledging the user with a greeting, and then
                          clarifying my role as an AI with an offer of
                          assistance. The aim is a concise, welcoming
                          interaction. I'm focusing on the tone – I want to be
                          friendly and helpful from the outset.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5"
                    dir="auto"
                  >
                    <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                      <p className="mb-2 whitespace-pre-wrap">
                        Hello! How can I help you today?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
        <div className="m-auto justify-center p-4 py-2 md:gap-6">
          <div
            id="9ba3e0f7-aec8-42ee-b51c-5d8d5ff54c26"
            aria-label="message-2-9ba3e0f7-aec8-42ee-b51c-5d8d5ff54c26"
            className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render"
          >
            <div className="relative flex flex-shrink-0 flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                <div
                  title="sohudfo§"
                  className="relative flex items-center justify-center"
                  style={{ width: "28.8px", height: "28.8px" }}
                >
                  <img
                    className="rounded-full"
                    src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cmetadata%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Adcterms%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%22%3E%3Crdf%3ARDF%3E%3Crdf%3ADescription%3E%3Cdc%3Atitle%3EInitials%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3EDiceBear%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear%3C%2Fdc%3Asource%3E%3Cdcterms%3Alicense%20xsi%3Atype%3D%22dcterms%3AURI%22%3Ehttps%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F%3C%2Fdcterms%3Alicense%3E%3Cdc%3Arights%3E%E2%80%9EInitials%E2%80%9D%20(https%3A%2F%2Fgithub.com%2Fdicebear%2Fdicebear)%20by%20%E2%80%9EDiceBear%E2%80%9D%2C%20licensed%20under%20%E2%80%9ECC0%201.0%E2%80%9D%20(https%3A%2F%2Fcreativecommons.org%2Fpublicdomain%2Fzero%2F1.0%2F)%3C%2Fdc%3Arights%3E%3C%2Frdf%3ADescription%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22viewboxMask%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%20%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23viewboxMask)%22%3E%3Crect%20fill%3D%22%2300897b%22%20width%3D%22100%22%20height%3D%22100%22%20x%3D%220%22%20y%3D%220%22%20%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Verdana%22%20font-size%3D%2236%22%20font-weight%3D%22400%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%20dy%3D%2212.816%22%3ESO%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex w-11/12 flex-col user-turn">
              <h2 className="select-none font-semibold text-base">sohudfo§</h2>
              <div className="flex flex-col gap-1">
                <div className="flex max-w-full flex-grow flex-col gap-0">
                  <div
                    className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5"
                    dir="auto"
                  >
                    <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-20">
                      <p className="mb-2 whitespace-pre-wrap">more text</p>
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex justify-start gap-3 empty:hidden lg:flex text-xs">
                  <div className="group visible flex justify-center gap-0.5 self-end focus-within:outline-none lg:justify-start">
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Read aloud"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        width="1em"
                        className="icon-md-heavy h-[18px] w-[18px]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none ml-0 flex items-center gap-1.5 text-xs"
                      type="button"
                      title="Copy to clipboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={19}
                        width={19}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-md-heavy"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      id="edit-9ba3e0f7-aec8-42ee-b51c-5d8d5ff54c26"
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Edit"
                    >
                      <svg
                        fill="none"
                        strokeWidth={2}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height={19}
                        width={19}
                        className="icon-md"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4783 6.06414 21.4783 8.93588 19.7071 10.7071L18.7073 11.7069L11.1603 19.2539C10.7182 19.696 10.1489 19.989 9.53219 20.0918L4.1644 20.9864C3.84584 21.0395 3.52125 20.9355 3.29289 20.7071C3.06453 20.4788 2.96051 20.1542 3.0136 19.8356L3.90824 14.4678C4.01103 13.8511 4.30396 13.2818 4.7461 12.8397L13.2929 4.29291ZM13 7.41422L6.16031 14.2539C6.01293 14.4013 5.91529 14.591 5.88102 14.7966L5.21655 18.7835L9.20339 18.119C9.40898 18.0847 9.59872 17.9871 9.7461 17.8397L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      aria-label="Fork"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={19}
                        height={19}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-git-fork"
                      >
                        <circle cx={12} cy={18} r={3} />
                        <circle cx={6} cy={6} r={3} />
                        <circle cx={18} cy={6} r={3} />
                        <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                        <path d="M12 12v3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-token-text-primary w-full border-0 bg-transparent dark:border-0 dark:bg-transparent">
        <div className="m-auto justify-center p-4 py-2 md:gap-6 ">
          <div
            id="c6c6d48a-237e-4c45-be83-6170ac019dbd"
            aria-label="message-3-c6c6d48a-237e-4c45-be83-6170ac019dbd"
            className="group mx-auto flex flex-1 gap-3 transition-all duration-300 transform-gpu md:max-w-[47rem] xl:max-w-[55rem] focus:outline-none focus:ring-2 focus:ring-border-xheavy message-render"
          >
            <div className="relative flex flex-shrink-0 flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full">
                <div
                  title="Gemini"
                  className="relative flex h-9 w-9 items-center justify-center rounded-sm p-1 text-white"
                  style={{
                    background: "transparent",
                    width: "28.8px",
                    height: "28.8px",
                  }}
                >
                  <svg
                    width="20.16"
                    height="20.16"
                    className=""
                    viewBox="0 0 18 18"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      fill="url(#_4rif_paint0_radial_897_42)"
                      d="M9 18c0-1.245-.24-2.415-.72-3.51a8.934 8.934 0 00-1.912-2.857A8.934 8.934 0 003.51 9.72 8.646 8.646 0 000 9a8.886 8.886 0 003.51-.697 9.247 9.247 0 002.857-1.936A8.934 8.934 0 008.28 3.51C8.76 2.415 9 1.245 9 0c0 1.245.232 2.415.697 3.51a9.247 9.247 0 001.936 2.857 9.247 9.247 0 002.857 1.936A8.886 8.886 0 0018 9c-1.245 0-2.415.24-3.51.72a8.934 8.934 0 00-2.857 1.912 9.247 9.247 0 00-1.935 2.858A8.886 8.886 0 009 18z"
                    />
                    <defs>
                      <radialGradient
                        id="_4rif_paint0_radial_897_42"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(135 9 3.728) scale(25.4558 12.7279)"
                      >
                        <stop offset=".325" stopColor="#FFDDB7" />
                        <stop offset=".706" stopColor="#076EFF" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative flex w-11/12 flex-col agent-turn">
              <h2 className="select-none font-semibold text-base">Gemini</h2>
              <div className="flex flex-col gap-1">
                <div className="flex max-w-full flex-grow flex-col gap-0">
                  <div className="mb-5">
                    <button
                      type="button"
                      className="group mt-3 flex w-fit items-center justify-center rounded-xl bg-surface-tertiary px-3 py-2 text-xs leading-[18px] animate-thinking-appear"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-atom mr-1.5 text-text-secondary"
                      >
                        <circle cx={12} cy={12} r={1} />
                        <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                        <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                      </svg>
                      Thoughts
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down icon-sm ml-1.5 transform-gpu text-text-primary transition-transform duration-200 rotate-180"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="grid transition-all duration-300 ease-out mb-8"
                    style={{ gridTemplateRows: "1fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="relative pl-3 text-text-secondary">
                        <div className="absolute left-0 h-[calc(100%)] border-l-2 border-border-medium dark:border-border-heavy" />
                        <p className="whitespace-pre-wrap leading-[26px]">
                          **Requesting Clarity Now** I'm currently focused on
                          determining the best response to "more text." The
                          user's request is broad, and without more context,
                          it's hard to generate relevant content. I'm leaning
                          towards asking for clarification. This could involve
                          requesting specifics about the desired type, format,
                          or topic of the "more text" they are after. This
                          approach will help me tailor the response more
                          accurately and satisfy the user's need. **Refining
                          Response Strategy** I've decided to refine my
                          response. Initially, I thought about asking for
                          clarification or providing generic text, but now I'm
                          leaning toward a hybrid approach. I'll acknowledge the
                          request for "more text" and then offer some examples
                          of what I can generate. This serves two purposes:
                          providing relevant text and guiding the user towards
                          more specific requests in future interactions. This is
                          similar to the approach of offering the user a menu of
                          choices so that the user can pick from choices that
                          are available.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-message flex min-h-[20px] flex-col items-start gap-3 overflow-visible [.text-message+&]:mt-5"
                    dir="auto"
                  >
                    <div className="markdown prose message-content dark:prose-invert light w-full break-words dark:text-gray-100">
                      <p className="mb-2 whitespace-pre-wrap">
                        Certainly! I can provide more text in many different
                        ways.
                      </p>
                      <p className="mb-2 whitespace-pre-wrap">
                        Would you like:
                      </p>
                      <ul>
                        <li>
                          <strong>A continuation of our conversation?</strong>{" "}
                          (e.g., asking what you'd like to discuss)
                        </li>
                        <li>
                          <strong>
                            A short story or creative writing piece?
                          </strong>{" "}
                          (e.g., about a specific topic, genre, or character)
                        </li>
                        <li>
                          <strong>
                            Information or an explanation about a topic?
                          </strong>{" "}
                          (e.g., a historical event, a scientific concept, how
                          to do something)
                        </li>
                        <li>
                          <strong>A poem or lyrics?</strong>
                        </li>
                        <li>
                          <strong>A list of ideas or suggestions?</strong>
                        </li>
                        <li>
                          <strong>Just a random, interesting fact?</strong>
                        </li>
                      </ul>
                      <p className="mb-2 whitespace-pre-wrap">
                        Or something else entirely? Let me know what kind of
                        text you're looking for!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-1 flex justify-start gap-3 empty:hidden lg:flex text-xs">
                  <div className="group visible flex justify-center gap-0.5 self-end focus-within:outline-none lg:justify-start">
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Read aloud"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        width="1em"
                        className="icon-md-heavy h-[18px] w-[18px]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none ml-0 flex items-center gap-1.5 text-xs"
                      type="button"
                      title="Copy to clipboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={19}
                        width={19}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-md-heavy"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      id="edit-c6c6d48a-237e-4c45-be83-6170ac019dbd"
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none active"
                      type="button"
                      title="Edit"
                    >
                      <svg
                        fill="none"
                        strokeWidth={2}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height={19}
                        width={19}
                        className="icon-md"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4783 6.06414 21.4783 8.93588 19.7071 10.7071L18.7073 11.7069L11.1603 19.2539C10.7182 19.696 10.1489 19.989 9.53219 20.0918L4.1644 20.9864C3.84584 21.0395 3.52125 20.9355 3.29289 20.7071C3.06453 20.4788 2.96051 20.1542 3.0136 19.8356L3.90824 14.4678C4.01103 13.8511 4.30396 13.2818 4.7461 12.8397L13.2929 4.29291ZM13 7.41422L6.16031 14.2539C6.01293 14.4013 5.91529 14.591 5.88102 14.7966L5.21655 18.7835L9.20339 18.119C9.40898 18.0847 9.59872 17.9871 9.7461 17.8397L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      aria-label="Fork"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={19}
                        height={19}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-git-fork"
                      >
                        <circle cx={12} cy={18} r={3} />
                        <circle cx={6} cy={6} r={3} />
                        <circle cx={18} cy={6} r={3} />
                        <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                        <path d="M12 12v3" />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Love this"
                      aria-pressed="false"
                      aria-haspopup="menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={19}
                        width={19}
                        fill="none"
                        viewBox="0 0 24 24"
                        className=""
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.1318 2.50389C12.3321 2.15338 12.7235 1.95768 13.124 2.00775L13.5778 2.06447C16.0449 2.37286 17.636 4.83353 16.9048 7.20993L16.354 8.99999H17.0722C19.7097 8.99999 21.6253 11.5079 20.9313 14.0525L19.5677 19.0525C19.0931 20.7927 17.5124 22 15.7086 22H6C4.34315 22 3 20.6568 3 19V12C3 10.3431 4.34315 8.99999 6 8.99999H8C8.25952 8.99999 8.49914 8.86094 8.6279 8.63561L12.1318 2.50389ZM10 20H15.7086C16.6105 20 17.4008 19.3964 17.6381 18.5262L19.0018 13.5262C19.3488 12.2539 18.391 11 17.0722 11H15C14.6827 11 14.3841 10.8494 14.1956 10.5941C14.0071 10.3388 13.9509 10.0092 14.0442 9.70591L14.9932 6.62175C15.3384 5.49984 14.6484 4.34036 13.5319 4.08468L10.3644 9.62789C10.0522 10.1742 9.56691 10.5859 9 10.8098V19C9 19.5523 9.44772 20 10 20ZM7 11V19C7 19.3506 7.06015 19.6872 7.17071 20H6C5.44772 20 5 19.5523 5 19V12C5 11.4477 5.44772 11 6 11H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
                      type="button"
                      title="Needs improvement"
                      aria-pressed="false"
                      aria-haspopup="menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={19}
                        width={19}
                        fill="none"
                        viewBox="0 0 24 24"
                        className=""
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8727 21.4961C11.6725 21.8466 11.2811 22.0423 10.8805 21.9922L10.4267 21.9355C7.95958 21.6271 6.36855 19.1665 7.09975 16.7901L7.65054 15H6.93226C4.29476 15 2.37923 12.4921 3.0732 9.94753L4.43684 4.94753C4.91145 3.20728 6.49209 2 8.29589 2H18.0045C19.6614 2 21.0045 3.34315 21.0045 5V12C21.0045 13.6569 19.6614 15 18.0045 15H16.0045C15.745 15 15.5054 15.1391 15.3766 15.3644L11.8727 21.4961ZM14.0045 4H8.29589C7.39399 4 6.60367 4.60364 6.36637 5.47376L5.00273 10.4738C4.65574 11.746 5.61351 13 6.93226 13H9.00451C9.32185 13 9.62036 13.1506 9.8089 13.4059C9.99743 13.6612 10.0536 13.9908 9.96028 14.2941L9.01131 17.3782C8.6661 18.5002 9.35608 19.6596 10.4726 19.9153L13.6401 14.3721C13.9523 13.8258 14.4376 13.4141 15.0045 13.1902V5C15.0045 4.44772 14.5568 4 14.0045 4ZM17.0045 13V5C17.0045 4.64937 16.9444 4.31278 16.8338 4H18.0045C18.5568 4 19.0045 4.44772 19.0045 5V12C19.0045 12.5523 18.5568 13 18.0045 13H17.0045Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      className="hover-button rounded-lg p-1.5 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none active"
                      type="button"
                      title="Regenerate"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={19}
                        width={19}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-md-heavy"
                      >
                        <path
                          fill="currentColor"
                          d="M3.07 10.876C3.623 6.436 7.41 3 12 3a9.15 9.15 0 0 1 6.012 2.254V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.957A7.15 7.15 0 0 0 12 5a7 7 0 0 0-6.946 6.124 1 1 0 1 1-1.984-.248m16.992 1.132a1 1 0 0 1 .868 1.116C20.377 17.564 16.59 21 12 21a9.15 9.15 0 0 1-6-2.244V20a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.043A7.15 7.15 0 0 0 12 19a7 7 0 0 0 6.946-6.124 1 1 0 0 1 1.116-.868"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
