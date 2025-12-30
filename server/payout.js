import StellarSdk from "stellar-sdk";
import { ORBX, server } from "./stellar.js";

export async function payoutWinner(destination, amount, secret) {
  const source = StellarSdk.Keypair.fromSecret(secret);
  const account = await server.loadAccount(source.publicKey());

  const tx = new StellarSdk.TransactionBuilder(account, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.PUBLIC
  })
    .addOperation(StellarSdk.Operation.payment({
      destination,
      asset: ORNX,
      amount: amount.toString()
    }))
    .setTimeout(30)
    .build();

  tx.sign(source);
  await server.submitTransaction(tx);
}
