import React from "react";

export type MouseEvent<T = HTMLButtonElement> = React.MouseEventHandler<T>;

export type MouseEventCurrying<T = HTMLButtonElement, P = string> = (
  id: P
) => MouseEvent<T>;

export type ChangeEvent<T = HTMLInputElement> = React.ChangeEventHandler<T>;

export type ChangeEventCurrying<T = string> = (id: T) => ChangeEvent;

export type ClipboardEvent<T = HTMLInputElement> =
  React.ClipboardEventHandler<T>;

export type FocusEvent<T = HTMLInputElement> = React.FocusEventHandler<T>;

export type FocusEventCurrying<T = string> = (id: T) => FocusEvent;

export type ClickEvent<T = HTMLButtonElement> = React.MouseEventHandler<T>;

export type ClickEventCurrying<T = HTMLButtonElement, P = string> = (
  id: P
) => ClickEvent<T>;

export type KeyDownEvent<T = HTMLInputElement> = React.KeyboardEventHandler<T>;

export type KeyboardEvent<T = HTMLInputElement> = React.KeyboardEventHandler<T>;

export type FormEvent<T = HTMLFormElement> = React.FormEventHandler<T>;

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
