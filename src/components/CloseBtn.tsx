import React from "react";

interface CloseBtnType {
  onClick: () => void;
}

const CloseBtn: React.FC<CloseBtnType> = ({ onClick }) => {
  return (
    <div className="close-btn" onClick={onClick}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </div>
  );
};

export default CloseBtn;
