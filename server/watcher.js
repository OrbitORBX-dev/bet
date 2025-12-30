import { server, ORBX } from "./stellar.js";

const HOUSE_ESCROW = "HOUSE_PUBLIC_KEY";

server.payments()
  .forAccount(HOUSE_ESCROW)
  .cursor("now")
  .stream({
    onmessage: payment => {
      if (
        payment.asset_code === "ORNX" &&
        payment.from !== HOUSE_ESCROW
      ) {
        console.log("New bet received:", payment.amount);
      }
    }
  });
