let selectedId = null;
import { https } from "../../service/service.js";
import { layThongTinForm, renderFoodList, showData } from "./controller-v2.js";

let fectFoodList = () => {
  https
    .get(`/foodlist`)
    .then((res) => {
      renderFoodList(res.data.reverse());
    })
    .catch((err) => {
      console.log(err);
    });
};
fectFoodList();

// xóa món ăn
window.deleteFood = (id) => {
  https
    .delete(`/foodlist/${id}`)
    .then((res) => {
      fectFoodList();
    })
    .catch((err) => {
      console.log("🚀 ~ window.deleteFood ~ err:", err)
      
    });
};
// thêm món
window.addFood = () => {
  let data = layThongTinForm();

  https
    .post(`/foodlist`, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fectFoodList();
    })
    .catch((err) => {
     console.log("🚀 ~ err:", err)
     
    });
};
// sữa 
window.editFood = (id) => {
  selectedId = id;
  https
    .get(`/foodlist/${id}`)
    .then((res) => {
     console.log("🚀 ~ .then ~ res:", res)
     
      $("#exampleModal").modal("show");
      showData(res.data);
    })
    .catch((err) => {
     console.log("🚀 ~ err:", err)
     
    });
};
// cập nhật 
window.updateFood = () => {
  let data = layThongTinForm();

  https
    .put(`/foodlist/${data.ma}`, data)
    .then((res) => {
      $("#exampleModal").modal("hide");
      fectFoodList();
    })
    .catch((err) => {
     console.log("🚀 ~ err:", err)
     
    });
};
