import axios from "axios";
import { _ } from "../main_controler";
export const handleEmail = async () => {
  console.log(_("#email").value);
  await axios
    .post(
      "http://localhost:5000/email/emailCheck",
      {
        email_id: _("#email").value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response.data.mssg);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const handleRegister = async () => {
  console.log(document.getElementById("email").value);
  await axios
    .post(
      "http://localhost:5000/registration/register",
      {
        email_id: _("#email").value,
        first_name: _("#username").value,
        password: _("#username").value,
        confirm_password: _("#confirmpassword").value,
        otp: _("#otp").value,
        ph_num: _("#phonenumber").value,
        Owner_legal_name: _("#onerfullname").value,
        company_name: _("#legalcompanyname").value,
        contact_person_fullname: _("#contactperson").value,
        street_adress: _("#streetadress").value,
        zipcode: _("#zipcode").value,
        Employee_identification_number: _("#identificationnumber").value,
        Authority_number: _("#authoritynumber").value,
        DBA_name: _("#dbaname").value,
        sameas_owner_info_phno: _("#SameasOwnerphn").value,
        adress_line: _("#addressline").value,
        select_state: _("#state").value,
        city: _("#city").value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response.data.mssg);
    })
    .catch(function (error) {
      console.log(error);
    });
};
