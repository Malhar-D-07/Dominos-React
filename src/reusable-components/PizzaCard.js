import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./PizzaCard.scss";
import "../stylesheets/common.scss";

export default function PizzaCard(props) {
  const [sizeAndCrust, setSizeAndCrust] = React.useState("");

  const handleChange = (event) => {
    console.log("---------------");
    console.log(event.target.value);
    setSizeAndCrust(event.target.value);
  };

  return (
    <Card className="pizza-card-wrapper" sx={{ maxWidth: 280 }}>
      <div className="pizza-image-wrapper">
        <CardMedia
          component="img"
          height="194"
          image={props.pizza.img}
          alt={props.pizza.name}
        />
        <img
          className="veg-non-veg-image"
          src={
            props.pizza.veg
              ? "https://img.icons8.com/color/24/null/vegetarian-food-symbol.png"
              : "https://img.icons8.com/color-glass/24/null/non-vegetarian-food-symbol.png"
          }
        />
        <p className="pizza-price">&#x20B9;{props.pizza.price}</p>
      </div>
      <CardContent>
        <div className="card-content">
          <h4 className="pizza-name">{props.pizza.name}</h4>
          <p className="card-body-content font-size-14">{props.pizza.description}</p>
        </div>
        <Divider variant="middle" />
        <div className="size-and-crust">
          <FormControl size="small">
            <InputLabel id="demo-select-small">Size And Crust</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={sizeAndCrust}
              label="Size And Crust"
              onChange={handleChange}
            >
              {props.pizza.sizeandcrust.map((item, index) => {
                return (
                  <MenuItem key={index} value={Object.keys(item)[0]}>
                    <span>
                      <span>{Object.keys(item)[0]}: </span>
                      <span>{Object.values(item)[0]}</span>
                    </span>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <Button size="small" variant="outlined" color="success">
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
}
