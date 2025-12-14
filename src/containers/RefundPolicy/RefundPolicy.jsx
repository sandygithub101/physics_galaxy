import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LinkSend from "../../components/LinkSend/LinkSend";
import Footer from "../../components/Footer/Footer";
import { refundPolicyService } from "../../services";
import { resHandler } from "../../../helper";

export default function RefundPolicy() {
  const [refundPolicies, setRefundPolicies] = useState();
  useEffect(() => {
    fetchRefundPolicy();
  }, []);
  const fetchRefundPolicy = () => {
    refundPolicyService()
      .then((res) => {
        // let {data, status, message} = resHandler(res);
        setRefundPolicies(res.data);
        console.log(res, "refundPolicy")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />

      <section className="pg-privacypolicy pb-4">
        <div className="container">
          <div className="bg-white py-4 shadow">
            <div className='p-4 pg-privacypolicy-text' dangerouslySetInnerHTML={{ __html: refundPolicies && refundPolicies }} />
          </div>
        </div>
      </section>

      <LinkSend />
      <Footer />
    </>
  );
}
