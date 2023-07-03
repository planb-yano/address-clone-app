import React from "react";
import "./AddressBook.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const AddressBook = () => {
  return (
    <div className="addressBook">
      <div className="addressBookContainer">
        <h2 className="addressBookTitle">連絡先一覧</h2>
        <div className="addressBookMain">
          <Link to="/addressForm" className="addressFormAdd">
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
                <tr>
                  <td>テストユーザー1</td>
                  <td>000-1111-2222</td>
                  <td>example@docomo.ne.jp</td>
                  <td>大阪府hogehoge</td>
                  <td>
                    <Link to="/addressForm">
                      <EditIcon fontSize="small" />
                    </Link>
                    <DeleteIcon fontSize="small" />
                  </td>
                </tr>
                <tr>
                  <td>テストユーザー1</td>
                  <td>000-1111-2222</td>
                  <td>example@docomo.ne.jp</td>
                  <td>大阪府hogehoge</td>
                  <td>
                    <Link to="/addressForm">
                      <EditIcon fontSize="small" />
                    </Link>
                    <DeleteIcon fontSize="small" />
                  </td>
                </tr>
                <tr>
                  <td>テストユーザー1</td>
                  <td>000-1111-2222</td>
                  <td>example@docomo.ne.jp</td>
                  <td>大阪府hogehoge</td>
                  <td>
                    <Link to="/addressForm">
                      <EditIcon fontSize="small" />
                    </Link>
                    <DeleteIcon fontSize="small" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
