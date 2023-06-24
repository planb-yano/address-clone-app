import React, { useState } from "react";
import "./AddressForm.scss";
import { Link } from "react-router-dom";

const Address = () => {
  const [nameActive, setNameActive] = useState<boolean>(false);
  const [telActive, setTelActive] = useState<boolean>(false);
  const [emailActive, setEmailActive] = useState<boolean>(false);
  const [addressActive, setAddressActive] = useState<boolean>(false);
  return (
    <div className="addressForm">
      <h2 className="addressFromTitle">連絡先編集</h2>
      <div className="addressFormContainer">
        <form>
          <div className={`addressFormName ${nameActive ? "isActive" : ""}`}>
            <label htmlFor="name">名前</label>
            <input
              type="text"
              id="name"
              name="name"
              onFocus={() => setNameActive(true)}
              onBlur={() => setNameActive(false)}
            />
          </div>
          <div className={`addressFormTel ${telActive ? "isActive" : ""}`}>
            <label htmlFor="tel">電話番号</label>
            <input
              type="text"
              id="tel"
              name="tel"
              onFocus={() => setTelActive(true)}
              onBlur={() => setTelActive(false)}
            />
          </div>
          <div className={`addressFormEmail ${emailActive ? "isActive" : ""}`}>
            <label htmlFor="email">メールアドレス</label>
            <input
              type="text"
              id="email"
              name="email"
              onFocus={() => setEmailActive(true)}
              onBlur={() => setEmailActive(false)}
            />
          </div>
          <div className={`addressFormAddress ${addressActive ? "isActive" : ""}`}>
            <label htmlFor="address">住所</label>
            <input
              type="text"
              id="address"
              name="address"
              onFocus={() => setAddressActive(true)}
              onBlur={() => setAddressActive(false)}
            />
          </div>
        </form>
        <div className="addressFromFooter">
          <Link to="/addressBook">キャンセル</Link>
          <Link to="/addressBook">保存</Link>
        </div>
      </div>
    </div>
  );
};

export default Address;
