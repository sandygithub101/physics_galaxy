import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import NoFoundCart from "../../assets/images/nofoundcart.png";

import "./SideModal.css";
import {
  getUserAddressService,
  removeCartItemService,
  showCartService,
} from "../../services";
import { resHandler } from "../../../helper";
import CartItemCard from "./CartItemCard";
import toast from "react-hot-toast";
import AddressModal from "./AddressModal";
import { useDispatch, useSelector } from "react-redux";
import ChangeAddress from "./ChangeAddress";
import { address_Action, cart_Action } from "../../containers/Home/masterContentSlice";
import { useNavigate } from "react-router-dom";
const isLogin = localStorage.getItem("jwt");
export default function CartModal({ name, CartCount,  ...props}) {
  const [cartData, setCartData] = useState();
  const [showCart, setShowCart] = useState(true);
  const [show, setShow] = useState(false);
  const saved_Address = useSelector((state) => state.allCategory);
  const [saved_Address_List, setSave_Address_List] = useState();
  const dispatch = useDispatch();
  const Cart_Data = useSelector((state) => state.allCategory.cart);
  const navigate = useNavigate();
  useEffect(() => {
    // showCartData();
    // getUserAddress();
  }, []);

  useEffect(() => {
    if (saved_Address?.address) {
      console.log(saved_Address.address, "saved_Address");
      setSave_Address_List(saved_Address.address);
    }
    
  }, [saved_Address]);

  useEffect(() =>{
    if(typeof Cart_Data !== 'undefined'){
      setCartData(Cart_Data)
    }
    else{
      showCartData()
    }
  },[Cart_Data])

  const findDefaultAddress = (data) => {
    const defaultAddress = data.find((obj) => obj.is_default === "1");
    return defaultAddress && JSON.parse(defaultAddress?.address);
  };

  // const getUserAddress = async() =>{
  //  await getUserAddressService().then(res =>{
  //     let {status, data, message} = resHandler(res);
  //     console.log(res, "userAdd");setCartData
  //   })
  // }

  // call show cart Service
  const showCartData = async () => {
    if (isLogin) {
      showCartService()
        .then((res) => {
          let { status, data, message } = resHandler(res);
          status && setCartData(data);
          status && dispatch(cart_Action(data))
          !status && dispatch(cart_Action({cartdata: [], total: '0'}))
          !status && setCartData();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShowCart(true);
  };

  const calculateTotalCoursePrice = (data) => {
    if (data && data.cartdata.length) {
      return data.cartdata.reduce((total, item) => {
        return total + parseFloat(item.course_price);
      }, 0);
    } else {
      return 0;
    }
  };
  const calculateTotalDeliveryCharge = (data) => {
    if (data && data.cartdata.length) {
      return data.cartdata.reduce((total, item) => {
        return total + parseFloat(item.delivery);
      }, 0);
    } else {
      return 0;
    }
  };
  const calculateTotalTaxCharge = (data) => {
    if (data && data.cartdata.length) {
      return data.cartdata.reduce((total, item) => {
        return total + parseFloat(item.tax);
      }, 0);
    } else {
      return 0;
    }
  };

  const handleRemoveItemFromCart = async (value) => {
    let formData = new FormData();
    formData.append("item_id", value);
    await removeCartItemService(formData).then((res) => {
      let { status, data, message } = resHandler(res);
      status && message && toast.success(message);
      !status && message && toast.error(message);
      status && showCartData();
      console.log(res);
    });
  };

 const handleSelectAddress = (value) =>{
  const updatedAddresses = saved_Address_List.map((address) => ({
    ...address,
    is_default: address.id === value ? '1' : '0',
  }));
  setSave_Address_List(updatedAddresses);
  setShowCart(true)
  // dispatch(address_Action())

 }
  return (
    <>
      <span className="cart-icon" onClick={handleShow}>
        <i
          className="fa fa-shopping-cart ms-2 text-white"
          aria-hidden="true"
          
        ></i><span className="cart-count">{CartCount}</span>
      </span>
      
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {showCart ? "My Cart" : "Change Address"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            showCart 
            && (
              !isLogin || !cartData?.cartdata.length ? (
                <div className="modal-cart-image text-center my-2">
                  <img src={NoFoundCart} />
                </div>
              ) : 
              (
                <div className="modal-content pg-cart-modal-content">
                  <hr className="m-0" />
                  <div className="modal-body">
                    <div className="cart-height">
                      {cartData &&
                        cartData.cartdata.length ?
                        cartData.cartdata.map((item, i) => {
                          return (
                            <CartItemCard
                              data={item}
                              removeItem={handleRemoveItemFromCart}
                              key={item.id}
                            />
                          );
                        })
                        :
                        <div className="modal-cart-image text-center my-2">
                  <img src={NoFoundCart} />
                </div>
                      }
                    </div>
                  </div>
                  <div className="cart-sticky">
                  <div className="cart-bill-detail mt-2">
                    <h5 className="mb-2">Bill Detail</h5>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>Price</h6>
                      <p className="mb-0">
                        ₹{calculateTotalCoursePrice(cartData).toFixed(2)}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>Tax</h6>
                      <p className="mb-0">
                        {" "}
                        ₹{calculateTotalTaxCharge(cartData).toFixed(2)}{" "}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>Delivery Charge</h6>
                      <p className="mb-0">
                        {" "}
                        ₹ {calculateTotalDeliveryCharge(cartData) ? calculateTotalDeliveryCharge(cartData).toFixed(2) : 'Free'}
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between total mt-2">
                      <h6>Total</h6>
                      <p className="mb-0"> ₹ {cartData && Number(cartData.total).toFixed(2)}</p>
                    </div>
                  </div>

                  {/* <div className="bg-white pg-delivery-add mt-3 p-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6>Delivery Address</h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="me-2">
                          {saved_Address_List && findDefaultAddress(saved_Address_List)?.city}
                        </p>
                        <button className="change-btn" onClick={() => setShowCart(false)}>Change</button>
                       
                      </div>
                    </div>
                  </div> */}
                  <hr />
                  <div className="modal-footer d-flex align-items-center justify-content-between pg-review-btn">
                    <button className="review-btn me-3" onClick={() => navigate('/my-cart')}>VIEW CART</button>
                    {/* <button className="review-btn1">CHECKOUT</button> */}
                  </div>
                  </div>
                </div>
              )
            ) 
//             : (
// ''             <ChangeAddress AddressList={saved_Address_List} changeSelectAddress={handleSelectAddress}/>
//             )
          
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
