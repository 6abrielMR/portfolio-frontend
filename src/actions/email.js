import { fetchSendEmail } from "../helpers/fetch";
import { types } from "../types/types";

export const sendEmail =
  (name, email, subject, message) => async (dispatch) => {
    try {
      const resp = await fetchSendEmail("email/send", {
        name,
        email,
        subject,
        message,
      });
      const body = await resp.json();
      const sendEmailBody = body.ok;

      dispatch(sendedEmail(sendEmailBody));
    } catch (e) {
      console.log(e);
    }
  };

export const sendedEmail = (sendedEmail) => ({
  type: types.sendEmail,
  payload: sendedEmail,
});
