import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMainContext } from "../../../context";
import {
  login as loginUrl,
  forgetPass,
  validation,
} from "../../../utils/Apis/index";
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { post, state, setState, dispatch } = useMainContext();
  const navigate = useNavigate();
  const login = async (form) => {
    setLoading(true);
    const { data, status } = await post(loginUrl, form,true);
    if (+status == 200 && data?.user && data?.access_token) {
      dispatch("user", data);
      navigate("/");
    }
    setLoading(false);
  };
  return {
    login,
    loading,
  };
};
// export const useOtp = () => {
//   const [form, setForm] = useState({});
//   const [showResend, setShowResend] = useState(false);
//   const [seconds, setSeconds] = useState(120);
//   const [loading, setLoading] = useState(false);
//   const { post, state, setState, dispatch } = useMainContext();
//   const navigate = useNavigate();
//   const check = async (code = null) => {
//     const { status, data } = await post(validation, {
//       code,
//       mobile: state.userStatus.mobile,
//     });
//     if (+status == 200) {
//       dispatch("user", data);
//       if (state.userStatus.new_user == "1") {
//         navigate("/register");
//       } else {
//         navigate("/dashboard");
//       }
//     }
//     setLoading(false);
//   };
//   const resendCode = async () => {
//     setLoading(true);
//     const { status } = await post(resend, {
//       mobile: state.userStatus.mobile,
//     });
//     if (+status == 200) {
//       setSeconds(120);
//       setShowResend(false);
//     }
//     setLoading(false);
//   };
//   const handler = (key, value) => {
//     setForm({ ...form, [key]: value });
//   };
//   useEffect(() => {
//     let interval = null;
//     if (!showResend && seconds !== 0) {
//       interval = setInterval(() => {
//         setSeconds((seconds) => seconds - 1);
//       }, 1000);
//     } else {
//       setShowResend(true);
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [showResend, seconds]);
//   const secondsToTime = () => {
//     let divisor_for_minutes = seconds % (60 * 60);
//     let minutes = Math.floor(divisor_for_minutes / 60);
//     let divisor_for_seconds = divisor_for_minutes % 60;
//     let sec = Math.ceil(divisor_for_seconds);
//     let obj = {
//       m: minutes,
//       s: sec,
//     };
//     return obj;
//   };
//   return {
//     check,
//     loading,
//     handler,
//     form,
//     state,
//     showResend,
//     secondsToTime,
//     resendCode,
//   };
// };
