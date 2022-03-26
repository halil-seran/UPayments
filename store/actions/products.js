export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";

const API_URL =
  "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";

export const getProducts = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_PRODUCTS,
          payload: json,
        });
      } else {
        console.log("Unable to Fetch");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${productId}`, //${} this is vanilla js
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    dispatch({
      type: DELETE_PRODUCT,
      pid: productId,
    });
  };
};

export const createProduct = (avatar, name, price, description, category) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar,
          name,
          price,
          description,
          category,
          ownerId: userId,
          developerMail: mail,
        }),
      }
    );

    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        avatar,
        name,
        price,
        description,
        category,
        ownerId: userId,
        developerMail: mail,
      },
    });
  };
};
