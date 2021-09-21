import React,{ useState } from "react";
import Grid from "../../user/Grid";
import FormItem from "./FormItem";

const Colors = (props) => {
  return (
    <>
      {props.colors.map((item, index) => (
        <div key={index}>
          <h3>{item.toUpperCase()} COLOR</h3>
          {props.children}
        </div>
      ))}
    </>
  );
};

const FormQuantity = (props) => {
    const quantityOfEachSize = []
    props.sizes.map((item) =>{
        return quantityOfEachSize.push({[`numberOfSize${item}`]:100})
    })
    const quantitySizeOfEachColor = [];
    props.colors.map(item => (quantitySizeOfEachColor.push({color: item,quantityOfEachSize})))
  const [numberOfEachSize,setNumberOfEachSize] = useState(quantitySizeOfEachColor)

  const OnchangeHandler = (e) => {
      setNumberOfEachSize(numberOfEachSize.push({[e.target.name]:e.target.value}))
      console.log(numberOfEachSize);
  }
  let dem = 0
  return (
    <div className="form__item">
      <label className="form__item__label">Số lượng sản phẩm cho mỗi màu</label>
      <Grid col={props.colors.length} mdCol={2} smCol={1} gap={20}>
        <Colors colors={props.colors}>
          {props.sizes.map((size, i) => {
            if(i <= props.colors.length-1){
                dem = i
            }
            return(
            <FormItem
              title={`Số lượng Size ${size}`}
              type="number"
              name={`numberOfSize${size}`}
              id={`number-of-size-${size}`}
              placeholder="Số lượng"
              key={i}
              defaultValue={quantitySizeOfEachColor[dem].quantityOfEachSize[i][`numberOfSize${size}`]}
            />
          )})}
        </Colors>
      </Grid>
    </div>
  );
};

export default FormQuantity;
