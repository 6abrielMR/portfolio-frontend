import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { sendedEmail, sendEmail } from "../../actions/email";
import { useForm } from "../../hooks/useForm";
import { Button } from "../ui/Button";
import { FieldForm } from "../ui/FieldForm";
import "./contact-me-styles.css";

export const ContactMeScreen = () => {
  const dispatch = useDispatch();
  const { isSendEmail } = useSelector((state) => state.email);
  const [formMessageValues, handleMessageInputChange, reset] = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSended, setIsSended] = useState(false);

  const { name, email, subject, message } = formMessageValues;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!!!name || !!!email || !!!subject || !!!message) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el mensaje",
      });
    } else {
      setIsSended(true);
      dispatch(sendEmail(name, email, subject, message));
    }
  };

  useEffect(() => {
    if (isSendEmail !== null) {
      if (isSendEmail) {
        reset();
        dispatch(sendedEmail(null));
        setIsSended(false);
        return Swal.fire({
          icon: "success",
          title: "Mensaje Enviado",
          text: "Mensaje enviado correctamente",
        });
      } else {
        dispatch(sendedEmail(null));
        setIsSended(false);
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar el mensaje, intentalo mas tarde",
        });
      }
    }
  }, [isSendEmail]);

  return (
    <div
      id="contact"
      className="w-100 d-flex flex-column align-items-center content-section contact-me"
    >
      <p id="contact-me" className="text-uppercase mb-3">
        contact
      </p>
      <h2 className="text-capitalize">contactame</h2>
      <div className="w-100 content-contact-me">
        <div className="d-flex flex-column justify-content-between contact-me-info">
          <div className="w-100 contact-me-info-img">
            <img
              src="https://rainbowit.net/html/inbio/assets/images/contact/contact1.png"
              alt="img-contact"
            />
          </div>
          <p className="text-capitalize">gabriel rodriguez</p>
          <p className="text-capitalize">
            desarrollador full stack, mobile & devops
          </p>
          <p className="italic">
            Me encuentro disponible para trabajar de tiempo completo, enviame un
            mensaje o contactame por algunas de mis redes.{" "}
          </p>
          <p>
            <span>"</span>
            <em className="italic">
              Viviendo, aprendiendo y subiendo de nivel un día a la vez
            </em>
            <span> "</span>
          </p>
          <p className="text-capitalize">encuentrame</p>
          <div className="d-flex">
            <Button icon="fab fa-linkedin-in" />
            <Button icon="fab fa-github" />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between contact-me-form">
          <div className="row">
            <div className="col-6">
              <FieldForm
                fieldname="nombre"
                name="name"
                onChange={handleMessageInputChange}
                value={name}
              />
            </div>
            <div className="col-6">
              <FieldForm
                fieldname="correo electronico"
                name="email"
                onChange={handleMessageInputChange}
                value={email}
              />
            </div>
          </div>
          <FieldForm
            fieldname="asunto"
            name="subject"
            onChange={handleMessageInputChange}
            value={subject}
          />
          <FieldForm
            isNormalField={false}
            fieldname="mensaje"
            name="message"
            onChange={handleMessageInputChange}
            value={message}
          />
          <div className="pb-3">
            {isSended ? (
              <div className="w-100 d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
            ) : (
              <Button
                size="xxl"
                text="enviar mensaje"
                striking={true}
                onclick={handleSendMessage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
