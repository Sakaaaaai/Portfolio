// tabs.js または tabs.tsx
import React, { useState } from "react";

const Tabs = ({ children }) => {
  return <div className="tabs">{children}</div>;
};

const TabsList = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

const TabsTrigger = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="tabs-trigger">
      {children}
    </button>
  );
};

const TabsContent = ({ children, active }) => {
  return active ? <div className="tabs-content">{children}</div> : null;
};

export { Tabs, TabsContent, TabsList, TabsTrigger };
