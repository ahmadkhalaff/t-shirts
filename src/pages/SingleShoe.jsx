import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getSingleShoe, updateShoeById, deleteShoeById } from "../api";
import { useState, useEffect } from "react";
import InputField from "../components/InputField";
import './ShoeStyle.css'

function SingleShoe() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [editable, setEditable] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      getSingleShoe(id)
        .then((res) => {
          setLoading(false);
          setProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    };
    fetchProduct();
  }, [id]);

  const handleEdit = () => {
    setEditable(!editable);
  };

  const SaveEdit = () => {
    setLoading(true);
    updateShoeById(id, product)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
        setEditable(false);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }

  const handleDelete = () => {
    setLoading(true);
    deleteShoeById(id)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
        setEditable(false);
        alert("Shoe deleted successfully");
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }


  return (
    <div className="_single_shoe_Parent">
      <h1>
        Shirt ID : <span className="priceText">{id}</span>
      </h1>
      {loading && <Loader />}
      {error && (
        <p className="errorText">
          {error.message} <br />
          No Record Found with this ID
        </p>
      )}
      {success && <p className="successText">Shoe updated successfully</p>}
      {!error && (
        <div className="_form_Parent">
          <img src={product?.image_url} alt="" style={{ height: "500px" }} />
          <div className="_form_fields_container ">
            <InputField
              placeholder="Title"
              value={product?.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              label="Title"
              type="text"
              editable={editable}
            />

            <InputField
              placeholder="Description"
              value={product?.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              label="Description"
              type="text"
              editable={editable}
            />
            <InputField
              placeholder="Price"
              value={product?.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              label="Price"
              type="text"
              editable={editable}
            />

            <InputField
              placeholder="Image URL"
              value={product?.image_url}
              onChange={(e) =>
                setProduct({ ...product, image_url: e.target.value })
              }
              label="Image URL"
              type="text"
              editable={editable}
            />

            <div className="button_container">
              {editable ? (
                <button className="_action_button" onClick={SaveEdit}>
                  Save Shoe
                </button>
              ) : (
                <button className="_action_button" onClick={handleEdit}>
                  Edit Shoe
                </button>
              )}

              <button className="_action_button" onClick={handleDelete}>
                Delete Shoe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleShoe;
