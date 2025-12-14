import React, { useEffect, useState } from "react";
import Button5 from "../Buttons/Button5/Button5";
import useInput from "../useInput";
import { saveUserAddressService } from "../../services";
import { parseJson, resHandler } from "../../../helper";
import toast from "react-hot-toast";

export default function AddressModal({ editaddress, address_id, closeAddresModal }) {
  const { value: name, bind: bindName, setValue: setName } = useInput("");
  const { value: email, bind: bindEmail, setValue: setEmail } = useInput("");
  const {
    value: fullAddress,
    bind: bindFullAddress,
    setValue: setFullAddress,
  } = useInput("");
  const {
    value: districtName,
    bind: bindDistrictName,
    setValue: setDistrictName,
  } = useInput("");
  const {
    value: LandMark,
    bind: bindLandMark,
    setValue: setLandMark,
  } = useInput("");
  const { value: City, bind: bindCity, setValue: setCity } = useInput("");
  const { value: State, bind: bindState, setValue: setState } = useInput("");
  const { value: Pin, bind: bindPin, setValue: setPin } = useInput("");
  const {
    value: MobileNumber,
    bind: bindMobileNumber,
    setValue: setMobileNumber,
  } = useInput("");
  const [isDefault, setIsDefault] = useState(0);

  const [nameError, setNameError] = useState();
  const [cityError, setCityError] = useState();
  const [stateError, setStateError] = useState();
  const [PinError, setPinError] = useState();
  const [MobileError, setMobileError] = useState();
  const [AddressError, setAddressError] = useState();
  const [BuildingError, setBuildingError] = useState();

  useEffect(() => {
    if (typeof editaddress != 'undefined') {
      const editaddress2 = parseJson(editaddress);
      setName(editaddress2.name);
      setEmail(editaddress2.email);
      setFullAddress(editaddress2.address);
      setDistrictName(editaddress2.district);
      setLandMark(editaddress2.landmark);
      setCity(editaddress2.city);
      setState(editaddress2.state);
      setPin(editaddress2.pincode);
      setMobileNumber(editaddress2.mobile)
    }
  }, [editaddress])

  const handleSaveAddress = async () => {
    // e.preventDefault();
    setNameError("");
    setCityError("");
    setStateError("");
    setPinError("");
    setMobileError("");
    setAddressError("");
    setBuildingError("");
    console.log(name.length > 3,
      fullAddress.length,
      districtName.length,
      City.length >= 3,
      State.length,
      Pin.length == 6,
      MobileNumber == 10)
    if (
      name.length > 3 &&
      fullAddress.length &&
      districtName.length &&
      City.length >= 3 &&
      State.length &&
      Pin.length == 6 &&
      MobileNumber.length == 10
    ) {
      const Address = {
        name: name,
        address: fullAddress + ' ' + LandMark,
        email: email,
        // fullAddress: fullAddress,
        // flat_no: buildingName,
        // landmark: LandMark,
        city: City,
        district: districtName,
        orderNotes: '',
        state: State,
        pincode: Pin,
        mobile: MobileNumber,
      };
      console.log("clicked");
      let formData = new FormData();
      { typeof address_id != 'undefined' && formData.append('id', address_id); }
      formData.append("address", JSON.stringify(Address));
      formData.append("is_default", isDefault);

      await saveUserAddressService(formData)
        .then((res) => {
          let { status, data, message } = resHandler(res);
          console.log(res, "save address");
          if (status) {
            message && toast.success(message);
            closeAddresModal();
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("false")
      if (name.length <= 3) {
        setNameError("Name field is requied");
      }
      if (City.length < 3) {
        setCityError("City field is required");
      }
      if (!State.length) {
        setStateError("State field is Required.");
      }
      if (Pin.length < 6) {
        setPinError("Pin code should be 6 digit.");
      }
      if (MobileNumber.length < 10) {
        setMobileError("Mobile field should be 10 digits.");
      }
      if (!fullAddress.length) {
        setAddressError("Address field is required");
      }
      if (!districtName.length) {
        setBuildingError("district field is required");
      }
    }
  };

  const handleMobileNumber = (event) => {
    const cleanedNumber = event.target.value
      .replace(/\D/g, "")
      .substring(0, 10);
    setMobileNumber(cleanedNumber);
  };

  const handlePin = (event) => {
    const cleanedPin = event.target.value.replace(/\D/g, "").substring(0, 6);
    setPin(cleanedPin);
  };

  const handleIsDefault = (e) => {
    // console.log(e.target.checked, "check")
    e.target.checked ? setIsDefault(1) : setIsDefault(0);
  };
  return (
    <div className="mt-2 px-3">
      <form onSubmit={handleSaveAddress}>
        <input
          type="text"
          value={name}
          placeholder="Enter Name*"
          className="form-control w-100 border p-2 rounded"
          maxLength={20}
          {...bindName}
        />
        <p className="error">{nameError && nameError}</p>
        <input
          type="text"
          value={email}

          placeholder="Enter Email"
          className="form-control  w-100 border p-2 mb-2 rounded"
          maxLength={30}
          {...bindEmail}
        />
        {/* {emailError && <p className='error'>{emailError}</p>} */}
        <input
          type="text"
          value={fullAddress}

          placeholder="Enter Full Address*"
          className="form-control w-100 border p-2 rounded"
          maxLength={50}
          {...bindFullAddress}
        />
        <p className="error">{AddressError && AddressError}</p>

        {/* <input
          type="text"
          value={LandMark}
          
          placeholder="Landmark(optional)"
          className="form-control w-100 border p-2 mb-2 rounded"
          maxLength={40}
          {...bindLandMark}
        /> */}
        <input
          type="text"
          value={City}

          placeholder="City*"
          className="form-control w-100 border p-2 rounded"
          maxLength={40}
          {...bindCity}
        />

        <p className="error">{cityError && cityError}</p>

        <input
          type="text"
          value={districtName}

          placeholder="District*"
          className="w-100 border p-2 rounded"
          maxLength={20}
          {...bindDistrictName}
        />
        <p className="error">{BuildingError && BuildingError}</p>


        <input
          type="text"
          value={State}
          placeholder="State*"
          className="form-control w-100 border p-2 rounded"
          maxLength={30}
          {...bindState}
        />
        <p className="error">{stateError && stateError}</p>
        <input
          type="text"
          value={Pin}
          placeholder="Pin*"
          className="form-control w-100 border p-2 rounded"
          onChange={handlePin}
        />
        <p className="error">{PinError && PinError}</p>
        {/* <select className="form-select shadow-none" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                   </select>
                   <select className="form-select shadow-none" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                   </select> */}
        <input
          type="tel"
          maxLength={10}
          value={MobileNumber}

          placeholder="Mobile no.*"
          className="w-100 border p-2 rounded"
          onChange={handleMobileNumber}
        />
        <p className="error">{MobileError && MobileError}</p>
        <input
          type="checkbox"
          onClick={handleIsDefault}
          id="default"
        />{" "}
        <label htmlFor="default">Default</label>
        <div className="my-3">
          <Button5 type={'button'} name={"Save Address"} onButtonClick={(e) => handleSaveAddress(e)} />
        </div>
      </form>
    </div>
  );
}
