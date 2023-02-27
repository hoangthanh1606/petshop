import React, { useEffect, useState } from "react";
import Image from "../../components/Image/Image";
import { getAnimals } from "../../services/fetchAPI";
import Message from '../../utils/Message';
import './Animals.css';

const ListAnimal = (props) => {
  const [animalList, setAnimalList] = useState([]);

  const getListAnimal = async () => {
    const res = await getAnimals();
    if (res?.status === 200) {
      setAnimalList(res?.data?.animals);
    }
  };

  useEffect(() => {
    getListAnimal();
  }, []);

  return (
    <>
      <section className="section all-products">
        <div className="top container">
          <h1>All Products</h1>
        </div>
        <div className="product-center container">
          {animalList.map((animal) => (
            <div className="card" key={animal?.id}>
              <div className="card-head">
                <Image
                  src={animal?.primary_photo_cropped?.full}
                  alt="animal"
                  className="animal-img"
                />
              </div>
              <div className="card-body">
                <div className="animal-title">
                  <h1 title={animal?.name}>
                    {animal?.name}{" "}
                    <span className="badge">{animal?.species}</span>
                  </h1>
                </div>
                <div className="animal-caption">{animal?.age}</div>
                <div className="animal-info">
                  <h4>Info</h4>
                  <ul>
                    <li>
                      <span className="labels">Status:</span>
                      {animal?.status}
                    </li>
                    <li>
                      <span className="labels">Size:</span>
                      {animal?.size}
                    </li>
                    <li>
                      <span className="labels">Age:</span>
                      {animal?.gender}
                    </li>
                  </ul>
                </div>
                <div className="animal-discription">
                  <h4>Description</h4>
                  <p>{animal?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {animalList.length === 0 && (<Message type='warning' message={`Fetch data Petfinder is 429 status error`}/>)}
      {animalList.length > 0 && (
        <section className="pagination">
          <div className=" container">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>
              <i className="bx bx-right-arrow-alt" />
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default ListAnimal;
