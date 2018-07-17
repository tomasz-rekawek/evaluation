var car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};

var getCarBrand = car.getBrand;

getCarBrand();