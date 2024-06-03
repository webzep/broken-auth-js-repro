import type { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
	title: "Sign In",
	description: "Sign in to your account.",
};

type LayoutProps = {
	children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
	return children;
};

export default Layout;
