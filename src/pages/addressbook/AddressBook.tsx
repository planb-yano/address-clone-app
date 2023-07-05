import React, { useEffect, useState } from "react";
import "./AddressBook.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const AddressBook = () => {
  const user = useAppSelector((state) => state.user.user);
  const [addresses, setAddresses] = useState<
    {
      name: string;
      tel: string;
      email: string;
      address: string;
      id: string;
    }[]
  >();

  useEffect(() => {
    let collectionRef = collection(db, `users/${user?.uid}/addresses`);
    onSnapshot(collectionRef, (snapshot) => {
      let results: {
        name: string;
        tel: string;
        email: string;
        address: string;
        id: string;
      }[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          name: doc.data().name,
          tel: doc.data().tel,
          email: doc.data().email,
          address: doc.data().address,
          id: doc.id,
        });
      });
      setAddresses(results);
    });
  }, []);

  return (
    <div className="addressBook">
      <div className="addressBookContainer">
        <h2 className="addressBookTitle">連絡先一覧</h2>
        <div className="addressBookMain">
          <Link to="edit" className="addressFormAdd">
            連絡先追加
          </Link>
          <div className="addressBookTable">
            <table>
              <thead>
                <tr>
                  <th>名前</th>
                  <th>電話番号</th>
                  <th>メールアドレス</th>
                  <th>住所</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {addresses?.length === 0 ? (
                  <tr>
                    <td colSpan={5}>登録されている連絡先はありません</td>
                  </tr>
                ) : (
                  addresses?.map((address, index) => (
                    <tr key={index}>
                      <td>{address.name}</td>
                      <td>{address.tel}</td>
                      <td>{address.email}</td>
                      <td>{address.address}</td>
                      <td>
                        <Link to={`${address.id}/edit`}>
                          <EditIcon fontSize="small" />
                        </Link>
                        <DeleteIcon fontSize="small" />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
