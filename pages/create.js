import { useRouter } from "next/router";
import { useState } from "react";
import defaultImageURL from "@/public/images/defaultImageURL";
import styled from "styled-components";
import ProductForm from "@/components/Forms/ProductForm";
import ProductImage from "@/components/ProductImage";
import { addProduct } from "@/utils/productUtils";

const StyledMainWithPaddingBottom = styled.main`
  padding-bottom: 180px;
`;

export default function CreateProduct() {
  const router = useRouter();

  const [currentImageURL, setCurrentImageURL] = useState(defaultImageURL);
  function handleSetCurrentImageURL(url) {
    setCurrentImageURL(url);
  }

  async function createProduct(newProduct) {
    console.log(newProduct);
    await addProduct(newProduct);
    router.push("/");
  }
  return (
    <StyledMainWithPaddingBottom>
      <ProductImage imageSrc={currentImageURL} />
      <h2>New Product</h2>
      <ProductForm
        currentImageURL={currentImageURL}
        onSubmit={createProduct}
        onSetCurrentImageURL={handleSetCurrentImageURL}
      />
    </StyledMainWithPaddingBottom>
  );
}
