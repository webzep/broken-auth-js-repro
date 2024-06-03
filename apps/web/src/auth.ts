import NextAuth, { NextAuthResult } from "next-auth";
import credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";

type NextAuthResultAdapted = NextAuthResult & {
	auth: any; // Something is wrong with the typing here. :(
};

export const { auth, handlers, signIn, signOut }: NextAuthResultAdapted =
	NextAuth({
		adapter: FirestoreAdapter(),
		providers: [
			Google,
			GitHub,
			// credentials({ // THIS IS ALSO BROKEN WITH THE SAME ERROR
			// 	credentials: {
			// 		email: {
			// 			label: "Email",
			// 			type: "email",
			// 		},
			// 		password: {
			// 			label: "Password",
			// 			type: "password",
			// 		},
			// 	},
			// 	authorize: async (credentials) => {
			// 			return newUser;
			// 		}
			// 	},
			// }),
		],
	});
