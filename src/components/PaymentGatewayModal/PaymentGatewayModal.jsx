import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./PaymentGatewayModal.css";
import { getPayGateWayService } from "../../services";
import { resHandler } from "../../../helper";

export default function PaymentGatewayModal({
  value,
  isOpen,
  isClose,
  selectedGateway,
}) {
  const [paymentGatewayList, setPaymentGatewayList] = useState();
  const [selectedPayment, setSelectedPayment] = useState();
  useEffect(() => {
    handleSelectPaymentGateway();
  }, []);
  const handleSelectPaymentGateway = async () => {
    await getPayGateWayService().then((res) => {
      let { status, data, message } = resHandler(res);
      console.log(data);
      //   console.log(JSON.stringify(data))
      status && setPaymentGatewayList(data);
      // selectedGateway(data.easebuzz || null);
      // isClose();
    });
  };

  const handlePaymentChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOptionData = JSON.parse(selectedValue);
    setSelectedPayment(selectedOptionData || null);
    selectedGateway(selectedOptionData || null);
    isClose();
    // console.log(selectedOptionData)
  };

  return (
    <Modal isOpen={isOpen} onClose={isClose}>
      <div className="moddv text-center">
        {" "}{console.log('paymentGatewayList', paymentGatewayList)}
        Please select payment gateway<br></br>{" "}
      </div>
      <div className="radiodv text-center d-grid paymentSection">
        {paymentGatewayList?.easebuzz.status == 1 && (
          <label>
            <input
              type="radio"
              value={JSON.stringify(paymentGatewayList.easebuzz)}
              onChange={handlePaymentChange}
            />{" "}
            <span>EaseBuzz</span>{" "}
          </label>
        )}
        {paymentGatewayList?.rzp.status == 1 && (
          <label>
            <input
              type="radio"
              value={JSON.stringify(paymentGatewayList.rzp)}
              onChange={handlePaymentChange}
            />{" "}
            <span>RazorPay</span>{" "}
          </label>
        )}
      </div>
      {/*{paymentGatewayList?.billdesk.status == 1 && <option value={paymentGatewayList.billdesk}>BillDesk</option>}
         {paymentGatewayList?.ccav.status == 1 && <option value={paymentGatewayList.ccav}>CC Avenue</option>}
         {paymentGatewayList?.easebuzz.status == 1 && <option value={paymentGatewayList.easebuzz}>EaseBuzz</option>}
         {paymentGatewayList?.fonepay.status == 1 && <option value={paymentGatewayList.fonepay}>FonePay</option>}
         {paymentGatewayList?.paytm.status == 1 && <option value={paymentGatewayList.paytm}>Paytm</option>}
         {paymentGatewayList?.worldline.status == 1 && <option value={paymentGatewayList.worldline}>WorldLine</option>} */}
    </Modal>
  );
}
