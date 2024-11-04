export type IconTypeMap =
  | "file-import"
  | "upload"
  | "upload-arrow"
  | "upload-cloud"
  | "upload-file"
  | "user-gear"
  | "user-x"
  | "user-pen"
  | "user-check"
  | "user-group"
  | "user-add"
  | "users"
  | "chat"
  | "house"
  | "close"
  | "magnifying-glass"
  | "user"
  | "user-outline"
  | "eye-hidden"
  | "eye-view"
  | "comment"
  | "email"
  | "filter"
  | "star"
  | "comment-outline"
  | "bell"
  | "bell-outline"
  | "star-outline"
  | "image"
  | "image-outline"
  | "emoji"
  | "calendar"
  | "emoji-outline"
  | "arrow-down"
  | "arrow-up"
  | "arrow-left"
  | "arrow-right"
  | "trash"
  | "bracket"
  | "repeat"
  | "angle-right"
  | "angle-left"
  | "check"
  | "align-justify"
  | "list"
  | "list-number"
  | "quote"
  | "code"
  | "undo"
  | "redo"
  | "edit-box"
  | "link"
  | "table"
  | "color"
  | "video"
  | "italic"
  | "underline"
  | "strikethrough"
  | "align-center"
  | "align-left"
  | "align-right"
  | "setting"
  | "dot-vertical"
  | "dot-line"
  | "share"
  | "sliders"
  | "music"
  | "global"
  | "lock"
  | "keys"
  | "location"
  | "send"
  | "share-nodes"
  | "plus"
  | "react-love"
  | "qrcode"
  | "shape"
  | "react-angry"
  | "react-care"
  | "react-haha"
  | "react-like"
  | "react-sad"
  | "react-wow";

export type IconTypeProps = React.HTMLAttributes<HTMLOrSVGElement> & {
  type: IconTypeMap;
  size?: number;
  color?: string;
};