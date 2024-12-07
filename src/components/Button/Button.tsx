import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  to?: string;
}

const ButtonInfoEnable: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-info-600 rounded-[8px] text-d-h5 font-bold text-white">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-info-600 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};
const ButtonDangerEnable: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-danger-600 rounded-[8px] text-d-h5 font-bold text-white">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-danger-600 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};
const ButtonPrimaryEnable: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full bg-primary-600 rounded-[8px] font-bold text-white px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] text-m-h5 lg:text-d-h5">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-primary-600 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};

const ButtonSecondaryEnable: React.FC<ButtonProps> = ({
  text,
  onClick,
  to,
}) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-white rounded-[8px] text-d-h5 font-bold text-primary-600">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-white rounded-[8px] text-d-h5 font-bold text-primary-600"
    >
      {text}
    </button>
  );
};

const ButtonPrimaryDisable: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-white rounded-[8px] text-d-h5 font-bold text-primary-400">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-white rounded-[8px] text-d-h5 font-bold text-primary-400"
    >
      {text}
    </button>
  );
};

const ButtonSecondaryDisable: React.FC<ButtonProps> = ({
  text,
  onClick,
  to,
}) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-white rounded-[8px] text-d-h5 font-bold text-primary-300 opacity-50">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-white rounded-[8px] text-d-h5 font-bold text-primary-300 opacity-50"
    >
      {text}
    </button>
  );
};

const ButtonPrimaryHover: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-primary-800 rounded-[8px] text-d-h5 font-bold text-white">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-primary-800 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};

const ButtonSecondaryHover: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-primary-400 rounded-[8px] text-d-h5 font-bold text-white">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-primary-400 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};

const ButtonPrimaryPressed: React.FC<ButtonProps> = ({ text, onClick, to }) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-primary-900 rounded-[8px] text-d-h5 font-bold text-white">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-primary-900 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};

const ButtonSecondaryPressed: React.FC<ButtonProps> = ({
  text,
  onClick,
  to,
}) => {
  if (to) {
    return (
      <Link href={to}>
        <button className="w-full px-[24px] py-[16px] bg-primary-800 rounded-[8px] text-d-h5 font-bold text-white">
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className="w-full px-[24px] py-[16px] bg-primary-800 rounded-[8px] text-d-h5 font-bold text-white"
    >
      {text}
    </button>
  );
};

export {
  ButtonPrimaryEnable,
  ButtonDangerEnable,
  ButtonInfoEnable,
  ButtonPrimaryDisable,
  ButtonPrimaryHover,
  ButtonPrimaryPressed,
  ButtonSecondaryEnable,
  ButtonSecondaryDisable,
  ButtonSecondaryHover,
  ButtonSecondaryPressed,
};
