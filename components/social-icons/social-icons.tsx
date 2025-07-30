import React, { FC } from "react";
import { Button } from "@heroui/button";

const LinkedinIcon = ({
  size = 50,
  colors = ["#1877F2", "#145DBF", "#0F46A0", "#0A3682"], // Пример оттенков синего для Facebook
  ...props
}: {
  size?: number;
  colors?: string[];
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.25 0H3.75C1.67893 0 0 1.67893 0 3.75V20.25C0 22.3211 1.67893 24 3.75 24H20.25C22.3211 24 24 22.3211 24 20.25V3.75C24 1.67893 22.3211 0 20.25 0Z"
      fill="#2867B2"
    />
    <path
      d="M8.7 18H6.15V9.975H8.7V18ZM7.425 8.85C6.6 8.85 6 8.25 6 7.425C6 6.6 6.675 6 7.425 6C8.25 6 8.85 6.6 8.85 7.425C8.85 8.25 8.25 8.85 7.425 8.85ZM18 18H15.45V13.65C15.45 12.375 14.925 12 14.175 12C13.425 12 12.675 12.6 12.675 13.725V18H10.125V9.975H12.525V11.1C12.75 10.575 13.65 9.75 14.925 9.75C16.35 9.75 17.85 10.575 17.85 13.05V18H18Z"
      fill="white"
    />
  </svg>
);

const TelegramIcon = ({
  size = 50,
  colors = ["#37AEE2", "#1D96C5", "#1A8CD8", "#0F71C8"], // оттенки фирменного синего Telegram
  ...props
}: {
  size?: number;
  colors?: string[];
} & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Фон */}
    <rect width="24" height="24" rx="4" fill={colors[0]} />
    {/* Самолётик с градиентом */}
    <path
      d="M21.42 3.58L2.52 10.23C1.9 10.48 1.92 11.33 2.56 11.5L7.55 13.27L17.76 6.13C18.38 5.7 19.11 6.1 18.94 6.85L16.86 15.61L12.95 12.82L10.22 15.54L14.81 19.52C15.5 20.21 16.68 19.82 16.87 18.92L19.88 4.3C20.05 3.58 19.25 3.06 18.56 3.46Z"
      fill={colors[3]}
    />
  </svg>
);

export const CustomBase64Icon = ({
  size = 50,
  ...props
}: {
  size?: number;
} & React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEUFWP8AVv8ATP8ASv8AUf+lt/+ywf9lhf8ARv8AU/8AQP/y9f////91kv/q8P8ARP/S2v9ujf/l7P8ASP8yZv8ATv+5xv9nh//M1f+Spv/BzP/Y3/+4xP+ZrP+su/8AJv8AN/8APf/f5v8AL/8oX/88af9Qd/+Kof8IPKxZAAAAvUlEQVR4Ac3RRQKDMAAAwZLgLO5ab///w7qgZxZnLpHNcspsa0UhHwl1CqWmP9IM8/5hPfpD2+GVLlX38fT8P/QIQteNIFYUVUnSB/1h5qdmDqq6KYDS76Mt0oratqBuoBX/yCMnjjuq7S6BHkZZljkQR9RVlYGh/mG2l7ENbYQXRdEhynvoq+rRoykoj/bxdB5OJdShzME4lSDHi1Cbfseji/pF2WWPOuM+vfjcdldVnVl4KxXp8patFhe6ATwRD2y5uYPGAAAAAElFTkSuQmCC"
    alt="Custom Icon"
    width={size}
    height={size}
    {...props}
  />
);

export const ButtonLinkedin = () => (
  <div className="flex gap-1 items-center">
    <Button
      color="primary"
      isIconOnly
      as={"a"}
      target={"_blank"}
      href={"https://www.linkedin.com/in/mykola-onofriichuk-1a1440358/"}
    >
      <LinkedinIcon />
    </Button>
  </div>
);

export const ButtonTelegram = () => (
  <div className="flex gap-1 items-center">
    <Button
      color="primary"
      isIconOnly
      as={"a"}
      target={"_blank"}
      href={"https:/t.me/Kolya2353"}
    >
      <TelegramIcon />
    </Button>
  </div>
);

export const ButtonBehance = () => (
  <div className="flex gap-1 items-center">
    <Button
      color="primary"
      isIconOnly
      as={"a"}
      target={"_blank"}
      href={"https://www.behance.net/9be0fdbf"}
    >
      <CustomBase64Icon />
    </Button>
  </div>
);
export const SocialIcons: FC = () => {
  return (
    <div className={"flex justify-center alignItems-center"}>
      <div>
        <ButtonTelegram />
      </div>
      <div className={"px-2"}>
        <ButtonLinkedin />
      </div>
      <div>
        <ButtonBehance />
      </div>
    </div>
  );
};
