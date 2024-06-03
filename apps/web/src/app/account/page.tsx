import { userAtom } from "@/state/userAtom";
import {
	AuthProviders,
	useFirebaseAuth
} from "@repo/authentication";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

const Page = () => {
	const firebaseUser = useFirebaseAuth();
	const [user, setUser] = useAtom(userAtom);

	useEffect(() => {
		if (firebaseUser) {
		}
	}, [firebaseUser]);

	return (
		<Fragment>
			<h1 className="text-4xl font-bold text-center">Sign In</h1>
			<AuthProviders firebaseUIOptions={firebaseUIOptions} />
		</Fragment>
	);
};

export default Page;
