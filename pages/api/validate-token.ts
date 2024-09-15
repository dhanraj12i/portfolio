import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";

// Create a remote JWK set from Vercel's JWKS endpoint
const JWKS = jose.createRemoteJWKSet(
  new URL("https://oidc.vercel.com/.well-known/jwks")
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const { payload } = await jose.jwtVerify(token, JWKS, {
      issuer: "https://oidc.vercel.com",
      audience: "https://vercel.com/[TEAM_SLUG]",
      subject:
        "owner:[TEAM_SLUG]:project:[PROJECT_NAME]:environment:[ENVIRONMENT]",
    });

    res.status(200).json({ message: "Token is valid", payload });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
}
