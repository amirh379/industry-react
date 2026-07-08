import React from "react";
import { formatToman } from "@/utlis/formatToman";

export default function ShopFeatures() {
  return (
    <div className="section-full p-t50 p-b20 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="icon-bx-wraper left shop-service-info m-b30">
              <div className="icon-md text-black radius">
                <a href="#" className="icon-cell text-white">
                  <i className="fas fa-gift" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte">
                  ارسال رایگان برای سفارش‌های بالای {formatToman(60)}
                </h5>
                <p>
                  سفارش خود را بیشتر از {formatToman(60)} ثبت کنید و از ارسال
                  رایگان به سراسر کشور بهره‌مند شوید. اطلاعات بیشتر.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="icon-bx-wraper left shop-service-info m-b30">
              <div className="icon-md text-black radius">
                <a href="#" className="icon-cell text-white">
                  <i className="fas fa-plane" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte">ارسال به سراسر کشور</h5>
                <p>
                  ما به تمامی استان‌های کشور و همچنین کشورهای همسایه ارسال
                  داریم.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="icon-bx-wraper left shop-service-info m-b30">
              <div className="icon-md text-black radius">
                <a href="#" className="icon-cell text-white">
                  <i className="fas fa-history" />
                </a>
              </div>
              <div className="icon-content">
                <h5 className="dlab-tilte">۶۰ روز ضمانت بازگشت وجه!</h5>
                <p>
                  اگر از محصول ما راضی نبودید، آن را برگردانید تا ۱۰۰٪ وجه شما
                  بازگردانده شود!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
