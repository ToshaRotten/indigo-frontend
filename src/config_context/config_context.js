import React, { createContext, useContext } from "react";

const ConfigContext = createContext(null);

export const useConfig = () => {
	const context = useContext(ConfigContext);
	if (!context) {
		throw new Error("useConfig must be used within a ConfigProvider");
	}
	return context;
};

export const ConfigProvider = ({ children, config }) => {
	return (
		<ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
	);
};

export const getServerAddress = () => {
	// load .env file, parse the values, and return the server address
	const serverAddress = "http://localhost:3000";
	return serverAddress;
};
