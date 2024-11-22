import { useState } from "react"; // إضافة useState
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-card.css";

const ProductCard = ({ title, productItem, handleLikeToggle }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const [liked, setLiked] = useState(false); // إضافة حالة liked

  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };

  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };

  const handleLike = () => {
    setLiked(!liked); // تغيير حالة liked
    handleLikeToggle(productItem); // تمرير المنتج إلى Navbar
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img loading="lazy" onClick={handelClick} src={productItem.imgUrl} alt="" />
      <div className="product-like" onClick={handleLike}> {/* إضافة onClick */}
        <ion-icon name={liked ? "heart" : "heart-outline"}></ion-icon> {/* تغيير الأيقونة بناءً على liked */}
      </div>
      <div className="product-details">
        <h3 onClick={handelClick}>{productItem.productName}</h3>
        <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;