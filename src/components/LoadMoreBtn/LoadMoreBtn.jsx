import { BtnLoadMore } from "./LoadMoreBtn.styles";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <BtnLoadMore type="button" onClick={onClick}>
      Load more
    </BtnLoadMore>
  );
};

export default LoadMoreBtn;
