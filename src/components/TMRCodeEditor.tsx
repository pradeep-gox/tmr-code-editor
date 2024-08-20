import { useEffect, useState } from "react";

import ReactAce from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-pgsql";
import "ace-builds/src-noconflict/mode-graphqlschema";
import "ace-builds/src-noconflict/theme-github_dark";

const TMRCodeEditor = ({
  mode,
  height,
  value: propValue,
  onChange,
  placeholder,
  fontSize,
}: {
  mode?: "json" | "mysql" | "psql" | "graphql";
  height?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  fontSize?: string | number;
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
      <ReactAce
        height={height || "250px"}
        theme="github_dark"
        mode="json"
        value={value}
        onChange={onUpdate}
        placeholder={placeholder}
        fontSize={fontSize || "14px"}
      />
    );
  }

  if (mode === "mysql") {
    return (
      <ReactAce
        height={height || "250px"}
        theme="github_dark"
        mode="mysql"
        value={value}
        onChange={onUpdate}
        placeholder={placeholder}
        fontSize={fontSize || "14px"}
      />
    );
  }

  if (mode === "psql") {
    return (
      <ReactAce
        height={height || "250px"}
        theme="github_dark"
        mode="pgsql"
        value={value}
        onChange={onUpdate}
        placeholder={placeholder}
        fontSize={fontSize || "14px"}
      />
    );
  }

  if (mode === "graphql") {
    return (
      <ReactAce
        height={height || "250px"}
        theme="github_dark"
        mode="graphqlschema"
        value={value}
        onChange={onUpdate}
        placeholder={placeholder}
        fontSize={fontSize || "14px"}
      />
    );
  }

  return (
    <ReactAce
      height={height || "250px"}
      theme="github_dark"
      value={value}
      onChange={onUpdate}
      placeholder={placeholder}
      fontSize={fontSize || "14px"}
    />
  );
};

export default TMRCodeEditor;
