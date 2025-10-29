interface MessageActionsProps {
  messageId: string;
  isUser?: boolean;
  isStreaming?: boolean;
}

export function MessageActions({ messageId, isUser = false, isStreaming = false }: MessageActionsProps) {
  // Don't show buttons for assistant messages while streaming
  if (!isUser && isStreaming) {
    return null;
  }
  
  if (isUser) {
    return (
      <div className="mt-1 flex justify-start gap-3 empty:hidden lg:flex text-xs">
        <div className="group visible flex justify-center gap-0.5 self-end focus-within:outline-none lg:justify-start">
          <button
            className="hover-button rounded-full p-2 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover bg-surface-secondary  focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
            preload="none"
            id={`audio-${messageId}`}
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
            className="hover-button rounded-full p-2 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover bg-surface-secondary  focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none ml-0 flex items-center gap-1.5 text-xs"
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
            id={`edit-${messageId}`}
            className="hover-button rounded-full p-2 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover bg-surface-secondary  focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
            className="hover-button rounded-full p-2 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover bg-surface-secondary  focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
    );
  }

  return (
    <div className="mt-1 flex justify-start gap-3 empty:hidden lg:flex text-xs">
      <div className="group visible flex justify-center gap-0.5 self-end focus-within:outline-none lg:justify-start">
        <button
          className="hover-button rounded-full p-2 text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover bg-surface-secondary md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
          className="hover-button rounded-full p-2 bg-surface-secondary text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none ml-0 flex items-center gap-1.5 text-xs"
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
          id={`edit-${messageId}`}
          className="hover-button rounded-full p-2 bg-surface-secondary text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none active"
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
          className="hover-button rounded-full p-2 bg-surface-secondary text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
          className="hover-button rounded-full p-2 bg-surface-secondary text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
          className="hover-button rounded-full p-2 bg-surface-secondary text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none"
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
          className="hover-button rounded-full p-2 bg-surface-secondary text-text-secondary-alt transition-colors duration-200 hover:text-text-primary hover:bg-surface-hover md:group-hover:visible md:group-focus-within:visible md:group-[.final-completion]:visible focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:outline-none active"
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
  );
}
