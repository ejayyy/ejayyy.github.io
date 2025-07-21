"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedDarkAtom,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
}

interface PreProps {
  children: React.ReactNode;
  className?: string;
}

interface CustomCodeBlockProps {
  children: React.ReactNode;
  className?: string;
  isPreTag?: boolean;
}

function useTheme() {
  const [isDark, setIsDark] = useState(false);

  const checkTheme = useCallback(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  useEffect(() => {
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [checkTheme]);

  return isDark;
}

function getLanguageFromClassName(className?: string): string {
  return className?.replace("language-", "") || "text";
}

function normalizeChildren(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  return children?.toString() || "";
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const isDark = useTheme();
  const language = getLanguageFromClassName(className);

  return (
    <SyntaxHighlighter
      language={language}
      style={isDark ? solarizedDarkAtom : solarizedlight}
      showLineNumbers={true}
      wrapLines={true}
      className="syntax-highlighter"
      codeTagProps={{
        className: "syntax-highlighter-code",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export function CustomCodeBlock({
  children,
  className,
  isPreTag = false,
}: CustomCodeBlockProps) {
  const isDark = useTheme();

  if (isPreTag && React.isValidElement(children)) {
    const childProps = children.props as any;
    const hasLanguageClass = childProps?.className?.startsWith("language-");

    if (hasLanguageClass) {
      return (
        <CodeBlock className={childProps.className}>
          {childProps.children}
        </CodeBlock>
      );
    }
  }

  const language = getLanguageFromClassName(className);
  const PreTag = isPreTag ? "div" : "span";
  const showLineNumbers = isPreTag;
  const cssClass = `syntax-highlighter${
    isPreTag ? " block-code" : " inline-code"
  }`;
  const codeClass = `syntax-highlighter-code${isPreTag ? "" : " inline"}`;

  return (
    <SyntaxHighlighter
      language={language}
      style={isDark ? solarizedDarkAtom : solarizedlight}
      showLineNumbers={showLineNumbers}
      wrapLines={true}
      className={cssClass}
      PreTag={PreTag}
      codeTagProps={{
        className: codeClass,
      }}
    >
      {normalizeChildren(children)}
    </SyntaxHighlighter>
  );
}

export function CustomPre({ children, className }: PreProps) {
  return (
    <CustomCodeBlock
      children={children}
      className={className}
      isPreTag={true}
    />
  );
}

export function CustomCode({ className, children, ...props }: any) {
  return (
    <CustomCodeBlock
      children={children}
      className={className}
      isPreTag={false}
    />
  );
}
