import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Your App Title",
	description: "Your App Description",
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body className="h-screen flex flex-col bg-base-100">{children}</body>
		</html>
	);
};
export default RootLayout;
