import StellarSdk from "stellar-sdk";

export const server = new StellarSdk.Server(
  "https://horizon.stellar.org"
);

export const ORNX = new StellarSdk.Asset(
  "ORNX",
  "ISSUER_PUBLIC_KEY"
