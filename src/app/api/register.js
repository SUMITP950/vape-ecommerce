import axios from "axios";
import { _ } from "../main_controler";
import { toast } from "react-toastify";
export const aa = () => {
  if (_("#email_id").value == "a") {
    _(".next").style.display = true;
  }
};
export const handleEmail = async () => {
  console.log(_("#email").value);
  await axios
    .post(
      "http://localhost:5000/otp/registerSendOtp",
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
      if (response.data.status === "success") {
        toast.success(`${response.data.mssg}`);
        console.log("Generated OTP:", otp);
        alert(`Your otp is ${response.data.otp}`);
      }

      if (response.data.status === "error") {
        // alert(response.data.mssg);
        toast.error(`Failed : ${response.data.mssg}`);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
// email conform password end
// Total form staart
export const handleRegister = async () => {
  // console.log(document.getElementById("email").value);
  // console.log(document.getElementById("username").value);
  await axios
    .post(
      "http://localhost:5000/registration/register",
      {
        email_id: _("#email").value,
        User_name: _("#username").value,
        password: _("#password").value,
        confirm_password: _("#confirmpassword").value,
        otp: _("#otp").value,
        phone_number: _("#phonenumber").value,
        ccode: _("#ccode").value,
        Owner_legal_name: _("#ownerfullname").value,
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
