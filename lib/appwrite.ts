import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
  platform: "com.rn.estate-explorer",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setPlatform(config.platform!)
  .setProject(config.projectId!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function signin() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) {
      throw new Error("Failed to sign in");
    }

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success") {
      throw new Error("Failed to sign in");
    }

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret");
    const userId = url.searchParams.get("userId");

    if (!secret || !userId) {
      throw new Error("Failed to sign in");
    }

    const session = await account.createSession(secret, userId);
    if (!session) {
      throw new Error("Failed to sign in");
    }

    return true;
  } catch (error: any) {
    console.log(error.message);
    console.log(error);
    return false;
  }
}

export async function signout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error: any) {
    console.log(error.message);
    console.log(error);
    return false;
  }
}

export async function getUser() {
  try {
    const response = await account.get();
    if (!response.$id || !response.email || !response) {
      throw new Error("Failed to get user");
    }

    if (response.$id) {
      const userAvatar = await avatar.getInitials(response.name);
      return { ...response, avatar: userAvatar.toString() };
    }
  } catch (error: any) {
    console.log(error.message);
    console.log(error);
    return false;
  }
}
