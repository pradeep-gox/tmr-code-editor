import ReactCodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { json } from "@codemirror/lang-json";
import { sql, MySQL, PostgreSQL } from "@codemirror/lang-sql";
import { useEffect, useState } from "react";

const TMRCodeEditor = ({
  mode,
  height,
  value: propValue,
  onChange,
  placeholder,
}: {
  mode?: "json" | "mysql" | "psql";
  height?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}) => {
  const isControlled = propValue !== undefined;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isControlled) {
      setValue(propValue || "");
    }
  }, [isControlled, propValue]);

  const onUpdate = (value: string) => {
    if (isControlled) {
      onChange && onChange(value);
    } else {
      setValue(value);
    }
  };

  if (mode === "json") {
    return (
      <ReactCodeMirror
        value={value}
        onChange={onUpdate}
        height={height || "250px"}
        theme={githubDark}
        extensions={[json()]}
        placeholder={placeholder}
      />
    );
  }

  if (mode === "mysql") {
    return (
      <ReactCodeMirror
        value={value}
        onChange={onUpdate}
        height={height || "250px"}
        theme={githubDark}
        extensions={[sql({ dialect: MySQL })]}
        placeholder={placeholder}
      />
    );
  }

  if (mode === "psql") {
    return (
      <ReactCodeMirror
        value={value}
        onChange={onUpdate}
        height={height || "250px"}
        theme={githubDark}
        extensions={[sql({ dialect: PostgreSQL })]}
        placeholder={placeholder}
      />
    );
  }
  return (
    <ReactCodeMirror
      value={value}
      onChange={onUpdate}
      height={height || "250px"}
      theme={githubDark}
      placeholder={placeholder}
    />
  );
};

export default TMRCodeEditor;
