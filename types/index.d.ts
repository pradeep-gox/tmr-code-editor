import type * as React from "react";

export interface TMRCodeEditorProps {
  value?: string;
  mode?: "json" | "mysql" | "psql";
  height?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

declare const TMRCodeEditor: React.FC<TMRCodeEditorProps>;

export { TMRCodeEditor };
