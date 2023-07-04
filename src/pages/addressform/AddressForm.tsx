import React, { useState } from "react";
import "./AddressForm.scss";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";

interface FormData {
  name: string;
  tel: string;
  email: string;
  address: string;
}

const Address = () => {
  const user = useAppSelector((state) => state.user.user);

  const [nameActive, setNameActive] = useState<boolean>(false);
  const [telActive, setTelActive] = useState<boolean>(false);
  const [emailActive, setEmailActive] = useState<boolean>(false);
  const [addressActive, setAddressActive] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    tel: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addAddress = async () => {
    await addDoc(collection(db, `users/${user?.uid}/addresses`), {
      name: formData.name,
      tel: formData.tel,
      email: formData.email,
      address: formData.address,
    });
  };

  return (
    <div className="addressForm">
      <h2 className="addressFromTitle">連絡先編集</h2>
      <div className="addressFormContainer">
        <form>
          <div className={`addressFormName ${nameActive ? "isActive" : ""}`}>
            <label className={formData.name ? "valid" : ""} htmlFor="name">
              名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onFocus={() => setNameActive(true)}
              onBlur={() => setNameActive(false)}
              onChange={(e) => handleInputChange(e)}
              value={formData.name}
            />
          </div>
          <div className={`addressFormTel ${telActive ? "isActive" : ""}`}>
            <label className={formData.tel ? "valid" : ""} htmlFor="tel">
              電話番号
            </label>
            <input
              type="text"
              id="tel"
              name="tel"
              onFocus={() => setTelActive(true)}
              onBlur={() => setTelActive(false)}
              onChange={(e) => handleInputChange(e)}
              value={formData.tel}
            />
          </div>
          <div className={`addressFormEmail ${emailActive ? "isActive" : ""}`}>
            <label className={formData.email ? "valid" : ""} htmlFor="email">
              メールアドレス
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onFocus={() => setEmailActive(true)}
              onBlur={() => setEmailActive(false)}
              onChange={(e) => handleInputChange(e)}
              value={formData.email}
            />
          </div>
          <div
            className={`addressFormAddress ${addressActive ? "isActive" : ""}`}
          >
            <label
              className={formData.address ? "valid" : ""}
              htmlFor="address"
            >
              住所
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onFocus={() => setAddressActive(true)}
              onBlur={() => setAddressActive(false)}
              onChange={(e) => handleInputChange(e)}
              value={formData.address}
            />
          </div>
        </form>
        <div className="addressFromFooter">
          <Link to="/addressBook">キャンセル</Link>
          <Link to="/addressBook" onClick={addAddress}>
            保存
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Address;
