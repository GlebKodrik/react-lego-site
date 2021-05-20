import s from "./Footer.module.scss";
import { Form, Input } from "antd";
import cn from "classnames";
import { Messenger } from "../shared/Messenger/Messenger";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import Payment from "../shared/Payment/Payment";

const validateMessages = {
  required: "Обязательное поле!",
  types: {
    email: "Неккоректный email!",
  },
};

export const FooterItem = () => {
  const [form] = Form.useForm();

  return (
    <>
      <div className={s.subscribe}>
        <div className="container">
          <p>Подписывайся на рассылку</p>
          <Form
            form={form}
            validateMessages={validateMessages}
            className={s.subscribeForm}
            onFinish={(values) => {
              console.log(values);
              form.resetFields();
            }}
          >
            <div>
              <Form.Item
                style={{ width: 340 }}
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Ваш e-mail" />
              </Form.Item>
            </div>

            <Form.Item>
              <button type="submit" className={cn("button", s.button)}>
                Отправить
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className={"container"}>
        <div className={s.content}>
          <div className={s.contact}>
            <div className={s.contactPhone}>
              <button className={cn("button", s.contactPhoneButton)}>
                <a href="tel:8 (800) 700-31-10">8 (800) 700-31-10</a>
              </button>
              <div className={s.contactPhoneSub}>
                9:00 — 22:00, ежедневно
                <br />
                (время московское)
              </div>
            </div>
            <div>
              <Messenger />
            </div>
            <div className={s.contentSocial}>
              <div className={s.social}>
                <a
                  className={s.socialItem}
                  href="https://vk.com/idyoung_punk"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Вконтакте"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 25C19.4033 25 25 19.4033 25 12.5C25 5.59667 19.4033 0 12.5 0C5.59667 0 0 5.59667 0 12.5C0 19.4033 5.59667 25 12.5 25Z"
                      fill="#527396"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3576 16.2183H13.1543C13.1543 16.2183 13.3951 16.1916 13.5184 16.0616C13.6318 15.9416 13.6284 15.7166 13.6284 15.7166C13.6284 15.7166 13.6126 14.6625 14.1084 14.5066C14.5976 14.3533 15.2268 15.5258 15.8918 15.9766C16.3951 16.3175 16.7776 16.2433 16.7776 16.2433L18.5584 16.2191C18.5584 16.2191 19.4901 16.1625 19.0476 15.44C19.0118 15.3808 18.7901 14.9058 17.7243 13.93C16.6076 12.9083 16.7568 13.0733 18.1026 11.3066C18.9209 10.23 19.2484 9.57247 19.1468 9.29164C19.0493 9.02331 18.4468 9.09414 18.4468 9.09414L16.4418 9.10664C16.4418 9.10664 16.2934 9.08664 16.1826 9.15164C16.0751 9.21497 16.0059 9.36331 16.0059 9.36331C16.0059 9.36331 15.6893 10.1966 15.2651 10.9041C14.3726 12.3991 14.0151 12.4783 13.8693 12.385C13.5301 12.1691 13.6151 11.5166 13.6151 11.0525C13.6151 9.60414 13.8384 8.99997 13.1809 8.84414C12.9626 8.79247 12.8018 8.75831 12.2451 8.75247C11.5301 8.74497 10.9243 8.75497 10.5818 8.92081C10.3534 9.02997 10.1776 9.27664 10.2851 9.28997C10.4176 9.30747 10.7176 9.36914 10.8768 9.58331C11.0826 9.85914 11.0751 10.4775 11.0751 10.4775C11.0751 10.4775 11.1934 12.1825 10.7993 12.395C10.5293 12.54 10.1576 12.2433 9.3626 10.8875C8.95427 10.1933 8.64677 9.42497 8.64677 9.42497C8.64677 9.42497 8.5876 9.28164 8.48093 9.20497C8.3526 9.11247 8.17343 9.08247 8.17343 9.08247L6.2676 9.09497C6.2676 9.09497 5.98177 9.10331 5.87677 9.22497C5.78343 9.33414 5.86843 9.55997 5.86843 9.55997C5.86843 9.55997 7.36093 13 9.04927 14.7341C10.5984 16.3225 12.3576 16.2183 12.3576 16.2183Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <a
                  className={s.socialItem}
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5 25C19.4033 25 25 19.4033 25 12.5C25 5.59667 19.4033 0 12.5 0C5.59667 0 0 5.59667 0 12.5C0 19.4033 5.59667 25 12.5 25Z"
                      fill="#476EAE"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.8675 8.98417H15.625V6.875H13.8675C12.51 6.875 11.4067 7.97917 11.4067 9.33583V10.3908H10V12.5H11.4067V18.125H13.5158V12.5H15.2733L15.625 10.3908H13.5158V9.33583C13.5158 9.14583 13.6767 8.98417 13.8675 8.98417Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                <a
                  className={s.socialItem}
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 25C19.4033 25 25 19.4033 25 12.5C25 5.59667 19.4033 0 12.5 0C5.59667 0 0 5.59667 0 12.5C0 19.4033 5.59667 25 12.5 25Z"
                      fill="url(#paint0_linear)"
                    ></path>
                    <path
                      d="M12.5002 6.22607C10.7961 6.22607 10.5827 6.23357 9.91274 6.26441C9.24524 6.29441 8.78941 6.40107 8.39024 6.55524C7.97691 6.71607 7.62691 6.93024 7.27857 7.27941C6.93024 7.62691 6.71607 7.97691 6.55524 8.39024C6.40107 8.78941 6.29357 9.24524 6.26441 9.91274C6.23357 10.5827 6.22607 10.7961 6.22607 12.5002C6.22607 14.2044 6.23357 14.4177 6.26441 15.0877C6.29441 15.7536 6.40107 16.2111 6.55524 16.6094C6.71607 17.0227 6.93024 17.3727 7.27941 17.7211C7.62774 18.0694 7.97774 18.2852 8.39107 18.4452C8.79024 18.5994 9.24607 18.7052 9.91357 18.7369C10.5836 18.7677 10.7969 18.7744 12.5011 18.7744C14.2052 18.7744 14.4186 18.7677 15.0886 18.7369C15.7544 18.7061 16.2119 18.5994 16.6102 18.4452C17.0236 18.2852 17.3736 18.0694 17.7219 17.7211C18.0702 17.3727 18.2852 17.0227 18.4461 16.6094C18.6002 16.2102 18.7061 15.7536 18.7377 15.0877C18.7686 14.4169 18.7752 14.2036 18.7752 12.5002C18.7752 10.7969 18.7686 10.5827 18.7377 9.91274C18.7069 9.24524 18.6002 8.78941 18.4461 8.39024C18.2852 7.97691 18.0702 7.62691 17.7219 7.27857C17.3736 6.93024 17.0236 6.71524 16.6102 6.55441C16.2111 6.40024 15.7544 6.29357 15.0886 6.26357C14.4177 6.23357 14.2044 6.22607 12.5002 6.22607ZM12.5002 7.59857C14.2269 7.59857 14.3961 7.60607 15.0261 7.63524C15.5977 7.66107 15.8961 7.74941 16.1127 7.83441C16.3752 7.93774 16.5544 8.05357 16.7502 8.24941C16.9452 8.44357 17.0661 8.62941 17.1652 8.88691C17.2502 9.10441 17.3411 9.40357 17.3661 9.97524C17.3961 10.6261 17.4027 10.8227 17.4027 12.5002C17.4027 14.1786 17.3961 14.3736 17.3661 15.0244C17.3411 15.5969 17.2494 15.8961 17.1652 16.1136C17.0661 16.3727 16.9452 16.5561 16.7519 16.7519C16.5569 16.9452 16.3727 17.0661 16.1136 17.1652C15.8961 17.2502 15.5969 17.3411 15.0244 17.3661C14.3736 17.3961 14.1777 17.4027 12.5002 17.4027C10.8227 17.4027 10.6261 17.3961 9.97524 17.3661C9.40357 17.3411 9.10441 17.2494 8.88691 17.1652C8.62857 17.0661 8.44357 16.9452 8.24941 16.7502C8.05357 16.5552 7.93691 16.3761 7.83441 16.1127C7.74941 15.8961 7.66107 15.5977 7.63524 15.0244C7.60607 14.3961 7.59857 14.2269 7.59857 12.5002C7.59857 10.7727 7.60607 10.6036 7.63524 9.97524C7.66107 9.40274 7.74941 9.10441 7.83441 8.88774C7.93774 8.62524 8.05357 8.44607 8.24941 8.24941C8.44607 8.05357 8.62524 7.93691 8.88774 7.83441C9.10441 7.74941 9.40274 7.66107 9.97524 7.63524C10.6036 7.60607 10.7727 7.59857 12.5002 7.59857Z"
                      fill="white"
                    ></path>
                    <path
                      d="M12.5001 9.27856C10.7193 9.27856 9.2793 10.7202 9.2793 12.4994C9.2793 14.2786 10.7193 15.7227 12.5001 15.7227C14.2801 15.7227 15.7218 14.2794 15.7218 12.4994C15.7218 10.7194 14.2801 9.27856 12.5001 9.27856ZM12.5001 10.6511C13.521 10.6511 14.3493 11.4802 14.3493 12.4994C14.3493 13.5202 13.521 14.3494 12.5001 14.3494C11.4793 14.3494 10.6518 13.5211 10.6518 12.5002C10.6518 11.4802 11.4793 10.6511 12.5001 10.6511Z"
                      fill="white"
                    ></path>
                    <path
                      d="M15.7228 8.52417C15.307 8.52417 14.9695 8.86167 14.9695 9.2775C14.9695 9.69334 15.307 10.03 15.7228 10.03C16.1378 10.03 16.4753 9.6925 16.4753 9.2775C16.4761 8.86167 16.1378 8.52417 15.7228 8.52417Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="12.5"
                        y1="0"
                        x2="12.5"
                        y2="25"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0729167" stopColor="#2D40A2"></stop>
                        <stop offset="0.286458" stopColor="#86309F"></stop>
                        <stop offset="0.442708" stopColor="#AD207C"></stop>
                        <stop offset="0.645833" stopColor="#BF2557"></stop>
                        <stop offset="0.755208" stopColor="#D92121"></stop>
                        <stop offset="1" stopColor="#EAA724"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
                <a
                  className={s.socialItem}
                  href="https://web.telegram.org/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                >
                  <svg
                    width="25"
                    height="25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 25C19.405 25 25 19.405 25 12.5S19.405 0 12.5 0 0 5.595 0 12.5 5.595 25 12.5 25zM5.72 12.23l12.052-4.648c.56-.202 1.048.137.867.983v-.001l-2.052 9.667c-.152.686-.559.852-1.129.53l-3.125-2.304-1.507 1.452c-.167.167-.307.308-.63.308l.222-3.18 5.791-5.233c.253-.222-.056-.347-.388-.126l-7.157 4.506-3.086-.962c-.67-.213-.684-.67.142-.993z"
                      fill="#1C84C4"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={s.info}>
          <div className={s.sub}>
            © 2021 LEGO, логотип LEGO, Minifigure, DUPLO, логотип DUPLO,
            NINJAGO, логотип NINJAGO, логотип FRIENDS, логотип HIDDEN SIDE,
            логотип MINIFIGURES (минифигурки), MINDSTORMS и логотип MINDSTORMS
            являются торговыми марками корпорации LEGO Group. ©2020 The LEGO
            Group. Все права защищены.
          </div>
          <div className={s.buy}>
            <div className={s.buyLogo}>
              <NavLink to={"/"}>
                <img className={s.logoImg} src={logo} alt="Логотип" />
                <span className={s.logoText}>Сеть магазинов LEGO</span>
              </NavLink>
            </div>
            <div className={s.payment}>
              <p>Вы можете оплатить:</p>
              <Payment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
