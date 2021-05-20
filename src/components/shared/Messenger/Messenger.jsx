import s from "./Messenger.module.scss";
import vk from "../../../assets/img/message/vk.svg";

export const Messenger = () => {
  return (
    <>
      <div className={s.mainMessengers}>
        <a
          href="https://vk.com/idyoung_punk"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img src={vk} className={s.mainMessengersVk} alt="" />
        </a>

        <a
          href="https://www.viber.com/ru/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="17" r="17" fill="#65429F"></circle>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.7452 8.46066C25.1573 7.91903 22.7789 6.19313 17.4847 6.16928C17.4847 6.16928 11.2392 5.79322 8.19571 8.58554C6.50208 10.2806 5.90573 12.7586 5.84259 15.8343C5.77945 18.9101 5.69806 24.6715 11.2518 26.2333L11.2574 26.2347L11.2546 28.6187C11.2546 28.6187 11.2196 29.5841 11.8538 29.7805C12.6227 30.019 13.0746 29.2852 13.8084 28.4952C14.2111 28.0616 14.7668 27.4232 15.1863 26.9363C18.9847 27.2548 21.9061 26.5251 22.2387 26.4171C23.0062 26.1673 27.3448 25.6117 28.0506 19.8516C28.7789 13.9106 27.6984 10.1543 25.7452 8.46066ZM26.3879 19.4223C25.7915 24.2323 22.2724 24.5368 21.6241 24.7445C21.3477 24.8329 18.7813 25.4713 15.5554 25.2609C15.5554 25.2609 13.1503 28.1612 12.3996 28.9161C12.2832 29.034 12.1456 29.0817 12.053 29.0593C11.9239 29.027 11.8875 28.874 11.8903 28.6509L11.9099 24.6884C7.21209 23.3834 7.48571 18.4793 7.53903 15.9115C7.59235 13.3437 8.07504 11.2389 9.50768 9.82455C12.0825 7.49247 17.3865 7.84046 17.3865 7.84046C21.8654 7.8601 24.0123 9.20996 24.5104 9.66178C26.162 11.0762 27.0039 14.462 26.3879 19.4223ZM17.9337 19.7113C17.9337 19.7113 18.3547 19.7478 18.5806 19.4672L19.0226 18.9115C19.2359 18.6365 19.7509 18.4597 20.2546 18.7403C20.9211 19.1164 21.7841 19.7085 22.3748 20.26C22.7003 20.535 22.7761 20.9391 22.5544 21.3657L22.5516 21.3741C22.3243 21.7782 22.0184 22.1556 21.6325 22.5064L21.6241 22.5135C21.1905 22.8755 20.691 23.086 20.1564 22.912L20.1466 22.8979C19.1882 22.6271 16.8884 21.4541 15.4221 20.2852C13.024 18.3923 11.3206 15.2717 10.8477 13.5991L10.8337 13.5893C10.6597 13.0533 10.8716 12.5537 11.2322 12.1215L11.2392 12.1131C11.5914 11.7273 11.9689 11.4228 12.3716 11.194L12.38 11.1926C12.8065 10.9695 13.2107 11.0453 13.4857 11.3708C13.8477 11.7455 14.5282 12.6449 15.0053 13.491C15.286 13.9948 15.1106 14.5097 14.8341 14.723L14.2785 15.165C13.9978 15.3909 14.0343 15.8119 14.0343 15.8119C14.0343 15.8119 14.8566 18.9255 17.9337 19.7113ZM22.7761 17.1295C22.9417 17.1281 23.075 16.9934 23.0736 16.8278C23.0581 14.8577 22.4548 13.2764 21.2803 12.13C20.1087 10.9878 18.6325 10.4027 16.894 10.39C16.7298 10.39 16.5937 10.5219 16.5923 10.6875C16.5923 10.8531 16.7242 10.9878 16.8898 10.9892C18.4684 11.0004 19.8056 11.528 20.8622 12.5593C21.9188 13.5893 22.4604 15.0275 22.4744 16.8334C22.4758 16.9976 22.6091 17.1295 22.7733 17.1295H22.7761ZM21.2003 16.5149H21.1933C21.0277 16.5107 20.8972 16.3746 20.9015 16.209C20.9239 15.1847 20.632 14.3568 20.0076 13.6749C19.386 12.9957 18.5329 12.6239 17.3977 12.5411C17.2336 12.5285 17.1087 12.3853 17.1213 12.2212C17.1339 12.0556 17.2771 11.9321 17.4412 11.9433C18.7181 12.0374 19.7298 12.4836 20.4496 13.2707C21.1723 14.0593 21.5259 15.0528 21.4992 16.2216C21.4964 16.3858 21.3631 16.5149 21.2003 16.5149ZM19.6639 15.9999C19.5053 15.9999 19.3734 15.875 19.365 15.7151C19.3145 14.6992 18.836 14.201 17.858 14.1491C17.6938 14.1393 17.5661 13.999 17.5759 13.8334C17.5844 13.6692 17.7247 13.5416 17.8902 13.5514C19.1798 13.6201 19.8968 14.3582 19.9627 15.6856C19.9712 15.8512 19.8449 15.9915 19.6793 15.9999H19.6639Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=79523937537"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="34" fill="#00B14E"></rect>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.5994 9.58236C22.6828 7.66183 20.1339 6.60371 17.4184 6.60254C11.823 6.60254 7.26896 11.1602 7.26671 16.7623C7.26603 18.553 7.73339 20.3009 8.62181 21.8418L7.18164 27.1068L12.5631 25.6939C14.0459 26.5033 15.7153 26.9301 17.4143 26.9306H17.4185C23.0133 26.9306 27.5677 22.3723 27.5701 16.7702C27.571 14.0555 26.516 11.5028 24.5994 9.58236ZM17.4185 25.2147H17.4151C15.9011 25.2141 14.4161 24.807 13.1206 24.0375L12.8125 23.8546L9.61903 24.693L10.4714 21.5767L10.2708 21.257C9.42623 19.9126 8.98006 18.3586 8.98075 16.7628C8.9826 12.1066 12.7677 8.31856 17.4219 8.31856C19.6755 8.31934 21.7941 9.19886 23.3871 10.7952C24.9801 12.3915 25.8568 14.5132 25.8559 16.7697C25.8541 21.4263 22.069 25.2147 17.4185 25.2147ZM22.0466 18.8898C21.793 18.7628 20.546 18.1486 20.3135 18.0638C20.081 17.9793 19.9118 17.9368 19.7428 18.191C19.5737 18.4452 19.0875 19.0169 18.9395 19.1865C18.7915 19.3558 18.6436 19.3771 18.39 19.2499C18.1363 19.1229 17.3191 18.8548 16.3502 17.9898C15.5961 17.3167 15.0871 16.4853 14.9391 16.2311C14.7911 15.9769 14.9233 15.8396 15.0503 15.713C15.1644 15.5992 15.304 15.4164 15.4309 15.2682C15.5577 15.12 15.5999 15.014 15.6845 14.8446C15.7691 14.6752 15.7268 14.5269 15.6633 14.3999C15.5999 14.2727 15.0926 13.0231 14.8813 12.5148C14.6754 12.0198 14.4663 12.0868 14.3106 12.079C14.1628 12.0716 13.9935 12.07 13.8244 12.07C13.6553 12.07 13.3805 12.1335 13.148 12.3877C12.9155 12.6418 12.2603 13.2561 12.2603 14.5057C12.2603 15.7553 13.1691 16.9624 13.296 17.1319C13.4227 17.3013 15.0846 19.8656 17.6291 20.9653C18.2341 21.2269 18.7067 21.383 19.0751 21.5002C19.6828 21.6934 20.2357 21.6661 20.6727 21.6008C21.1601 21.5278 22.1734 20.9866 22.3848 20.3936C22.5961 19.8005 22.5961 19.2921 22.5327 19.1863C22.4694 19.0805 22.3003 19.0169 22.0466 18.8898Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
};
