import { Link } from "react-router-dom";
import { categoriesName } from "../Constant";

const Categories = () => {
  const returnCategories = () => {
    const categoriesArray = [];

    for (let i = 0; i < categoriesName.length / 2; i++) {
      let k = i;

      if (k > 0) {
        k = 2;
        k *= i;
      }

      categoriesArray.push(
        <div className="category-container" key={categoriesName[i]}>
          <Link
            to={`/categoryList/${categoriesName[k]}`}
            className="category-item"
          >
            <div className="category-Img">
              <img src={`Images/category-${k}.jpg`} alt="" />
            </div>
            <div className="category-content">
              <p>{categoriesName[k]}</p>
              <p></p>
            </div>
            <div className="category-icon">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </Link>
          <Link
            to={`/categoryList/${categoriesName[k + 1]}`}
            className="category-item"
          >
            <div className="category-Img">
              <img src={`Images/category-${k + 1}.jpg`} alt="" />
            </div>
            <div className="category-content">
              <p>{categoriesName[k + 1]}</p>
              <p></p>
            </div>
            <div className="category-icon">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
          </Link>
        </div>
      );
    }

    return categoriesArray;
  };

  return (
    <section className="Section-categoris">
      <div className="addCategories">
        <p>Categories</p>
        {returnCategories()}
      </div>
    </section>
  );
};

export default Categories;
