import React,{useState} from "react";

const FormComp = ({setModal}) => {
  const [product, setProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState({});
  const [category, setCategory] = useState("");

  const handleFileHandler = (e) => {
    setFile(e.target.files[0]);
    let filer = new FileReader();
    let image = e.target.files;
    filer.onload = ()=>{

      const data = file.result;
      console.log(data);
    }
    filer.readAsDataURL(image[imageFile]);
  };
  const PostApi = async () => {
    const response = await fetch("http://localhost:5500/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        price: price,
        description: desc,
        image: file.name,
        category: category,
      }),
    });
    const data = await response.json();

    console.log(data);
    console.log(file);
  };

  console.log(product);
  const submitHandler = (e) => {
    e.preventDefault();

    PostApi();
    setCategory("");
    setDesc("");
    setTitle("");
    setPrice("");
    setFile("");
    setModal(true);
  };

  return (
    <div className="addproduct--contain">
      <h1 className="addproduct__heading">Add a Product</h1>
      <form action="" onSubmit={submitHandler} className="addproduct__form">
        <div className="addproduct__form_items">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter The Title"
          />
        </div>
        <div className="addproduct__form_items">
          <input
            value={category}
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter the Category"
          />
        </div>
        <div className="addproduct__form_items">
          <input
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter the price"
          />
        </div>
        <div className="addproduct__form_items">
          <label>Enter The description</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter the description" />
        </div>
        <div className="addproduct__form_items addproduct__form_items--file">
          <label>
            Upload the file{" "}
            <input type="file" id="file" onChange={handleFileHandler} />
          </label>
        </div>
        <div className="addproduct__form_items">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
